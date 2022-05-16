package main import (
	"fmt"
	go_mojoauth "github.com/mojoauth/go-sdk"
	"github.com/mojoauth/go-sdk/api"
	"github.com/mojoauth/go-sdk/mojoerror"
	"log"
)
func main() {
	PasswordlessAuth()
}
func PasswordlessAuth() {
	var errors string
	cfg := go_mojoauth.Config {
		ApiKey:"MojoAuth API Key"
	}
	mojoClient, err := go_mojoauth.NewMojoAuth(&cfg , map[string]string{"token": "Enter your mojoauth token"})
	if err != nil {
		errors = errors + err.(mojoerror.Error).OrigErr().Error()
		// respCode = 500
	}
	res, err := api.Mojoauth{mojoClient}.VerifyToken("<Enter Token>")
	if err != nil {
		errors = errors + err.(mojoerror.Error).OrigErr().Error()
		// respCode = 500
	}
	if errors != "" {
		log.Printf(errors)
		return
	}
	fmt.Println(res.IsValid)
}
