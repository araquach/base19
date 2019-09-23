package main

import (
	"fmt"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w,"<h1>Base Hairdressing</h1>")
}

func contact(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w,"<h1>Contact Us</h1>")
}

func main() {
	r := http.NewServeMux()

	r.HandleFunc("/", home)
	r.HandleFunc("/contact", contact)

	http.ListenAndServe(":8080", r)
}
