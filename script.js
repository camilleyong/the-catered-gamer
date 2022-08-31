console.log("hey it's linked!");


var youTubeVideo = $("youTubeVideo");


function getYouTube() {
    var trailerUrl = "https://serpapi.com/search.json?engine=youtube&search_query=skyrim+Live+Action+Trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";



    fetch(trailerUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }

        })
        .then(function (data) {
            console.log(data[0].video_results.link);
            $(youTubeVideo).attr("src", data[0].video_results.link)
        });


}

getYouTube();