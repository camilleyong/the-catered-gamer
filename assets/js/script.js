console.log("hey it's linked!");


var youTubeVideo = $("#youTubeVideo");
var youTubeVideo1 = $("#youTubeVideo1");
var youTubeVideo2 = $("#youTubeVideo2");
var youTubeVideo3 = $("#youTubeVideo3");
var youTubeVideo4 = $("#youTubeVideo4");
var youTubeVideo5 = $("#youTubeVideo5");
var youTubeVideo6 = $("#youTubeVideo6");
var youTubeVideo7 = $("#youTubeVideo7");
var youTubeVideo8 = $("#youTubeVideo8");
var youTubeVideo9 = $("#youTubeVideo9");
var youTubeVideo10 = $("#youTubeVideo10");
var youTubeVideo11 = $("#youTubeVideo11");
var youTubeVideo12 = $("#youTubeVideo12");
var youTubeVideo13 = $("#youTubeVideo13");
var youTubeVideo14 = $("#youTubeVideo14");
var youTubeVideo15 = $("#youTubeVideo15");
var youTubeVideo16 = $("#youTubeVideo16");
var youTubeVideo17 = $("#youTubeVideo17");
var youTubeVideo18 = $("#youTubeVideo18");
var youTubeVideo19 = $("#youTubeVideo19");
var youTubeVideo20 = $("#youTubeVideo20");
var youTubeVideo21 = $("#youTubeVideo21");
var youTubeVideo22 = $("#youTubeVideo22");
var youTubeVideo23 = $("#youTubeVideo23");
var youTubeVideo24 = $("#youTubeVideo24");
var youTubeVideo25 = $("#youTubeVideo25");
var youTubeVideo26 = $("#youTubeVideo26");
var youTubeVideo27 = $("#youTubeVideo27");
var youTubeVideo28 = $("#youTubeVideo28");
var youTubeVideo29 = $("#youTubeVideo29");


function getYouTube() {
    var trailerUrl = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=skyrim+Live+Action+Trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";



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

    var trailerUrl2 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl2)
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
            $(youTubeVideo2).attr("src", url)
        });



}

getYouTube();

