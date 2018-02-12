$(document).ready(function(){
  //run function to get new quote
  $("#quote-button").on("click", function(){$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(json){
    var html = "";
    value = Object.values(json);
    //"Unknown" if there is no author name
    if (value[1] === ""){
      value[1] = "Unknown";
    }
    //get the quote and the author into a single variable
    html += "<div class='quote'>\"";
    html += value[0] + "\"<br><br><br>-" + value[1];
    html += "</div><br>";
    $(".message").html(html);
      });
    });
  //click to get a new quote
  $("#quote-button").trigger("click");
  //click to tweet current displayed message
  $("#twitter_button").on("click", function(){
    var url = "https://www.twitter.com/intent/tweet?text=";
    window.open(url + "\"" + value[0] + "\"" + " " + value[1]);
  })
});
