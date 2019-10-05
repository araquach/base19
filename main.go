package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/joho/godotenv"
	"html/template"
	"log"
	"net/http"
	"os"
)

var tplHome *template.Template

type TeamMember struct {
	FirstName 	string
	LastName 	string
	Level 		string
	Image		string
	Para1 		string
	Para2		string
	Para3		string
	Style		string
	Product		string
	Price		string
}

func dbConn() (db *gorm.DB) {
	dbhost     := os.Getenv("DB_HOST")
	dbport     := os.Getenv("DB_PORT")
	dbuser     := os.Getenv("DB_USER")
	dbpassword := os.Getenv("DB_PASSWORD")
	dbname     := os.Getenv("DB_NAME")

	psqlInfo := fmt.Sprintf("host=%s port=%s user=%s "+
		"password=%s dbname=%s sslmode=disable",
		dbhost, dbport, dbuser, dbpassword, dbname)

	db, err := gorm.Open("postgres", psqlInfo)
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

func home(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	if err := tplHome.Execute(w, nil); err != nil {
		panic(err)
	}
}

func main() {
	tm1 := TeamMember{
		"Lucy",
		"Watson",
		"Junior Stylist",
		"/dist/img/team/lucy.jpg",
		"Lucy is a great stylist",
		"She's in her second year",
		"Get Booked in with her!",
		"Bobs",
		"Mess Up,",
		"50",
	}

	tm2 := TeamMember{
		"Lauren",
		"Watson",
		"Junior Stylist",
		"/dist/img/team/lauren_w.jpg",
		"Lauren is an asset to the team ",
		"She's been hairdressing a while",
		"She's eager to build her client base",
		"Long, textured looks",
		"Dust It",
		"50",
	}

	tm3 := TeamMember{
		"David",
		"Randles",
		"Graduate",
		"/dist/img/team/david.jpg",
		"David is the latest addition to the team",
		"He's a great stylist",
		"Get booked in now!",
		"Short, choppy looks",
		"Oil Miracle",
		"60",
	}

	tm4 := TeamMember{
		"Lauren",
		"Thompson",
		"Graduate",
		"/dist/img/team/lauren_w.jpg",
		"Lauren is temporarily with us from Jakata",
		"She made the wise choice of coming to us after being at Johnsons",
		"She's a great asset to the team",
		"Short, bold styles",
		"Flex Wax",
		"60",
	}

	tm5 := TeamMember{
		"Abi",
		"Clarke",
		"Graduate",
		"/dist/img/team/lauren_w.jpg",
		"Abi is with us from PK",
		"She's a memnber of the GHD style squad",
		"She will be back to PK soon",
		"Luscious waves",
		"Smooth Again",
		"90",
	}

	// teamMembers := []TeamMember{tm1, tm2, tm3, tm4, tm5}

	var err error

	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("$PORT must be set")
	}

	db := dbConn()
	db.AutoMigrate(&TeamMember{})

	//db.Create(&tm1)
	//db.Create(&tm2)
	//db.Create(&tm3)
	//db.Create(&tm4)
	//db.Create(&tm5)

	db.Close()
	db.LogMode(true)

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

	http.ListenAndServe(":" + port, r)
}