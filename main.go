package main

import (
	"github.com/gorilla/mux"
	"html/template"
	"log"
	"net/http"
)

var tplHome *template.Template

func home(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	if err := tplHome.Execute(w, nil); err != nil {
		panic(err)
	}
}

func main() {
	var err error

	port := ":8080"

	tplHome = template.Must(template.ParseFiles("views/layouts/main.gohtml", "views/pages/home.gohtml"))
	if err != nil {
		panic(err)
	}

	r := mux.NewRouter()

	r.HandleFunc("/", home).Methods("GET")

	// Styles
	assetHandler := http.FileServer(http.Dir("./public/css/"))
	assetHandler = http.StripPrefix("/public/css/", assetHandler)
	r.PathPrefix("/public/css/").Handler(assetHandler)

	// JS
	jsHandler := http.FileServer(http.Dir("./public/js/"))
	jsHandler = http.StripPrefix("/public/js/", jsHandler)
	r.PathPrefix("/public/js/").Handler(jsHandler)

	//Images
	imageHandler := http.FileServer(http.Dir("./public/images/"))
	r.PathPrefix("/images/").Handler(http.StripPrefix("/images/", imageHandler))

	log.Printf("Starting server on %s", port)

	http.ListenAndServe(port, r)
}
