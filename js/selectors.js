// declare your functions here...


$(document).ready(
  function() {
    
  }
)

function paragraphSelector() {
    var paragraphs = $("p");
    return paragraphs;
    }
    
    function lastImageSelector() {
      var lastImage = $("img:last");
      return lastImage;
    }
    
    function ninjaBabySelector() {
      var ninjaBabyImage = $("#baby-ninja");
      return ninjaBabyImage;
    }
    
    function divSelector() {
      var picsdivs = $("div.pics");
      return picsdivs;
    }
    function firstListItem() {
      var firstList = $("ul#pic-list li:first-child");
      return firstList;
    }