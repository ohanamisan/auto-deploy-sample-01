#!/usr/bin/env node
import 'source-map-support/register';
import {CdkStack} from '../lib/cdk-stack';
import cdk = require('@aws-cdk/core');

const app = new cdk.App();
new CdkStack(app, 'CdkStack',
    {
        env: {
            account: app.node.tryGetContext("account"),
            region: app.node.tryGetContext("region")
        }
    });
