window.onload = function () {
    /*  Genrators  */

    /*
    The yield keyword in generators will pause the code
    JS is ran from left to right so
    */
    function* gen(){
        var x = yield 10;
        console.log(x);
    }

    // This doesent start gen
    var myGen = gen();

    // Run gen this will output 10 because that is where the code is paused
    // It will also return a value for done of true or false in this case it is false because we are not done
    console.log(myGen.next());

    // Now this will carry on the code to the end
    // We will define x as 10 and get undefined as a return value
    console.log(myGen.next());

    /* OR */

    // The 10 will be passed back in where the code was paused
    // In this case x will be changed to 5
    console.log(myGen.next(5));


    /*  AJAX GENS  */

    genWrap(function* () {

        var tweets = yield $.get("data/tweets.json");
        console.log(tweets);

        var friends = yield $.get("data/friends.json");
        console.log(friends);

        var videos = yield $.get("data/videos.json");
        console.log(videos);
    });

    function genWrap(generator) {
        gen = generator();

        function handle(yielded) {
            if (!yielded.done) {
                yielded.value.then(function (data) {
                    return handle(gen.next(data));
                });
            }
        }
    }
};
