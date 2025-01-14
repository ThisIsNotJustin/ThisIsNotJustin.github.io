package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
)

type Repository struct {
	Name        string   `json:"name"`
	Description string   `json:"description"`
	HTMLURL     string   `json:"html_url"`
	Stargazers  int      `json:"stargazers_count"`
	Topics      []string `json:"topics"`
}

func repos() {
	username := "ThisIsNotJustin"
	url := fmt.Sprintf("https://api.github.com/users/%s/repos", username)

	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		fmt.Printf("Error GETTING %v\n", err)
	}

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Printf("Error %v\n", err)
	}

	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		fmt.Printf("Error %v\n", resp.Status)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Printf("Error reading response body %v\n", err)
	}

	var repos []Repository
	if err := json.Unmarshal(body, &repos); err != nil {
		fmt.Printf("Error unmarshalling %v\n", err)
	}

	jsonData, err := json.MarshalIndent(repos, "", "  ")
	if err != nil {
		fmt.Printf("Error marshall indent %v\n", err)
	}

	err = os.WriteFile("repositories.json", jsonData, 0644)
	if err != nil {
		fmt.Printf("Error writing to file %v\n", err)
	}

	fmt.Println("Repos saved")
}
