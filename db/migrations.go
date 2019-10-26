package main

import (
	"fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/joho/godotenv"
	"log"
	"os"
)

type TeamMember struct {
	gorm.Model
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

type JoinusApplicant struct {
	gorm.Model
	Name 		string
	Mobile 		string
	Email 		string
	Position 	string
}

func init() {
	// loads values from .env into the system
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
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

	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("$PORT must be set")
	}

	db := dbConn()
	db.AutoMigrate(&TeamMember{}, &JoinusApplicant{})

	for _, tm := range teamMembers {
		db.Create(&tm)
	}

	db.Close()
	db.LogMode(true)
}