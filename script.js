





var APIKey = "727c1e4e4fba7ce8daac9b0d1f5f503c";
var cityName = $("#cityInput").val().trim()

// var citiesBtns = []

//Here we run our AJAX call to the OpenWeatherMap API
function handleClick() {
  var cityName = $("#cityInput").val().trim()
  
  
//Here we build the URLwe need to query the database


var latLonQuery = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey

var lat;
var lon;

$.ajax({
  url: latLonQuery,
  method: "GET"
})
.then(function(response) {

  

  console.log(latLonQuery);
  console.log(response);
  console.log("lat " + (response.coord.lat));
  console.log("lon " + (response.coord.lon));

  
  
  


var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&exclude=minutely,hourly" + "&appid=" + APIKey



$.ajax({
  url: queryURL,
  method: "GET"


}).then(function(result) {



  //Log the query
  console.log(queryURL);
  console.log(result);
  console.log("Temp " + convertKelvin(result.current.temp) + " F");
  console.log("TempLow " + convertKelvin(result.daily[0].temp.min) + " F");
  console.log("TempHigh " + convertKelvin(result.daily[0].temp.max) + " F");

  
  
  //Storing the weather data
  cityDiv = $("#cityDiv");
  cityDiv2 = $("#cityDivDay2");
  cityDiv3 = $("#cityDivDay3");
  cityDiv4 = $("#cityDivDay4");
  cityDiv5 = $("#cityDivDay5");
  // Creating an element to have the weather displayed (list is not defined ref error in console so I changed to Array)
  var temp = $("<p>").text("Current Temp " + convertKelvin(result.current.temp) + " F");
  var tempLow = $("<p>").text("Today's Low " + convertKelvin(result.daily[0].temp.min) + " F");
  var tempHigh = $("<p>").text("Today's High " + convertKelvin(result.daily[0].temp.max) + " F");
  var humidity = $("<p>").text("Humidity " + result.daily[0].humidity + "%");
  // Displaying the weather
  cityDiv.append(temp, tempLow, tempHigh, humidity);

  
  // var day = $(".h3-5").text(result.daily[1].dt);
  var tempLow = $("<p>").text("TempLow " + convertKelvin(result.daily[1].temp.min) + " F");
  var tempHigh = $("<p>").text("TempHigh " + convertKelvin(result.daily[1].temp.max) + " F");
  var humidity = $("<p>").text("Humidity " + result.daily[1].humidity + "%");
  cityDiv2.append(tempLow, tempHigh, humidity);
  $(".h3-2").text(moment().add(1, 'days').format('l'));

  
  // var day = $(".h3-3").text(result.daily[2].dt);
  var tempLow = $("<p>").text("TempLow " + convertKelvin(result.daily[2].temp.min) + " F");
  var tempHigh = $("<p>").text("TempHigh " + convertKelvin(result.daily[2].temp.max) + " F");
  var humidity = $("<p>").text("Humidity " + result.daily[2].humidity + "%");
  cityDiv3.append(tempLow, tempHigh, humidity);
  $(".h3-3").text(moment().add(2, 'days').format('l'));

  
  // var day = $(".h3-4").text(result.daily[3].dt);
  var tempLow = $("<p>").text("TempLow " + convertKelvin(result.daily[3].temp.min) + " F");
  var tempHigh = $("<p>").text("TempHigh " + convertKelvin(result.daily[3].temp.max) + " F");
  var humidity = $("<p>").text("Humidity " + result.daily[3].humidity + "%");
  cityDiv4.append(tempLow, tempHigh, humidity);
  $(".h3-4").text(moment().add(3, 'days').format('l'));


  // var day = $(".h3-2").text(result.daily[4].dt);
  var tempLow = $("<p>").text("TempLow " + convertKelvin(result.daily[4].temp.min) + " F");
  var tempHigh = $("<p>").text("TempHigh " + convertKelvin(result.daily[4].temp.max) + " F");
  var humidity = $("<p>").text("Humidity " + result.daily[4].humidity + "%");
  cityDiv5.append(tempLow, tempHigh, humidity);
  $(".h3-5").text(moment().add(4, 'days').format('l'));

  
})

});
};


$("#add-city").on("click", handleClick)

function convertKelvin(num) {
  return parseInt(((((num) -273.15) * 1.8) +32))
}









var citiesBtns = [];
function renderButtons() {
  
  // Deleting the cities prior to adding new cities
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of cities
  for (var i = 0; i < citiesBtns.length; i++) {

    // Then dynamicaly generating buttons for each city in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of city-btn to our button
    a.addClass("city-btn");
    // Adding a data-attribute
    a.attr("data-name", citiesBtns[i]);
    // Providing the initial button text
    a.text(citiesBtns[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}
// This function handles events where a city button is clicked
$("#add-city").on("click", function(event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var city = $("#cityInput").val().trim();

  // Adding city from the textbox to our array
  citiesBtns.push(city);

  // Calling renderButtons which handles the processing of our city array
  renderButtons();
});









