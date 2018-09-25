// declare your functions here...

function paragraphSelector () {
  var allPTags = $('p');
  return allPTags;
}

function lastImageSelector() {
  var lastImage = $('img:last');
  return lastImage;
}

function ninjaBabySelector () {
  var ninjaBaby = $('#baby-ninja');
  return ninjaBaby;
}

function divSelector () {
  var divClassPics = $('div.pics');
  return divClassPics;
}

function firstListItem () {
  var picInUl = $('ul#pic-list li:first-child');
  return picInUl;
}