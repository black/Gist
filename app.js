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
                "content": "Good Evening Guys... 🌝 \nI am a running this script 🌝 \n"+ getDate() +"\nto live update this section. 🌝 \nIsn't it awesome?"
            }
        }
    }).then(res => {
        console.log(res.data);
    });


function getDate() {
    // current timestamp in milliseconds
    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    // prints date & time in YYYY-MM-DD format
    return year + "-" + month + "-" + date;
}
