
// console.log("it's linked")



console.log("it's linked")

// ?LOCAL STORAGE

var game = getattr('#clicked');
var gameDetails = localStorage.getItem(getTrioData)(JSON.parse());




//function for youtube videos
//? This is where i think we just need 1 get youtube function cause there will only be one video depending on the search
function getYouTube(game) {
    var youTubeVideo = $("#youTubeVideo");
    var trailerUrl = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=" + game + "&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";


    fetch(trailerUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (data) {
            console.log(data.video_results);
            var url = data.video_results[0].link
            url = url.replace("watch?v=", "embed/")
            console.log(url);
            $(youTubeVideo).attr("src", url)
        });
}
getYouTube(game);



