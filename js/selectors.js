// declare your functions here...
$('body')
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
  return $('.pics')
}
function firstListItem(){
  var first=$('#pic-list :first-child').slice(0,1)
  return first
}
