// declare your functions here...
paragraphSelector()
lastImageSelector()
ninjaBabySelector()
divSelector()
firstListItem()



function paragraphSelector(){
  var s = $('p')
  return s;
}
function lastImageSelector(){
  var s = $('img').last();
  return s;
}
function ninjaBabySelector(){
return $('#baby-ninja');
}
function divSelector(){
  var s = $('div.pics')
  console.log(s);
  return s;
}
function firstListItem(){
  var s = $('li:first-child');
  console.log(s);
  return s;
}
