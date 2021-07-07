// declare your functions here...
function paragraphSelector(){
 var pTags= $("p");
 return pTags;
}

function lastImageSelector(){
  var lastImg=$("p +div.pics img:last");
  return lastImg;
}

function ninjaBabySelector(){
  var ninjaBaby = $("img[src='https://s3.amazonaws.com/after-school-assets/baby-ninja.gif']");
  return ninjaBaby;
}

function  divSelector(){
  var div = $("div.pics");
  return div;
}

function firstListItem(){
  var select = $("ul#pic-list li:first-child");
  return select;
}