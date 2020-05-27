
var APIKey = "727c1e4e4fba7ce8daac9b0d1f5f503c";
var cityName = $("#cityInput").val().trim()

// var citiesBtns = []

//Here we run our AJAX call to the OpenWeatherMap API
function handleClick() {
  var cityName = $("#cityInput").val().trim()
//Here we build the URLwe need to query the database
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey

$.ajax({
  url: queryURL,
  method: "GET"


}).then(function(response) {



  //Log the query
  console.log(queryURL);
  console.log(response);
  console.log("Temp " + convertKelvin(response.main.temp) + " F");
  console.log("TempLow " + convertKelvin(response.main.temp_min) + " F");
  console.log("TempHigh " + convertKelvin(response.main.temp_max) + " F");

  // var nameOfCity = (response.city.name);
  // var pOne = $("<p>").text("Weather: " + name);
  // cityDiv.append(pOne);
  
  //Storing the weather data
  cityDiv = $("#cityDiv");
  cityDiv2 = $("#cityDivDay2");
  cityDiv3 = $("#cityDivDay3");
  cityDiv4 = $("#cityDivDay4");
  cityDiv5 = $("#cityDivDay5");
  // Creating an element to have the weather displayed (list is not defined ref error in console so I changed to Array)
  var temp = $("<p>").text("Current Temp " + convertKelvin(response.main.temp) + " F");
  var tempLow = $("<p>").text("TempLow " + convertKelvin(response.main.temp_min) + " F");
  var tempHigh = $("<p>").text("TempHigh " + convertKelvin(response.main.temp_max) + " F");
  var humidity = $("<p>").text("Humidity " + response.main.humidity + "%");
  // Displaying the weather
  cityDiv.append(temp, tempLow, tempHigh, humidity);

  var temp = $("<p>").text("Current Temp " + convertKelvin(response.main.temp) + " F");
  var tempLow = $("<p>").text("TempLow " + convertKelvin(response.main.temp_min) + " F");
  var tempHigh = $("<p>").text("TempHigh " + convertKelvin(response.main.temp_max) + " F");
  var humidity = $("<p>").text("Humidity " + response.main.humidity + "%");
  cityDiv2.append(tempLow, tempHigh, humidity);

  var temp = $("<p>").text("Current Temp " + convertKelvin(response.main.temp) + " F");
  var tempLow = $("<p>").text("TempLow " + convertKelvin(response.main.temp_min) + " F");
  var tempHigh = $("<p>").text("TempHigh " + convertKelvin(response.main.temp_max) + " F");
  var humidity = $("<p>").text("Humidity " + response.main.humidity + "%");
  cityDiv3.append(tempLow, tempHigh, humidity);

  var temp = $("<p>").text("Current Temp " + convertKelvin(response.main.temp) + " F");
  var tempLow = $("<p>").text("TempLow " + convertKelvin(response.main.temp_min) + " F");
  var tempHigh = $("<p>").text("TempHigh " + convertKelvin(response.main.temp_max) + " F");
  var humidity = $("<p>").text("Humidity " + response.main.humidity + "%");
  cityDiv4.append(tempLow, tempHigh, humidity);

  var temp = $("<p>").text("Current Temp " + convertKelvin(response.main.temp) + " F");
  var tempLow = $("<p>").text("TempLow " + convertKelvin(response.main.temp_min) + " F");
  var tempHigh = $("<p>").text("TempHigh " + convertKelvin(response.main.temp_max) + " F");
  var humidity = $("<p>").text("Humidity " + response.main.humidity + "%");
  cityDiv5.append(tempLow, tempHigh, humidity);

  
})};

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
    // Adding a class of movie-btn to our button
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









