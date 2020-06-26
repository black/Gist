// const express = require('express'),\
require("dotenv").config();
const { Octokit } = require("@octokit/rest"),
    schedule = require('node-schedule');
//     app = express(); 

// let server = app.listen(4076, () => {
//     console.log("Gist...4076");
// });

const {
  GIST_ID: gistId,
  GH_TOKEN: githubToken, 
} = process.env;
const API_BASE = 'https://api.github.com/gists/';
const username = 'black';
const gistID = gistId;

const octokit = new Octokit({
    auth: `token ${githubToken}`
});


var rule = new schedule.RecurrenceRule();
//rule.minute = 40;
rule.second = 10;
var jj = schedule.scheduleJob(rule, function(res) {
    console.log("execute jj", res); 
    octokit.gists.update({
        gist_id: gistID,
        "description": "Live Data",
        "files": {
            "Live": {
                "content": "Good Evening Guys... 🌝 \nI am a running this script 🌝 \n"+ res +"\nto live update this section. 🌝 \nIsn't it awesome?"
            }
        }
    }).then(res => {
        console.log(res.data);
    });
});
