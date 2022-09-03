
// console.log("it's linked")

console.log("it's linked")

var platformBtn = $('#platformBtn');
var genreBtn = $('#genreBtn');
var submitBtn = $('#submit-btn');

//? I suggest to leave this as is or get the code jamie did (in the commit) and this will serve as the local storage set item and get item function on submit and on submit i would like to put a location.href to game.html or leave the image in the index.html and then we can give it a data-value and when clicked the data value will be given to the fuction get youtube video. I'll send you this tonight and if ever you want me to work on the local storage i can start it.

submitBtn.on('click', '.dropdown-item', function () {
    console.log('.dropdown-item');
    var platform = $("#platform").attr('data-value');
    var genre = $("#genre").attr('data-value');

    // ? We can put the local storage set item in here then get it in the next lines.
    var selected = []

    $.each(platform, genre, function () {
        selected.push($(this).val());
    });
})
// ? and here we can put the codes for the get item and pass it down to get youtube
// function to call games 


function getGames() {
    var platform = ("#platform")
    var genre = $("#genre")
    var image = $("#image")
    var games = $("#games")
    var gameUrl = "https://cors-anywhere.herokuapp.com/https://api.rawg.io/api/genres?key=0da6d52b21ec4d8fac88f4f4ceafe806"
    var platformUrl = "https://cors-anywhere.herokuapp.com/https://api.rawg.io/api/platforms?key=0da6d52b21ec4d8fac88f4f4ceafe806"


    // ? This is the fetch i was referring to as reference because the platforms and genres were already provided in index.html
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
    //         $(platform).attr('data-value',)
    //     })


    // fetch(gameUrl)
    //     .then(function (response) {
    //         if (response.ok) {
    //             return response.json();
    //         }
    //     })
    //     .then(function (data) {
    //         console.log(data.results.name);
    //         var genres = data.results.name
    //         console.log(genres);
    //         $(genre).text(genres)
    //     })
    // ? this i think is useless because it will just display one bg image and is not really related to the game but to the genre.
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
    //         $(image).attr('src','' )
    //     })

    // ? We can put an each function here so that it will let the user get 3 games but also we can get the local storage here and get it so that whichever genre data."genre value".games.name and then do it 3 times
    fetch(gameUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (data) {
            console.log(data.results.games.name);
            var games = data.results.games.name
            console.log(games);
            $(games).text(games)
            // 3 games
        });
}
getGames();

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
getYouTube();


// function for youtube videos
// ? i'll just comment this out because it got duplicated.
// function getYouTube(game) {
//     var youTubeVideo = $("#youTubeVideo");
//     var trailerUrl = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=" + game + "&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

//     fetch(trailerUrl)
//         .then(function (response) {
//             if (response.ok) {
//                 return response.json();
//             }
//         })
//         .then(function (data) {
//             console.log(data.video_results);
//             var url = data.video_results[0].link
//             url = url.replace("watch?v=", "embed/")
//             console.log(url);
//             $(youTubeVideo).attr("src", url)
//         });
// }}