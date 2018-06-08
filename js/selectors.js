// declare your functions here...
function paragraphSelector(){
  return $('p');
}

function lastImageSelector(){
  return $('img:last');
}

function ninjaBabySelector(){
  return $('#baby-ninja');
}

function divSelector(){
  return $('.pics');
}

function firstListItem(){
  return $('ul img:first-child').get(0)// the get function get's the first index from the listed items with those of ID "pic-list";
}