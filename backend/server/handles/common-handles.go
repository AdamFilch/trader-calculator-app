package handles

import (
	"fmt"
	"net/http"
)

func HandleGetTradePeriods(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Hello from handles")
	switch r.Method {
	case "GET":
		handleGetTP(w, r)
	default:
		http.Error(w, "Method not allow", http.StatusMethodNotAllowed)
	}
}

func handleGetTP(w http.ResponseWriter, r *http.Request) {

}
