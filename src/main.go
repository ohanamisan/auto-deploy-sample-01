package main

import (
	"fmt"

	"github.com/aws/aws-lambda-go/lambda"
)

func hello() {
	fmt.Print("Hello Katsuo")
}

func main() {
	lambda.Start(hello)
}
