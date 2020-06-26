// const express = require('express'),\
require("dotenv").config();
const { Octokit } = require("@octokit/rest");
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
