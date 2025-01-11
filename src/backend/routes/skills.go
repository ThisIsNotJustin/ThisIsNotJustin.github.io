package routes

import (
	"github.com/ThisIsNotJustin/ThisIsNotJustin.github.io/src/backend/controllers"
	"github.com/gorilla/mux"
)

func RegisterSkillRoutes(router *mux.Router) {
	router.HandleFunc("/api/skills", controllers.GetSkills).Methods("GET")
	router.HandleFunc("/api/skills/{id}", controllers.GetSkill).Methods("GET")
	router.HandleFunc("/api/skills", controllers.CreateSkill).Methods("POST")
	router.HandleFunc("/api/skills/{id}", controllers.UpdateSkill).Methods("PUT")
	router.HandleFunc("/api/skills/{id}", controllers.DeleteSkill).Methods("DELETE")
}
