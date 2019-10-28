package main

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/joho/godotenv"
	"html/template"
	"log"
	"net/http"
	"os"
	"time"
	"github.com/mailgun/mailgun-go/v3"
)

var (
	tplHome *template.Template
	tplAbout *template.Template
	tplBlog *template.Template
	tplContact *template.Template
	tplJoinus *template.Template
	tplModel *template.Template
	tplTeam *template.Template
)

type ContactMessage struct {
	Name 		string
	Email 		string
	Message 	string
}

type JoinusApplicant struct {
	gorm.Model
	Name 		string
	Mobile 		string
	Email 		string
	Position 	string
	WhyUs		string
	Info 		string `gorm:"-"`
}

type ModelApplicant struct {
	gorm.Model
	Name string
	Mobile string
	Info string
}

type TeamMember struct {
	Id			int
	FirstName 	string
	LastName 	string
	Level 		string
	Image		string
	Para1 		string
	Para2		string
	Para3		string
	FavStyle	string
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

// api

func apiTeam(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	db := dbConn()
	team := []TeamMember{}
	db.Find(&team)
	db.Close()

	json, err := json.Marshal(team)
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

func main() {

	tm1 := TeamMember{
		FirstName: "Lucy",
		LastName: "Watson",
		Level: "Junior Stylist",
		Image: "/dist/img/team/lucy.jpg",
		Para1: "Lucy is in the second year of her apprenticeship and is already producing some amazing work.",
		Para2: "She has recently opened her column up and is looking to gain experience in all aspects of hairdressing.",
		Para3: "Get booked in with her to see what she can do for you!",
		FavStyle: "Bobs",
		Product: "Mess Up,",
		Price: "35",
	}

	tm2 := TeamMember{
		FirstName: "Lauren",
		LastName: "Watson",
		Level: "Junior Stylist",
		Image: "/dist/img/team/lauren_w.jpg",
		Para1: "Lauren's skills are progressing fast and is eager to make the move up to Graduate level. She's producing some great colours and cuts and is eager to try her skills out on more clients.",
		Para2: "She loves all aspects of hairdressing so get booked in with her before her prices go up!",
		Para3: "She's eager to build her client base",
		FavStyle: "",
		Product: "Dust It",
		Price: "35",
	}

	tm3 := TeamMember{
		FirstName: "David",
		LastName: "Randles",
		Level: "Graduate",
		Image: "/dist/img/team/david.jpg",
		Para1: "David is our latest recruit. He completed his training at Andrew Collinge Graduates in Liverpool and is now looking to work his way to stylist level.",
		Para2: "He produces beautiful colour and cutting work and his blow-dry's are stunning!",
		Para3: "",
		FavStyle: "Short, choppy looks",
		Product: "Oil Miracle",
		Price: "60",
	}

	tm4 := TeamMember{
		FirstName: "Lauren",
		LastName: "Thompson",
		Level: "Graduate",
		Image: "/dist/img/team/lauren_t.jpg",
		Para1: "Lauren is a Graduate Stylist with loads of flair and a huge passion for the industry. She loves creating bold, statement looks, particularly short cuts and funky styles.",
		Para2: "She loves clients that are looking for something a bit different and open to ideas - if you're wanting a new look then book in for a consultation with her!",
		Para3: "",
		FavStyle: "Short, bold styles",
		Product: "Flex Wax",
		Price: "60",
	}

	tm5 := TeamMember{
		FirstName: "Abi",
		LastName: "Clarke",
		Level: "Graduate",
		Image: "/dist/img/team/abi.jpg",
		Para1: "Abi is an extremely progressive hairdresser. She recently won a place on the GHD Style Squad - a team of just 8 stylists from all over the UK, hand picked by GHD.",
		Para2: "She produces some beautiful cuts, colours and styles. Her friendly, approachable personality ensures she always gets 5 star feedback from her clients.",
		Para3: "Abi has temporarily joined us from Paul Kemp Hairdressing to help get Base up and running.",
		FavStyle: "Luscious waves",
		Product: "Smooth Again",
		Price: "80",
	}

	teamMembers := []TeamMember{tm1, tm2, tm3, tm4, tm5}

	var err error

	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("$PORT must be set")
	}

	db := dbConn()

	for _, tm := range teamMembers {
		db.Create(&tm)
	}

	db.AutoMigrate(&TeamMember{}, &JoinusApplicant{}, &ModelApplicant{})

	db.LogMode(true)

	tplHome = template.Must(template.ParseFiles(
	"views/layouts/main.gohtml",
	"views/layouts/nav.gohtml",
	"views/pages/index.gohtml"))
	if err != nil {
		panic(err)
	}

	tplAbout = template.Must(template.ParseFiles(
		"views/layouts/main.gohtml",
		"views/layouts/nav-novue.gohtml",
		"views/pages/about.gohtml"))
	if err != nil {
		panic(err)
	}

	tplBlog = template.Must(template.ParseFiles(
		"views/layouts/main.gohtml",
		"views/layouts/nav-novue.gohtml",
		"views/pages/blog.gohtml"))
	if err != nil {
		panic(err)
	}

	tplContact = template.Must(template.ParseFiles(
		"views/layouts/main.gohtml",
		"views/layouts/nav-novue.gohtml",
		"views/pages/contact.gohtml"))
	if err != nil {
		panic(err)
	}

	tplJoinus = template.Must(template.ParseFiles(
		"views/layouts/main.gohtml",
		"views/layouts/nav-novue.gohtml",
		"views/pages/joinus.gohtml"))
	if err != nil {
		panic(err)
	}

	tplModel = template.Must(template.ParseFiles(
		"views/layouts/main.gohtml",
		"views/layouts/nav-novue.gohtml",
		"views/pages/model.gohtml"))
	if err != nil {
		panic(err)
	}

	tplTeam = template.Must(template.ParseFiles(
		"views/layouts/main.gohtml",
		"views/layouts/nav-novue.gohtml",
		"views/pages/team.gohtml"))
	if err != nil {
		panic(err)
	}

	r := mux.NewRouter()
	r.HandleFunc("/", home).Methods("GET")
	r.HandleFunc("/about", about).Methods("GET")
	r.HandleFunc("/blog", blog).Methods("GET")
	r.HandleFunc("/contact", contact).Methods("GET")
	r.HandleFunc("/joinus", joinus).Methods("GET")
	r.HandleFunc("/model", model).Methods("GET")
	r.HandleFunc("/team", team).Methods("GET")
	// api roots
	r.HandleFunc("/api/team", apiTeam).Methods("GET")
	r.HandleFunc("/api/sendMessage", apiSendMessage).Methods("POST")
	r.HandleFunc("/api/joinus", apiJoinus).Methods("POST")
	r.HandleFunc("/api/model", apiModel).Methods("POST")

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
