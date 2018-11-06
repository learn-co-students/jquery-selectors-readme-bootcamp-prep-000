// declare your functions here...

function paragraphSelector() { 
return document.getElementsByTagName('p');
}

function lastImageSelector() {
  last = $('img:last');
  return last;
}

function ninjaBabySelector() {
  return $('#baby-ninja');
}

function divSelector() {
  return $('div.pics');
}

function firstListItem() {
  return $('ul li:first-child');
}