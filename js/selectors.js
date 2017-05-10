// declare your functions here...
//This is a jQuery selector function, its function is to pick the paragraph tag in the html. Then it returns it.
function paragraphSelector(){
  return $('p')
}

function lastImageSelector(){
  return $('ul li:last-child img')
}

function ninjaBabySelector(){
  return $('div #baby-ninja')
}

function divSelector(){
  return $('.pics')
}

function firstListItem(){
  return $('ul li:first-child')
}
