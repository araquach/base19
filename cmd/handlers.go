package main

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/mailgun/mailgun-go/v3"
	"github.com/russross/blackfriday"
	"io/ioutil"
	"log"
	"math/rand"
	"net/http"
	"os"
	"path"
	"sort"
	"strings"
	"time"
)

func forceSsl(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if os.Getenv("GO_ENV") == "production" {
			if r.Header.Get("x-forwarded-proto") != "https" {
				sslUrl := "https://" + r.Host + r.RequestURI
				http.Redirect(w, r, sslUrl, http.StatusTemporaryRedirect)
				return
			}
		}
		next.ServeHTTP(w, r)
	})
}

func home(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	// Generate version number for scripts and css
	rand.Seed(time.Now().UnixNano())

	var t, d, i string

	vars := mux.Vars(r)
	dir := vars["category"]
	name := vars["name"]

	if name == "" {
		name = "home"
	}

	if dir == "team" && len(name)  > 0 {
		db := dbConn()
		m := TeamMember{}
		db.Where("slug = ?", name).First(&m)
		db.Close()

		t = m.FirstName + " " + m.LastName
		d = m.Para1 + " " + m.Para2
		i = "https://www.basehairdressing.com/dist/img/fb_meta/" + m.Image + ".png"
	} else if dir == "blog" {
		path := path.Join(dir, name)

		data, err := ioutil.ReadFile(path + ".txt")
		if err != nil {
			fmt.Println(err)
			return
		}
		lines := strings.Split(string(data), "\n")
		t = string(lines[0])
		i = string(lines[4])
		d = string(lines[6])

	} else {
		db := dbConn()
		m := MetaInfo{}
		db.Where("page = ?", name).First(&m)
		db.Close()

		t = m.Title
		d = m.Text
		i = "https://www.basehairdressing.com/dist/img/fb_meta/" + m.Image + ".png"
	}

	path := path.Join(dir, name)

	v := string(rand.Intn(30))

	meta := map[string]string{
		"ogTitle":       t,
		"ogDescription": d,
		"ogImage":       i,
		"ogImageWidth":  "1200",
		"ogImageHeight": "628",
		"ogUrl":         "https://www.basehairdressing.com/" + path,
		"version":       v,
	}

	if err := tpl.Execute(w, meta); err != nil {
		panic(err)
	}
}

// api

func apiTeam(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	db := dbConn()
	team := []TeamMember{}
	db.Where("salon = ?", 3).Order("position").Find(&team)
	db.Close()

	json, err := json.Marshal(team)
	if err != nil {
		log.Println(err)
	}
	w.Write(json)
}

func apiTeamMember(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	vars := mux.Vars(r)
	param := vars["slug"]

	db := dbConn()
	tm := TeamMember{}
	db.Where("slug = ?", param).First(&tm)
	db.Close()

	json, err := json.Marshal(tm)
	if err != nil {
		log.Println(err)
	}
	w.Write(json)
}

func apiReviews(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	reviews := []Review{}

	vars := mux.Vars(r)

	param := vars["tm"]
	param = strings.Title(param)

	if param == "All" {
		db := dbConn()
		db.Find(&reviews)
		db.Close()
	} else {
		db := dbConn()
		db.Where("staff LIKE ?", "Staff: "+param+" %").Find(&reviews)
		db.Close()
	}

	json, err := json.Marshal(reviews)
	if err != nil {
		log.Println(err)
	}
	w.Write(json)
}

func apiSendMessage(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)

	var data ContactMessage
	err := decoder.Decode(&data)
	if err != nil {
		panic(err)
	}

	mg := mailgun.NewMailgun(os.Getenv("MAILGUN_DOMAIN"), os.Getenv("MAILGUN_KEY"))

	sender := "info@basehairdressing.co.uk"
	subject := "New Message for Base"
	body := data.Message
	recipient := "adam@jakatasalon.co.uk"

	// The message object allows you to add attachments and Bcc recipients
	message := mg.NewMessage(sender, subject, body, recipient)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second*10)
	defer cancel()

	// Send the message	with a 10 second timeout
	resp, id, err := mg.Send(ctx, message)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("ID: %s Resp: %s\n", id, resp)

	return
}

func apiJoinus(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)

	var data JoinusApplicant
	err := decoder.Decode(&data)
	if err != nil {
		panic(err)
	}

	db := dbConn()
	db.Create(&data)

	mg := mailgun.NewMailgun(os.Getenv("MAILGUN_DOMAIN"), os.Getenv("MAILGUN_KEY"))

	sender := "info@basehairdressing.co.uk"
	subject := "New Job Applicant for Base"
	body := data.Info
	recipient := "adam@jakatasalon.co.uk"

	// The message object allows you to add attachments and Bcc recipients
	message := mg.NewMessage(sender, subject, body, recipient)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second*10)
	defer cancel()

	// Send the message	with a 10 second timeout
	resp, id, err := mg.Send(ctx, message)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("ID: %s Resp: %s\n", id, resp)

	return
}

func apiModel(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)

	var data ModelApplicant
	err := decoder.Decode(&data)
	if err != nil {
		panic(err)
	}

	db := dbConn()
	db.Create(&data)
	if err != nil {
		log.Fatal(err)
	}
	return
}

func apiBookings(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)

	var data Booking
	err := decoder.Decode(&data)
	if err != nil {
		panic(err)
	}

	db := dbConn()
	db.Create(&data)
	if err != nil {
		panic(err)
	}
	db.Close()
	return
}

func apiBlogPost(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	blog := Blog{}

	params := mux.Vars(r)

	data, err := ioutil.ReadFile("blog/" + params["slug"] + ".txt")
	if err != nil {
		fmt.Println("File reading error", err)
		return
	}
	lines := strings.Split(string(data), "\n")
	title := string(lines[0])
	date := string(lines[1])
	author := string(lines[2])
	image := string(lines[3])
	intro := string(lines[6])
	text := strings.Join(lines[6:], "\n")
	body := blackfriday.MarkdownBasic([]byte(text))
	slug := params["slug"]

	blog = Blog{Slug: slug, Date: date, Title: title, Image: image, Intro: intro, Author: author, Body: string(body)}

	json, err := json.Marshal(blog)
	if err != nil {
		log.Println(err)
	}
	w.Write(json)
}

func apiBlogPosts(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var blogs []Blog

	files, err := ioutil.ReadDir("./blog")
	if err != nil {
		log.Fatal(err)
	}

	for _, fi := range files {
		data, err := ioutil.ReadFile("./blog/" + fi.Name())
		if err != nil {
			fmt.Println("File reading error", err)
			return
		}
		slug := strings.Split(fi.Name(), ".")
		lines := strings.Split(string(data), "\n")
		title := string(lines[0])
		date := string(lines[1])
		author := string(lines[2])
		image := string(lines[3])
		intro := string(lines[6])
		text := strings.Join(lines[6:8], "\n")
		body := blackfriday.MarkdownBasic([]byte(text))

		blogs = append(blogs, Blog{Slug: slug[0], Date: date, Title: title, Image: image, Intro: intro, Author: author, Body: string(body)})
	}
	sort.SliceStable(blogs, func(i, j int) bool {return blogs[i].Date > blogs[j].Date})

	json, err := json.Marshal(blogs)
	if err != nil {
		log.Println(err)
	}
	w.Write(json)
}
