// declare your functions here...
//function should use an element selector to select the p tags in index.html and return those elements.
function paragraphSelector(){
  return $('p')
}

function lastImageSelector(){
  return $('img:last')
}

function ninjaBabySelector(){
  return $('img#baby-ninja')
}

function divSelector(){
  return $('div.pics')
}

function firstListItem(){
  return $('ul#pic-list li:first-child')
}
