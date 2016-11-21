window.onload =function () {
    /*  Callback madness fix  */
    function handleError(jqXHR, textStatus, error) {
        console.log(error);
    }

    function cbTweets(data) {
        console.log(data);

        $.ajax({
            type: "GET",
            url: "data/friends.json",
            success: cbFriends,
            error: handleError
        });
    }

    function cbFriends(data) {
        console.log(data);

        $.ajax({
            type: "GET",
            url: "data/videos.json",
            success: function (data) {
                console.log(data);
            },
            error: handleError
        });
    }

    $.ajax({
        type: "GET",
        url: "data/tweets.json",
        success: cbTweets,
        error: handleError
    });
};
