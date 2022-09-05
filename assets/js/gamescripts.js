
// console.log("it's linked")

console.log("it's linked")

var platformBtn = $('#platformBtn');
var genreBtn = $('#genreBtn');
var submitBtn = $('#submit-btn');
var response = $('#error');



function errorResponse (type, message) {
    response.text(response);
};

submitBtn.on('click', function(event) {
    event.preventDefault();
    console.log(event);
    platformBtn = localStorage.getItem
    genreBtn = localStorage.getItem

    if(!platformBtn === !genreBtn) {
            errorResponse("Please select a Platform and Genre Option");
            response.text(errorResponse);
    } else if (platformBtn === genreBtn) {

    }  localStorage.setItem("platformBtn", JSON.stringify(platformBtn));
        localStorage.setItem("genreBtn", JSON.stringify(genreBtn));
    });


// submitBtn.on('click', function(event) {
//     event.preventDefault();
//     console.log(event);
//     var errorResponse = "Please select a Platform and Genre Option";
//     response.text(errorResponse);


// });


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
var submitBtn = $("#submit-btn");

submitBtn.on("click", function(event) {
    event.preventDefault();
    var platform = $("#platform")
    var genre = $("#genre")
    var image = $("#image")

    var games = $("#games")
    var gameUrl = "https://cors-anywhere.herokuapp.com/https://api.rawg.io/api/games?key=0da6d52b21ec4d8fac88f4f4ceafe806"
    // var platformUrl = "https://cors-anywhere.herokuapp.com/https://api.rawg.io/api/platforms?key=0da6d52b21ec4d8fac88f4f4ceafe806"


    // ? This is the fetch i was referring to as reference because the platforms and genres were already provided in index.html
    fetch(platformUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (data) {
            console.log(data.results.name);
            var platforms = data.results.name
            console.log(platforms);
            $(platform).attr('data-value',)
        })


    var game = $("#game")
    
    var platformUrl = "https://api.rawg.io/api/platforms?key=0da6d52b21ec4d8fac88f4f4ceafe806"


    var platform = document.querySelector("#platform-drop").value;
    var genre = document.querySelector("#genre-drop").value;
//! NOTE: THE DROPDOWN MENUS ARE NOT HOLDING THEIR VALUES WHEN FILTERING USER RESULTS

    var gameUrl = "https://api.rawg.io/api/games?genre="+genre+"&platform="+platform+"&key=0da6d52b21ec4d8fac88f4f4ceafe806"
    
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

    //         console.log(data.results.name);
    //         var genres = data.results.name
    //         console.log(genres);
    //         $(genre).text(genres)
    //     })
    // ? this i think is useless because it will just display one bg image and is not really related to the game but to the genre.

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

});
getGames();




    //         console.log(data.results.games.name);
    //         var games = data.results.games.name
    //         console.log(games);
    //         $(game).attr('data-value',)
    //         // 3 games
    //     });

    // })

// LOCAL STORAGE FOR PLATFORMS, GENRE, AND SAVE BUTTON



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

