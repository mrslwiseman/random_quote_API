$(document).ready(function(){

// sets a random background colour with every new quote
var setRandomBackgroundColour = function(){
  var RGB = new Object();
  var randomValue = function() {
    return Math.floor(Math.random() * (220 - 0 + 1)) + 0;
  };
  RGB.red = randomValue();
  RGB.green = randomValue();
  RGB.blue = randomValue();

  $('body').css("background-color", "rgb(" + RGB.red + "," + RGB.green + "," + RGB.blue + ")");
}


var quoteText = "";
var quoteAuthor = "";
var longQuote = false;
var displayQuote = function(quote){
if(longQuote){
    $('main').css("font-size", "2em");
    longQuote = false;
}
    quoteText = quote.quoteText;
    quoteAuthor = quote.quoteAuthor;
    if(quoteText.length > 120){
      longQuote = true;
      console.log("over 120 characters");
      console.log(quoteText);
      $('main').css("font-size", "1.8em");




    }
      $('#quoteText').html("<div>" + quoteText + "</div>");
      $('#quoteAuthor').html("<div>&#8212" + quoteAuthor + "</div>");


    // if author is empty field, print '-unknown'
    quoteAuthor == "" && $('#quoteAuthor').html("<div>" + "&#8212Unknown" + "</div>");

// assign link to tweet link
$('#tweet').attr("href", "https://twitter.com/intent/tweet?text=" + quoteText + quoteAuthor + ". www.randomQuoteGenerator.com" ).attr("target", "_blank")

// assign link to wiki lookup link
$('#wiki').attr("href", "https://en.wikipedia.org/wiki/" + quoteAuthor).attr("target", "_blank")

setRandomBackgroundColour();

};

var getQuote = function (){
  $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp", // doesnt work without this...error: wrong function name
      dataType: "jsonp",
      success: displayQuote,
      data: {
        method: "getQuote",
        lang: "en",
       format: "jsonp"
      } })

};




$('#getQuoteButton').on("click", function(event){
  getQuote();
});

//get first quote;
  getQuote();
//$('#getQuoteButton').on("click", getQuote());

 }); // end ready




// features to add:
  // authors name links to a wiki page / google search

  // facebook / twitter links
    // Hello%20world
