package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	files := []string{
		"./views/layouts/main.gohtml",
		"./views/pages/home.gohtml",
	}

	ts, err := template.ParseFiles(files...)
	if err != nil {
		log.Println(err.Error())
		http.Error(w, "Internal Server Error", 500)
		return
	}

	err = ts.Execute(w, nil)
	if err !=nil {
		log.Println(err.Error())
		http.Error(w, "Internal Server Error", 500)
	}

}

func contact(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w,"<h1>Contact Us</h1>")
}

func main() {
	r := http.NewServeMux()

	r.HandleFunc("/", home)
	r.HandleFunc("/contact", contact)

	http.ListenAndServe(":8060", r)
}
