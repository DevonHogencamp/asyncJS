window.onload = function () {
    /*  Callback Functions  */

    var fruits = ["apple", "bannana", "orange"];

    function callBack (val) {
        console.log(val);
    }
    // Sync Callback
    fruits.forEach(callBack);

    // Async Callback
    $.get("data/tweets.json", function (data) {
        console.log(data);
    });
};
