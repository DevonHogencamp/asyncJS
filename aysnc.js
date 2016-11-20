window.onload = function() {
    // Create our http request
    var http = new XMLHttpRequest();

    // Fire the function when the Ready state has changed
    http.onreadystatechange = function () {
        // If data is ready and gives us and ok 200 status
        if (http.readyState == 4 && http.status == 200) {
            // Parse the string of text into json so we can use it
            console.log(JSON.parse(http.response));
        }
    };

    // Create a GET request for the tweets.json with true being Async and flase Sync
    http.open("GET", "data/tweets.json", true);

    // Do that request
    http.send();

    /*  JQuery Method  */

    // Same thing as above but with jquery
    // Go out get the tweets and once you get it log that data that we got
    $.get("data/tweets.json", function(data) {
        console.log(data);
    });
};

/*  Ready States
0 Request not initialized
1 Request has been set up
2 Request has been set
3 Request is in process
4 Request is complete
*/
