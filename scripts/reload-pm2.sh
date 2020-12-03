#!/bin/bash
cd ~/aws-codedeploy
# npx http-server -p 3000
pm2 startOrReload ecosystem.config.js 