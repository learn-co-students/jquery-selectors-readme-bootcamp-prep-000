// declare your functions here...
function paragraphSelector () {
  //element selector to select p tags in index.html
  return $('p');
  //return p tags
}

function lastImageSelector () {
  //use last jquery selector to return last image of index.html
  return $('img:last');
}


function ninjaBabySelector () {
  //use id selector to return ninja baby image
  return $('#baby-ninja');
}


function divSelector(){
  return $('.pics');
}

function firstListItem () {
  //first child selector to
  //return first list item in ul with id pic-list
  return $('ul#pic-list li:first-child');
}
