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
  var s = $('img');

  return s[s.length-1];
}
function ninjaBabySelector(){
return $('#baby-ninja');
}
function divSelector(){
  var s = $('div')
  console.log(s);
  return s;
}
function firstListItem(){
  var s = $('li:first-child');
  console.log(s);
  return s;
}
