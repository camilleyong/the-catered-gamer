
// console.log("it's linked")

// function to call games 
var submitBtn = $("#submit-btn");

submitBtn.on("click", function(event) {
    event.preventDefault();
    var platform = ("#platform")
    var genre = $("#genre")
    var image = $("#image")
    var game = $("#game")
    
    var platformUrl = "https://api.rawg.io/api/platforms?key=0da6d52b21ec4d8fac88f4f4ceafe806"


    var platform = document.querySelector("#platform-drop").value;
    var genre = document.querySelector("#genre-drop").value;

    var gameUrl = "https://api.rawg.io/api/games?genre="+genre+"&platform="+platform+"&key=0da6d52b21ec4d8fac88f4f4ceafe806"
    
    
    // fetch(platformUrl)
    //     .then(function (response) {
    //         if (response.ok) {
    //             return response.json();
    //         }
    //     })
    //     .then(function (data) {
    //         console.log(data.results.name);
    //         var platforms = data.results.name
    //         console.log(platforms);
    //         $(platform).attr('data-value',)assets/images/READme-headerImg.png
    //     })


    fetch(gameUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (data) {
            console.log(data.results);
            // var genres = data.results.name
            // console.log(genres);
            // $(genre).attr('data-value',)
        })

    // fetch(gameUrl)
    //     .then(function (response) {
    //         if (response.ok) {
    //             return response.json();
    //         }
    //     })
    //     .then(function (data) {
    //         console.log(data.results.image_background);
    //         var img = data.results.image_background
    //         console.log(img);
    //         $(image).attr('data-value',)
    //     })


    // fetch(gameUrl)
    //     .then(function (response) {
    //         if (response.ok) {
    //             return response.json();
    //         }
    //     })
    //     .then(function (data) {
    //         console.log(data.results.games.name);
    //         var games = data.results.games.name
    //         console.log(games);
    //         $(game).attr('data-value',)
    //         // 3 games
    //     });
    })

//function for youtube videos

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


// function for youtube videos

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