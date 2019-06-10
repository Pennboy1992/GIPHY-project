$(document).ready(function() {

    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=vYGgiD3eM1O8Fg8zDamuWENbUt36x6WJ&limit=10");
xhr.done(function(response) { console.log("success got data", response); });





})