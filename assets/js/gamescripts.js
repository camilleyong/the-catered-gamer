

console.log("hey it's linked!");


var youTubeVideo = $("#youTubeVideo");



function getYouTube(game) {

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









// var gamespotApi = "http://www.gamespot.com/api/games/?api_key=fd08d89fa51dd0b8a4fd97f597f242c5973cee51";

// $("iframe").click(function()

//  function getGamespot (event){
//     event.preventDefault();
    
// //  }
// //  function handleSearchFormSubmit(event) {
// //     event.preventDefault();
// //    if(event.target.matches("img")){
// //          var game = event.target.getAttribute("data-game");
// //          var queryString = './game.html';
// //           localStorage.setItem("game",game)
// //          location.assign(queryString);
// //    }
   
  
    
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


