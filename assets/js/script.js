//*  youTUBE VIDEOS:

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

    var trailerUrl1 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl1)
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
            $(youTubeVideo1).attr("src", url)
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

    var trailerUrl3 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";


    fetch(trailerUrl3)
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
            $(youTubeVideo3).attr("src", url)
        });

    var trailerUrl4 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl4)
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
            $(youTubeVideo4).attr("src", url)
        });


    var trailerUrl5 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl5)
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
            $(youTubeVideo5).attr("src", url)
        });



    var trailerUrl6 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl6)
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
            $(youTubeVideo6).attr("src", url)
        });



    var trailerUr7 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUr7)
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
            $(youTubeVideo7).attr("src", url)
        });



    var trailerUrl8 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl8)
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
            $(youTubeVideo8).attr("src", url)
        });



    var trailerUrl9 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl9)
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
            $(youTubeVideo9).attr("src", url)
        });




    var trailerUrl10 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl10)
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
            $(youTubeVideo10).attr("src", url)
        });



    var trailerUrl11 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl11)
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
            $(youTubeVideo11).attr("src", url)
        });



    var trailerUrl12 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl12)
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
            $(youTubeVideo12).attr("src", url)
        });



    var trailerUrl13 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl13)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } 3
        })
        .then(function (data) {
            console.log(data.video_results);
            var url = data.video_results[0].link
            url = url.replace("watch?v=", "embed/")
            console.log(url);
            $(youTubeVideo13).attr("src", url)
        });


    var trailerUrl14 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl14)
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
            $(youTubeVideo14).attr("src", url)
        });


    var trailerUrl15 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl15)
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
            $(youTubeVideo15).attr("src", url)
        });



    var trailerUrl16 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl16)
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
            $(youTubeVideo16).attr("src", url)
        });


    var trailerUrl17 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl17)
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
            $(youTubeVideo17).attr("src", url)
        });



    var trailerUrl18 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl18)
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
            $(youTubeVideo18).attr("src", url)
        });



    var trailerUrl19 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl19)
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
            $(youTubeVideo19).attr("src", url)
        });


    var trailerUrl20 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl20)
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
            $(youTubeVideo20).attr("src", url)
        });



    var trailerUrl21 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl21)
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
            $(youTubeVideo21).attr("src", url)
        });



    var trailerUrl22 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl22)
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
            $(youTubeVideo22).attr("src", url)
        });


    var trailerUrl23 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl23)
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
            $(youTubeVideo23).attr("src", url)
        });

    var trailerUrl21 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl21)
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
            $(youTubeVideo21).attr("src", url)
        });



    var trailerUrl22 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl22)
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
            $(youTubeVideo22).attr("src", url)
        });


    var trailerUrl23 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl23)
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
            $(youTubeVideo23).attr("src", url)
        });


    var trailerUrl21 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl21)
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
            $(youTubeVideo21).attr("src", url)
        });



    var trailerUrl22 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl22)
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
            $(youTubeVideo22).attr("src", url)
        });


    var trailerUrl23 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl23)
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
            $(youTubeVideo23).attr("src", url)
        });



    var trailerUrl24 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl24)
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
            $(youTubeVideo24).attr("src", url)
        });



    var trailerUrl25 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl25)
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
            $(youTubeVideo25).attr("src", url)
        });


    var trailerUrl26 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl26)
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
            $(youTubeVideo26).attr("src", url)
        });


    var trailerUrl27 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl27)
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
            $(youTubeVideo27).attr("src", url)
        });



    var trailerUrl28 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl28)
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
            $(youTubeVideo28).attr("src", url)
        });


    var trailerUrl29 = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=youtube&search_query=elden+ring+trailer&api_key=58f4d32ec9b9734f0935989c9def9f0766c97c4092a3e8b56d00745a828c4eb1";

    fetch(trailerUrl29)
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
            $(youTubeVideo29).attr("src", url)
        });
}
getYouTube();


 


var gamespotApi = "http://www.gamespot.com/api/games/?api_key=fd08d89fa51dd0b8a4fd97f597f242c5973cee51";

$("iframe").click(function()

 function getGamespot (event){
    event.preventDefault();
    
 }
//  function handleSearchFormSubmit(event) {
//     event.preventDefault();
//    if(event.target.matches("img")){
//          var game = event.target.getAttribute("data-game");
//          var queryString = './game.html';
//           localStorage.setItem("game",game)
//          location.assign(queryString);
//    }
   
  
    
//   }
  
//   images.addEventListener('click', handleSearchFormSubmit);



   


















// TODO:  Build function to get Gamespot API DATA (filtered data should include NAME, DESCRIPTION, and GENRE to start; can add more later)
// TODO:  add appropriate reference in html
// TODO: set up LOCAL STORAGE for user's search fields.

/**
 * *PSEUDO-CODING THE FUNCTION:
 *          * computer, remember this function called 'getGamespot'
 *          * - and when you run it, tell it to reference the games library at gamespot:
 *          *      (URL: http://www.gamespot.com/api/games/?api_key=[YOUR API KEY])
 *          * - filters should limit data to be displayed on user's RESULTS page (i.e. NAME, DESCRIPTION, GENRE)
 *      ? NOTE - user's requests to be put into LOCAL STORAGE and then CALLED to the RESULTS page from Local Storage
 *      ?                -user request gets filtered through the function
 *              ? -will need to send data results to thumbnail selections (with youTube vid) and to the GAME INFO page
 */