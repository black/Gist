require("dotenv").config();
const { Octokit } = require("@octokit/rest");
const dateFormat = require('dateformat');
const axios = require('axios');

const {
    GIST_ID: gistId,
    GH_TOKEN: githubToken,
} = process.env;

const octokit = new Octokit({
    auth: `token ${githubToken}`
});



axios.get('https://api.covid19api.com/summary')
    .then(function(response) {
        console.log(response.data.Global);
        octokit.gists.update({
            gist_id: gistId,
            "description": "Live Data",
            "files": {
                "Live": {
                    "content": "LIVE CORONAVIRUS \n"+ dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT") + "\n😔 Total Case: " + response.data.Global.TotalConfirmed + "\n😞 Total Deaths: " + response.data.Global.TotalDeaths + "\n😀 Total Recovred: " + response.data.Global.TotalRecovered
                }
            }
        }).then(res => {
            console.log("updated...");
        });
    })
    .catch(function(error) {
        // handle error
        console.log(error);
    })
    .finally(function() {
        // always executed
    });