console.log("it's linked")

var platformBtn = $('#platformBtn');
var genreBtn = $('#genreBtn');
var submitBtn = $('#submit-btn');



// submitBtn.on('click', function () {
//     var platform = $("#platformBtn").attr('data-value');
//     var genre = $("#genreBtn").attr('data-value');
        
    
    // if(platform.val === null || genre === null) {
    //     alert('Please select a platform and genre, gamer.')
    //     return;    
    // }
// })


// genreBtn.on('click', '.dropdown-item', function() {
//     localStorage.setItem('.dropdown-item'.val)
// })

function getPlatforms() {
    var platformsUrl = "https://api.rawg.io/api/platforms?key=fec3f6fd194f4e91bd4b7a9873506189"

    fetch(platformsUrl)
    .then(function(response) {
        if(response.ok) {
            return response.json();
        }
        })
        .then(function (data) {
            console.log(data)
        })
};



function getGenres () {
    var genresUrl = "https://api.rawg.io/api/genres?key=fec3f6fd194f4e91bd4b7a9873506189"
    
    fetch(genresUrl)
    
    .then(function(response) {
        if(response.ok) {
            return response.json();
        }
    })
    .then(function (data) {
        console.log(data)  
    })
};











// submitBtn.addEventListener("click", function(event) {
//     event.preventDefault();

//     var platform = document.querySelector("#platformBtn").value;
//     var genre = document.querySelector("#genreBtn").value;
    
    
//  
//  function handleSearchFormSubmit(event) {
//     event.preventDefault();
//    if(event.target.matches("img")){
//          var game = event.target.getAttribute("data-game");
//          var queryString = './game.html';
//           localStorage.setItem("game",game)
//          location.assign(queryString);
//    }













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
// }

// getYouTube("skyrim+live+action+trailer");
