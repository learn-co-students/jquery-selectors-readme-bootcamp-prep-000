// declare your functions here...
function paragraphSelector(){
  //element selector to select p tages in index.html
  //and return
  var arr = []
  arr = $('p');
  return arr;
}

function lastImageSelector(){
//use the last JQuery selector to return last image
  var ret = $('img:last')
  return ret;
}

function ninjaBabySelector(){
//use ID selector to return the ninja baby image
var ret = $('#baby-ninja')
return ret;
}

function divSelector(){
 var arr = []
 arr = $('.pics')
 return arr
}

function firstListItem(){
  //use a class selector to return the first-child selector
  //in the ul with the ID pic-list
  var ret = $('li:first-child')
  return ret
}
