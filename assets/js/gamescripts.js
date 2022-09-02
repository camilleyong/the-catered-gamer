var submitBtn = $('#submit-btn');


submitBtn.on('click', '.dropdown-item', function () {
    console.log('.dropdown-item');
    var platform = $("#platform").attr('data-value');
    var genre = $("#genre").attr('data-value');

    var selected = []

    if (platform.val === null || genre === null) {
        alert('Please select a platform, gamer.')
        return;
    }

    $.each(platform, genre, function () {
        selected.push($(this).val());
    })
})

// function to call games 

// function getGames() {
//     var platform = ("#platform")
//     var genre = $("#genre")
//     var image = $("#image")
//     var game = $("#game")
//     var gameUrl = "https://cors-anywhere.herokuapp.com/https://api.rawg.io/api/genres?key=0da6d52b21ec4d8fac88f4f4ceafe806"
//     var platformUrl = "https://cors-anywhere.herokuapp.com/https://api.rawg.io/api/platforms?key=0da6d52b21ec4d8fac88f4f4ceafe806"



//     fetch(platformUrl)
//         .then(function (response) {
//             if (response.ok) {
//                 return response.json();
//             }
//         })
//         .then(function (data) {
//             console.log(data.results.name);
//             var platforms = data.results.name
//             console.log(platforms);
//             $(platform).attr('data-value',)
//         })


//     fetch(gameUrl)
//         .then(function (response) {
//             if (response.ok) {
//                 return response.json();
//             }
//         })
//         .then(function (data) {
//             console.log(data.results.name);
//             var genres = data.results.name
//             console.log(genres);
//             $(genre).attr('data-value',)
//         })

//     fetch(gameUrl)
//         .then(function (response) {
//             if (response.ok) {
//                 return response.json();
//             }
//         })
//         .then(function (data) {
//             console.log(data.results.image_background);
//             var img = data.results.image_background
//             console.log(img);
//             $(image).attr('data-value',)
//         })


//     fetch(gameUrl)
//         .then(function (response) {
//             if (response.ok) {
//                 return response.json();
//             }
//         })
//         .then(function (data) {
//             console.log(data.results.games.name);
//             var games = data.results.games.name
//             console.log(games);
//             $(game).attr('data-value',)
//             // 3 games
//         });

//     getGames();







// }





//  
//  function handleSearchFormSubmit(event) {
//     event.preventDefault();
//    if(event.target.matches("img")){
//          var game = event.target.getAttribute("data-game");
//          var queryString = './game.html';
//           localStorage.setItem("game",game)
//          location.assign(queryString);
//    }



// //   }

// //   images.addEventListener('click', handleSearchFormSubmit);

// // TODO:  Build function to get Gamespot API DATA (filtered data should include NAME, DESCRIPTION, and GENRE to start; can add more later)
// // TODO:  add appropriate reference in html
// // TODO: set up LOCAL STORAGE for user's search fields.

// /**
//  * *PSEUDO-CODING THE FUNCTION:
//  *          * computer, remember this function called 'getGamespot'
//  *          * - and when you run it, tell it to reference the games library at gamespot:
//  *          *      (URL: http://www.gamespot.com/api/games/?api_key=[YOUR API KEY])
//  *          * - filters should limit data to be displayed on user's RESULTS page (i.e. NAME, DESCRIPTION, GENRE)
//  *      ? NOTE - user's requests to be put into LOCAL STORAGE and then CALLED to the RESULTS page from Local Storage
//  *      ?                -user request gets filtered through the function
//  *              ? -will need to send data results to thumbnail selections (with youTube vid) and to the GAME INFO page
//  */











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

getYouTube("skyrim+live+action+trailer");
