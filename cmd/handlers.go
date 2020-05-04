package main

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	strip "github.com/grokify/html-strip-tags-go"
	"github.com/mailgun/mailgun-go/v3"
	"io/ioutil"
	"log"
	"math/rand"
	"net/http"
	"os"
	"path"
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

	vars := mux.Vars(r)
	path := path.Join(vars["first"], vars["second"])
	f := strings.Title(vars["first"])

	heading, err := ioutil.ReadFile("src/js/components/" + path + "/" + f + "Info.vue")
	if err != nil {
		fmt.Println("File reading error", err)
	}

	para, err := ioutil.ReadFile("src/js/components/" + path + "/" + f + "Info.vue")
	if err != nil {
		fmt.Println("File reading error", err)
	}

	hText := string(heading)
	pText := string(para)

	h := GetText(hText, "<h1 class=\"title\">", "</h1>")
	p := GetText(pText, "<p class=\"is-size-5\">", "</p>")

	v := string(rand.Intn(30))

	meta := map[string]string{
		"ogTitle": h,
		"ogDescription": strip.StripTags(p),
		"ogImage": "https://www.basehairdressing.com/dist/img/fb_meta/" + vars["first"] + ".png",
		"ogImageWidth": "1200",
		"ogImageHeight": "628",
		"ogUrl": "https://www.basehairdressing.com/" + vars["first"],
		"version": v,
	}

	if err := tpl.Execute(w, meta); err != nil {
		panic(err)
	}
}

func GetText(str string, start string, end string) (result string) {
	s := strings.Index(str, start)
	if s == -1 {
		return
	}
	s += len(start)
	e := strings.Index(str[s:], end)
	if e == -1 {
		return
	}
	return str[s : s+e]
}

// api

func apiTeam(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	db := dbConn()
	team := []TeamMember{}
	db.Order("position").Find(&team)
	db.Close()

	json, err := json.Marshal(team)
	if err != nil {
		log.Println(err)
	}
	w.Write(json)
}

func apiReviews(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	db := dbConn()
	reviews := []Review{}
	db.Find(&reviews)
	db.Close()

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
