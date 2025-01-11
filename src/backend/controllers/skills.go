package controllers

import (
	"encoding/json"
	"net/http"

	model "github.com/ThisIsNotJustin/ThisIsNotJustin.github.io/src/backend/models"
	"github.com/ThisIsNotJustin/ThisIsNotJustin.github.io/src/backend/utils"
	"github.com/google/uuid"
	"github.com/gorilla/mux"
)

func GetSkills(w http.ResponseWriter, r *http.Request) {
	var skills []model.Skill
	utils.DB.Find(&skills)
	json.NewEncoder(w).Encode(skills)
}

func GetSkill(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var skill model.Skill
	result := utils.DB.First(&skill, "id = ?", params["id"])

	if result.Error != nil {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(skill)
}

func CreateSkill(w http.ResponseWriter, r *http.Request) {
	var skill model.Skill
	json.NewDecoder(r.Body).Decode(&skill)
	skill.ID = uuid.New().String()
	res := utils.DB.Create(&skill)

	if res.Error != nil {
		return
	}

	json.NewEncoder(w).Encode(skill)
}

func UpdateSkill(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var skill model.Skill
	utils.DB.First(&skill, "id = ?", params["id"])
	json.NewDecoder(r.Body).Decode(&skill)
	utils.DB.Save(&skill)

	json.NewEncoder(w).Encode(skill)
}

func DeleteSkill(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var skill model.Skill
	utils.DB.Delete(&skill, "id = ?", params["id"])
	w.WriteHeader(http.StatusNoContent)
}
