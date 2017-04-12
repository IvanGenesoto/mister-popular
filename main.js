var express = require('express');
var app = express();

var Twitter = require('./twitter-client').Twitter;
var twitter = new Twitter();

function error(err, res, bod) {
  console.log('error: ' + err);
}

function success(data) {
  console.log(data);
}

function showScreenName(data) {
  console.log(data.screen_name);
}

app.get('/following', (req, res) => {
  twitter.getFollowing({}, error, success);
})

app.get('/settings', (req, res) => {
  twitter.getAccountSettings({}, error, showScreenName);
})

app.get('/follow', (req, res) => {
  twitter.postFollow({}, error, success);
})

app.listen(5760, () => {
  console.log('listening to port 5760');
})
