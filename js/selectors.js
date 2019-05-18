// declare your functions here...
function paragraphSelector(){
  return $('p')
}
function lastImageSelector(){
  return $('img:last')
}

function ninjaBabySelector(){
  return $('#baby-ninja')
}

function divSelector(){
  var div = $('div')
  div.length = 2
  return div
}

function firstListItem(){
  return $('ul#pic-list li:first-child')
}
