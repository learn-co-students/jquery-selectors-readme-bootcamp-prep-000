// declare your functions here...
$(document).ready(function() {

});

function paragraphSelector() {
  return $('p');;
}

function lastImageSelector() {
  return $('img:last');
}

function ninjaBabySelector() {
  return $('#baby-ninja:last');
}

function divSelector() {
  return $('div:first-child, div:nth(1)');
}

function firstListItem() {
  return $('ul#pic-list li:first-child')
}
