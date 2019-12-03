import cdk = require('@aws-cdk/core');
import lambda = require("@aws-cdk/aws-lambda")
import apigateway = require("@aws-cdk/aws-apigateway")
import {Duration} from "@aws-cdk/core";

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda
    const lambdaHandler = new lambda.Function(this, "api", {
      code: lambda.Code.fromAsset("../bin"),
      handler: "main",
      runtime: lambda.Runtime.GO_1_X,
      timeout: Duration.seconds(10),
      environment: {
        AUTO_DEPLOY_TEST: "success"
      }
    });

    // API Gateway
    const api = new apigateway.RestApi(this, "auto-deploy-sample-api", {
      restApiName: "auto-deploy-sample-api"
    });

    const lambdaHandlerIntegration = new apigateway.LambdaIntegration(lambdaHandler, {proxy: true});
    api.root.addResource("auto-deploy-sample-api")
    api.root.addMethod("GET", lambdaHandlerIntegration)
    
  }
}
