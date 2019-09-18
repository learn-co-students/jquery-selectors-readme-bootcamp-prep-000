// declare your functions here...
function paragraphSelector() {
  var paragraph = $('p');
  return paragraph;

}

function lastImageSelector() {
  var lastImage = $('div img').last();
  return lastImage;
}

function ninjaBabySelector() {
  var ninjaBaby = $('#baby-ninja');
  return ninjaBaby;
}

function divSelector() {
  var pics = $('.pics');
  return pics;
}

function firstListItem() {
  var firstChild = $('ul li:first-child');
  return firstChild;
}
