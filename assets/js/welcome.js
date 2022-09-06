var miniClick = $('.game-btn')
var platformBtn = $('#platform-drop');
var genreBtn = $('#genre-drop');
var submitBtn = $('#submit-btn');
var firstGame = $('#firstGame');
var secondGame = $('#secondGame');
var thirdGame = $('#thirdGame');


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
    var gamesUrl = 'https://api.rawg.io/api/games?genres=' + genreSelection + '&platforms=' + platformSelection + '&key=85d5e3870a5046f683d564278fafc1df';

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
            console.log(selectedThree)
        })

})

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
    // console.log(bucket);
    return bucket;//*bingo bango! Christian should be able to build off of this, I believe.
}




//* Our on-click event for the submit button. 
submitBtn.on('click', function (event) {
    event.preventDefault();


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
            selectedThree.forEach(item => {
                console.log(item)
                var gameImage = item.background_image;
                var gameDate = item.released
                var gameRate = item.rating
                gameName = item.name


                console.log(selectedThree)
                console.log(gameName)
                console.log(gameDate)
                console.log(gameRate)
                console.log(selectedThree)

                $(firstImage).attr("src", gameImage[0])
                $(secondImage).attr("src", gameImage[1])
                $(thirdImage).attr("src", gameImage[2])


                $(firstImage).attr("data-value", gameName[0])
                $(secondImage).attr("data-value", gameName[1])
                $(thirdImage).attr("data-value", gameName[2])

            })
        })


    miniClick.on("click", function (event) {
        event.preventDefault
        // ? on click event of the images?
        var imageClicked = {
            image: gameImage,
            name: gameName,
            date: gameDate,
            rate: gameRate
        }
        var getTrioData = localStorage.setItem('.dontDisplay', imageClicked)(JSON.stringify(imageClicked));
        location.href = "game.html";
    })
})



//? then we do the location.change to game.html



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
