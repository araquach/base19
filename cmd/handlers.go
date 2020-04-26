package main

import (
	"context"
	"encoding/json"
	"fmt"
	strip "github.com/grokify/html-strip-tags-go"
	"github.com/mailgun/mailgun-go/v3"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strings"
	"time"
)

func home(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")


	f := r.URL.Path
	if f == "" {
		f = "about"
	}
	fmt.Println(f)

	dir := f
	fn := strings.Title(f)

	heading, err := ioutil.ReadFile("src/js/components/" + dir + "/" + fn + "Info.vue")
	if err != nil {
		fmt.Println("File reading error", err)
	}

	para, err := ioutil.ReadFile("src/js/components/" + dir + "/" + fn + "Info.vue")
	if err != nil {
		fmt.Println("File reading error", err)
	}

	hText := string(heading)
	pText := string(para)

	h := GetText(hText, "<h1 class=\"title\">", "</h1>")
	p := GetText(pText, "<p class=\"is-size-5\">", "</p>")

	fmt.Printf("Heading: %s\nFirst para: %s\n", h, p)

	meta := map[string]string{
		"ogTitle": h,
		"ogDescription": strip.StripTags(p),
		"ogImage": "/dist/img/meta/" + f + ".jpg",
		"ogImageWidth": "1200",
		"ogImageHeight": "628",
		"ogUrl": "https://basehairdressing.com/" + f,
	}

	if err := tplHome.Execute(w, meta); err != nil {
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

func about(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	if err := tplAbout.Execute(w, nil); err != nil {
		panic(err)
	}
}

func blog(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	if err := tplBlog.Execute(w, nil); err != nil {
		panic(err)
	}
}

func contact(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	if err := tplContact.Execute(w, nil); err != nil {
		panic(err)
	}
}

func joinus(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	if err := tplJoinus.Execute(w, nil); err != nil {
		panic(err)
	}
}

func model(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	if err := tplModel.Execute(w, nil); err != nil {
		panic(err)
	}
}

func team(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	if err := tplTeam.Execute(w, nil); err != nil {
		panic(err)
	}
}

func offer(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	if err := tplOffer.Execute(w, nil); err != nil {
		panic(err)
	}
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
