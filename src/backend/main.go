package main

import (
	"log"
	"net/http"

	"github.com/ThisIsNotJustin/ThisIsNotJustin.github.io/src/backend/routes"
	"github.com/ThisIsNotJustin/ThisIsNotJustin.github.io/src/backend/utils"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func main() {
	utils.ConnectDatabase()

	router := mux.NewRouter()
	routes.RegisterSkillRoutes(router)

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"*"},
		AllowCredentials: true,
	})

	handler := c.Handler(router)

	log.Printf("Server started on :8080\n")
	log.Fatal(http.ListenAndServe(":8080", handler))
}
