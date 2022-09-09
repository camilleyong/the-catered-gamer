var miniClick = $('.game-icon')
var platformBtn = $('#platform-drop');
var genreBtn = $('#genre-drop');
var submitBtn = $('#submit-btn');

// var response = $('#error');



//  ERROR MESSAGE OPTION 2 IF MODAL DOES NOT WORK 

// submitBtn.on('click', function(event) {
//     event.preventDefault();
//     console.log(event);
//     var errorResponse = "Please select a Platform and Genre option";
//     response.text(errorResponse);
// });







//* Our on-click event for the submit button. 
submitBtn.on('click', function (event) {
    event.preventDefault();



    $('.find-game').css('display', 'none');
    $('.search-results').css('display', 'flex');



    //*Here, we get the values that the user selected from each drop down menu
    var platformSelection = $('#platform-drop').val();
    console.log("platform", platformSelection)
    var genreSelection = $('#genre-drop').val();
    console.log("genre", genreSelection)

    //*Our rawg.api source for games linked here, with the user's selections as queries
    var gamesUrl = "https://api.rawg.io/api/games?genres=" + genreSelection + "&platforms=" + platformSelection + "&key=85d5e3870a5046f683d564278fafc1df";

    //*the fetch call...
    fetch(gamesUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (data) {
            console.log(data.results);
            //*we only want three random results from the data.results, so I'm setting up a variable here to hold that for a function called 'selectThree'
            var selectedThree = selectThree(data.results);
            var count = 1;
            selectedThree.forEach(item => {
                console.log(item)
                var gameImage = item.background_image
                var gameDate = item.released
                var gameRate = item.rating
                var gameName = item.name


                console.log(selectedThree)
                console.log(gameName)
                console.log(gameImage)
                console.log(gameDate)
                console.log(gameRate)
                console.log(selectedThree)


                // var firstGameImage = gameImage


                // var firstGameName = gameName

                $('.game-title' + count).text(gameName)


                // var firstGameRate = gameRate


                $('.rate' + count).text(gameRate)


                // var firstGameDate = gameDate
                console.log(gameDate)


                $('.release-date' + count).text(gameDate)

                console.log(gameImage)
                $('#gameImage' + count).attr("src", gameImage)


                $('.game-icon' + count).attr("data-value", gameName)

                count++;


                miniClick.on("click", function (event) {
                    event.preventDefault();
                    console.log($(event.target).parent().data().value)
                    var imageClicked = $(event.target).parent().data().value
                    localStorage.setItem('dontDisplay', imageClicked);
                    location.href = "game.html";


                })
            })

        })
})
export { getTrioData }
var getTrioData


//*our selectThree function to get our random 3 results
function selectThree(results) {
    //* we are putting the original api array results into an entirely new array below (bucket) so we can pull from it without altering the original array. 
    const selectsCopy = [...results];
    const bucket = [];

    //*Our forEach function on this 3 item array. So the [1,2,3] and (ii) are meaningless; just placeholders.
    [1, 2, 3].forEach(function (ii) {
        const selectedRandom = Math.floor(Math.random() * selectsCopy.length) + 1; //*selects copy.length is being evaluated after we do the splice; making it a value that changes every time we go thru the array
        const randomGames = selectsCopy.splice(selectedRandom, 1);
        bucket.push(randomGames[0]); //*the results get pushed into our BUCKET array
        console.log("randomGame", randomGames);
    })
    console.log(bucket);
    return bucket;//*bingo bango! Christian should be able to build off of this, I believe.


}

