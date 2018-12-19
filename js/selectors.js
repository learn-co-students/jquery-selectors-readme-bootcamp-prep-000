// declare your functions here...
function paragraphSelector(){
  return $('p')
}
function lastImageSelector(){
  return $('img:last')
}
function ninjaBabySelector(){
  return $('#babyninja')
}
function divSelector(){
  var divs = $('div')
  return divs.slice(0,2)
}
function firstListItem(){
  var tags = $('li')
  return tags[0]
}