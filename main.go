package main

import (
	"github.com/gorilla/mux"
	"html/template"
	"log"
	"net/http"
)

var tplHome *template.Template

type teamMember struct {
	firstName 	string
	lastName 	string
	paras 		[]string
	style		string
	product		string
	price		string
}

func home(w http.ResponseWriter, r *http.Request) {
	tm1 := teamMember{
		"Lucy",
		"Watson",
		[]string{
			"Lucy is a great stylist",
			"She's in her second year",
			"Get Booked in with her!",
		},
		"Bobs",
		"Mess Up,",
		"50",
	}

	tm2 := teamMember{
		"Lauren",
		"Watson",
		[]string {
			"Lauren is an asset to the team ",
			"She's been hairdressing a while",
			"She's eager to build her client base",
		},
		"Long, textured looks",
		"Dust It",
		"50",
	}

	tm3 := teamMember{
		"David",
		"Randles",
		[]string {
			"David is the latest addition to the team",
			"He's a great stylist",
			"Get booked in now!",
		},
		"Short, choppy looks",
		"Oil Miracle",
		"60",
	}

	tm4 := teamMember{
		firstName: "Lauren",
		lastName:  "Thompson",
		paras:     []string{
			"Lauren is temporarily with us from Jakata",
			"She made the wise choice of coming to us after being at Johnsons",
			"She's a great asset to the team\1",
		},
		style:     "Short, bold styles",
		product:   "Flex Wax",
		price:     "60",
	}

	tm5 := teamMember{
		firstName: "Abi",
		lastName:  "Clarke",
		paras:     []string{
			"Abi is with us from PK",
			"She's a memnber of the GHD style squad",
			"She will be back to PK soon",
		},
		style:     "Luscious waves",
		product:   "Smooth Again",
		price:     "90",
	}

	tm := []teamMember{tm1, tm2, tm3, tm4, tm5}

	w.Header().Set("Content-Type", "text/html")
	if err := tplHome.Execute(w, tm); err != nil {
		panic(err)
	}
}

func main() {

	var err error
	port := ":8060"

	tplHome = template.Must(template.ParseFiles("views/layouts/main.gohtml", "views/pages/index.gohtml"))
	if err != nil {
		panic(err)
	}

	r := mux.NewRouter()
	r.HandleFunc("/", home).Methods("GET")

	// Styles
	assetHandler := http.FileServer(http.Dir("./dist/"))
	assetHandler = http.StripPrefix("/dist/", assetHandler)
	r.PathPrefix("/dist/").Handler(assetHandler)

	// JS
	jsHandler := http.FileServer(http.Dir("./dist/"))
	jsHandler = http.StripPrefix("/dist/", jsHandler)
	r.PathPrefix("/public/js/").Handler(jsHandler)

	//Images
	imageHandler := http.FileServer(http.Dir("./public/images/"))
	r.PathPrefix("/images/").Handler(http.StripPrefix("/images/", imageHandler))

	log.Printf("Starting server on %s", port)

	http.ListenAndServe(port, r)
}