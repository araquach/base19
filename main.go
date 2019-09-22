package main

import (
	"fmt"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w,"<h1>Base Hairdressing</h1>")
}

func main() {
	http.HandleFunc("/", home)

	http.ListenAndServe(":8080", nil)
}
