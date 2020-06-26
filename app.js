require("dotenv").config();
const { Octokit } = require("@octokit/rest"); 

const {
    GIST_ID: gistId,
    GH_TOKEN: githubToken,
} = process.env;

console.log("Running...", `token ${githubToken}`);
const octokit = new Octokit({
   auth: `token ${githubToken}`
});


octokit.gists.update({
    gist_id: gistId,
    "description": "Live Data",
    "files": {
        "Live": {
            "content": "Good Evening Guys... 🌝 \nI am a running this script 🌝 \n" + getDate() + "\nto live update this section. 🌝 \nIsn't it awesome?"
        }
    }
}).then(res => {
    console.log("updated...");
});

function getDate() {
    // current timestamp in milliseconds
    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    return year + "-" + month + "-" + date;
}