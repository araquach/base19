package main

import (
	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/joho/godotenv"
	"html/template"
	"log"
	"net/http"
	"os"
)

var (
	tplHome *template.Template
	tplAbout *template.Template
	tplBlog *template.Template
	tplContact *template.Template
	tplJoinus *template.Template
	tplModel *template.Template
	tplTeam *template.Template
	tplOffer *template.Template
)

type ContactMessage struct {
	Name 		string 	`json:"name"`
	Email 		string 	`json:"email"`
	Message 	string 	`json:"message"`
}

type JoinusApplicant struct {
	gorm.Model
	Name 		string 	`json:"name"`
	Mobile 		string 	`json:"mobile"`
	Position 	string 	`json:"position"`
	WhyUs		string 	`json:"why_us"`
	Info 		string 	`gorm:"-" json:"info"`
	Salon		uint 	`json:"salon"`
}

type ModelApplicant struct {
	gorm.Model
	Name 	string 	`json:"name"`
	Mobile 	string 	`json:"mobile"`
	Info 	string 	`json:"info"`
}

type TeamMember struct {
	ID			uint 	`json:"id" gorm:"primary_key"`
	Salon		uint 	`json:"salon"`
	FirstName 	string 	`json:"first_name"`
	LastName 	string 	`json:"last_name"`
	Level 		string 	`json:"level"`
	Image		string 	`json:"image"`
	Para1 		string 	`json:"para_1"`
	Para2		string 	`json:"para_2"`
	Para3		string 	`json:"para_3"`
	FavStyle	string 	`json:"fav_style"`
	Product		string 	`json:"product"`
	Price		string 	`json:"price"`
	Position	uint 	`json:"position"`
}

type Review struct {
	ID 		uint 	`json:"id" gorm:"primary_key"`
	Review 	string 	`json:"review"`
	Client 	string 	`json:"client"`
	Staff 	string 	`json:"staff"`
}

func dbConn() (db *gorm.DB) {
	db, err := gorm.Open("postgres", os.Getenv("DATABASE_URL"))
	if err != nil {
		panic(err)
	}
	return db
}

func init() {
	// loads values from .env into the system
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
}

func main() {
	var err error
	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("$PORT must be set")
	}

	db := dbConn()
	db.LogMode(true)
	db.AutoMigrate(&TeamMember{}, &JoinusApplicant{}, &ModelApplicant{}, &Review{})
	db.Close()

	tplHome = template.Must(template.ParseFiles(
		"views/layouts/main.gohtml",
		"views/pages/index.gohtml"))
	if err != nil {
		panic(err)
	}

	tplAbout = template.Must(template.ParseFiles(
		"views/layouts/seo.gohtml",
		"views/pages/about.gohtml"))
	if err != nil {
		panic(err)
	}

	tplBlog = template.Must(template.ParseFiles(
		"views/layouts/seo.gohtml",
		"views/pages/blog.gohtml"))
	if err != nil {
		panic(err)
	}

	tplContact = template.Must(template.ParseFiles(
		"views/layouts/seo.gohtml",
		"views/pages/contact.gohtml"))
	if err != nil {
		panic(err)
	}

	tplJoinus = template.Must(template.ParseFiles(
		"views/layouts/seo.gohtml",
		"views/pages/joinus.gohtml"))
	if err != nil {
		panic(err)
	}

	tplModel = template.Must(template.ParseFiles(
		"views/layouts/seo.gohtml",
		"views/pages/model.gohtml"))
	if err != nil {
		panic(err)
	}

	tplTeam = template.Must(template.ParseFiles(
		"views/layouts/seo.gohtml",
		"views/pages/team.gohtml"))
	if err != nil {
		panic(err)
	}

	tplOffer = template.Must(template.ParseFiles(
		"views/layouts/seo.gohtml",
		"views/pages/offer.gohtml"))
	if err != nil {
		panic(err)
	}

	r := mux.NewRouter()
	r.HandleFunc("/", home).Methods("GET")
	r.HandleFunc("/about", about).Methods("GET")
	r.HandleFunc("/info", about).Methods("GET")
	r.HandleFunc("/blog", blog).Methods("GET")
	r.HandleFunc("/contact", contact).Methods("GET")
	r.HandleFunc("/joinus", joinus).Methods("GET")
	r.HandleFunc("/model", model).Methods("GET")
	r.HandleFunc("/team", team).Methods("GET")
	r.HandleFunc("/offers", offer).Methods("GET")
	r.HandleFunc("/api/team", apiTeam).Methods("GET")
	r.HandleFunc("/api/sendMessage", apiSendMessage).Methods("POST")
	r.HandleFunc("/api/joinus", apiJoinus).Methods("POST")
	r.HandleFunc("/api/model", apiModel).Methods("POST")
	r.HandleFunc("/api/reviews", apiReviews).Methods("GET")

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

	http.ListenAndServe(":" + port, r)
}


