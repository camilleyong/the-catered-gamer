/* PLATFORM BUTTON clicked and SELECTION made - hold that selection in local storage
 * *GENRE BUTTON clicked and SELECTION made - hold that selection in local storage
 * 
 * *now we've got values for PLATFORM and GENRES
 * 
 * *    var platform = $("#platform").attr('data-value');
 * *   var genre = $("#genre").attr('data-value');
 * *
 * *   var getGames = url-api
 * *    var submitBtn = $('#submit')
 * *
 * *   then listener for the SUBMIT BUTTON
 * *   onclick (function(platform, genre)) {
 * *        take those values, FETCH only that userInput Genre from UserInputPlatform}
 * *  Or... fetch platform.val() first? , .then pull Genre from that list?
 * 
 * *   Fetch id's #'s that only match === userInput, 
 * *    so now i've got 1 platform of results. Then give me userValue for Genre within that platform
 * *        AND only give me 3 RANDOM results
 * 
 * *    CREATE ID TABLE FOR PLATFORM ID #'S AND GENRE NAMES "EXACT SPELLINGS"
 * 
 * *   if userInput is Playstation, read that as "id#??"; same for genres
 * 
 * TODO 1. Create reference tables for platform id's and genre names
 * 
 * todo 2. Create function(){} for storing PLATFORM and GENRE user selections to LOCAL STORAGE (done?)
 * 
 * TODO     2a. convert user selections to id#'s and "exactSpellingofGenres" per the API
 * todo 
 * 
 * 3. onCLICK for the Submit button
 * todo    3a. pull userInput from LOCAL STORAGE and apply those as FILTERS to the FETCH URL
 * todo         ***LIMIT RESULTS TO THREE RANDOM OF array.length
 */


var platformBtn = $('#platform');
var genreBtn = $('#genre');
var submitBtn = $('#submit-btn');


platformBtn.on('click', '.dropdown-item', function() {
    console.log('.dropdown-item');
});


genreBtn.on('click', '.dropdown-item', function() {
    console.log('.dropdown-item');
});


submitBtn.on('click', function () {
    var platform = $("#platform").attr('data-value');
    var genre = $("#genre").attr('data-value');
    

    if(platform.val === null || genre === null) {
        alert('Please select a platform and genre, gamer.')
        return;
    }
    })



    
    
//  
//  function handleSearchFormSubmit(event) {
//     event.preventDefault();
//    if(event.target.matches("img")){
//          var game = event.target.getAttribute("data-game");
//          var queryString = './game.html';
//           localStorage.setItem("game",game)
//          location.assign(queryString);
//    }













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
