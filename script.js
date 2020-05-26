

// function renderButtons() {

// $("#city-search").on("click", function(event) {
//     event.preventDefault();
    
//     var a = $("<button>");
//     $("#buttons-view").append(a);

// });

// renderButtons()



    // constructing a queryURL variable we will use instead of the literal string inside of the ajax method
    var city = "charlotte";
    var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid={727c1e4e4fba7ce8daac9b0d1f5f503c}";

    


    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      console.log(response.Runtime);
    });
// ---------------------------------------------------------

    console.log("This console.log will probably happen first because of asynchronicity.");
    var x = 2;
    var y = 10;
    var z = 13;
    console.log("We can also assign some variables and do some arithmetic while we wait too: 2 + 10 + 13 = ", x + y + z);



// function displayWeatherInfo() {
    


//     var user = localStorage["#city-input"] ;
//     document.getElementById("city-input").value = user ;

//     var newCity = $("#city-input").val();
//     var queryURL = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={727c1e4e4fba7ce8daac9b0d1f5f503c}" + newCity + "&apikey=trilogy";
//     console.log(newCity);

//     $("#city-input").text(JSON.stringify(response));

// });
//  displayWeatherInfo()   





//     // Creates AJAX call for the specific movie button being clicked
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
//         console.log(response);
//         $("#weather-view").text(JSON.stringify(response));

//       // Creates a div to hold the movie
//       // Retrieves the Rating Data
//       // Creates an element to have the rating displayed
//       // Displays the rating
//       // Retrieves the release year
//       // Creates an element to hold the release year
//       // Displays the release year
//       // Retrieves the plot
//       // Creates an element to hold the plot
//       // Appends the plot
//       // Creates an element to hold the image
//       // Appends the image
//       // Puts the entire Movie above the previous movies.
//     });

//   }

//   function renderButtons() {

//     // Deletes the movies prior to adding new movies
//     // (this is necessary otherwise you will have repeat buttons)
//     $("#buttons-view").empty();
//     // Loops through the array of movies
//     for (var i = 0; i < newCity.length; i++) {






//       // Then dynamicaly generates buttons for each movie in the array
//       // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//       var a = $("<button>");
//       // Adds a class of movie to our button
//       a.addClass("newBtn");
//       // Added a data-attribute
//       a.attr("data-name", newCity[i]);
//       // Provided the initial button text
//       a.text(newCity[i]);
//       // Added the button to the buttons-view div
//       $("#buttons-view").append(a);
//     }
//   }