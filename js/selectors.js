// declare your functions here...
function paragraphSelector(){
  return $('p')
}
function lastImageSelector(){
  return $('img:last')
}
function ninjaBabySelector(){
  return $('img[id=baby-ninja]')
}
function divSelector(){
  var divs = $('div')
  return divs.slice(0,2)
}
function firstListItem(){
  var tags = $('ul li:first-child')
  return tags
}