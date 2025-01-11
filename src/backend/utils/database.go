package utils

import (
	"fmt"
	"log"
	"os"
	"time"

	model "github.com/ThisIsNotJustin/ThisIsNotJustin.github.io/src/backend/models"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/joho/godotenv"
)

var DB *gorm.DB

func ConnectDatabase() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	var (
		host     = os.Getenv("DB_HOST")
		port     = os.Getenv("DB_PORT")
		dbUser   = os.Getenv("DB_USER")
		dbName   = os.Getenv("DB_NAME")
		password = os.Getenv("DB_PASSWORD")
	)

	dsn := fmt.Sprintf("host=%s port=%s user=%s dbname=%s password=%s sslmode=disable",
		host,
		port,
		dbUser,
		dbName,
		password,
	)

	for i := 0; i < 5; i++ {
		DB, err = gorm.Open("postgres", dsn)
		if err == nil {
			break
		}
		log.Printf("Failed to connect to database. Retrying in 5 seconds..")
		time.Sleep(5 * time.Second)
	}

	if err != nil {
		log.Fatalf("Could not connect to the database: %v", err)
	}

	sqlDB := DB.DB()
	err = sqlDB.Ping()
	if err != nil {
		log.Fatalf("Database ping failed: %v", err)
	}

	DB.AutoMigrate(&model.Skill{})
	log.Println("Database Connection Established")
}
