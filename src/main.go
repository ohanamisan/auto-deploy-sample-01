package main

import (
	"github.com/aws/aws-lambda-go/lambda"
)

func hello() string {
	return "Hello Katsuo"
}

func main() {
	lambda.Start(hello)
}
