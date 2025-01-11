package model

type Skill struct {
	ID   string `json:"id" gorm:"primarykey"`
	Name string `json:"name"`
}
