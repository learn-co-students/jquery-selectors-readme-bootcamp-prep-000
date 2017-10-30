// declare your functions here...

function paragraphSelector(){
//const abc=[];
var abc =  $('p')
console.log("test" + abc);
return abc
}
function lastImageSelector(){
  var lastElement = $('img:last')
  return lastElement
}
function ninjaBabySelector(){
  var lastElement = $('#baby-ninja')
  return lastElement
}
function divSelector(){
  var lastElement = $('.pics')
  return lastElement
}
function firstListItem(){
  var frstLstItm = $('li:first-child()')
  return frstLstItm
}
