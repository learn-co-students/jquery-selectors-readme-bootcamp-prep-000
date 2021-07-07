
function paragraphSelector(){
  //select and return all p tags
  return $('p');
}

function lastImageSelector(){
  //returns last image
  return $('img:last');
}

function ninjaBabySelector(){
  //use id selector to get baby gif
  return $('#baby-ninja');
}

function divSelector(){
  //use class selector to get divs labelled pics
  return $('.pics');
}

function firstListItem(){
  //use first child selector to get first item in ul with ID pic-list
  return $('#pic-list li:first-child');
}

