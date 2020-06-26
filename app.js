require("dotenv").config();
const { Octokit } = require("@octokit/rest"); 
const dateFormat = require('dateformat');

const {
    GIST_ID: gistId,
    GH_TOKEN: githubToken,
} = process.env;
 
const octokit = new Octokit({
   auth: `token ${githubToken}`
});


octokit.gists.update({
    gist_id: gistId,
    "description": "Live Data",
    "files": {
        "Live": {
            "content": "Good Evening Guys... 🌝 \nI am a running this script 🌝 \n" + dateFormat(new  Date()) + "\nto live update this section. 🌝 \nIsn't it awesome?"
        }
    }
}).then(res => {
    console.log("updated...");
});

 