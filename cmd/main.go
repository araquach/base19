package main

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/joho/godotenv"
	"github.com/kataras/muxie"
	"html/template"
	"log"
	"net/http"
	"os"
)

var (
	tpl *template.Template
)

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

	tpl = template.Must(template.ParseFiles(
		"views/index.gohtml"))
	if err != nil {
		panic(err)
	}

	r := muxie.NewMux()
	r.HandleFunc("/", home)
	r.HandleFunc(`/:name`, home)
	r.HandleFunc(`/:category/:name`, home)
	r.HandleFunc(`/*`, home)
	r.HandleFunc("/api/team", apiTeam)
	r.HandleFunc("/api/team/:slug", apiTeamMember)
	r.HandleFunc("/api/sendMessage", apiSendMessage)
	r.HandleFunc("/api/joinus", apiJoinus)
	r.HandleFunc("/api/models", apiModel)
	r.HandleFunc("/api/reviews/:tm", apiReviews)

	r.Handle("/dist/*file", http.StripPrefix("/dist/", http.FileServer(http.Dir("./dist"))))

	log.Printf("Starting server on %s", port)

	http.ListenAndServe(":" + port, forceSsl(r))
}



