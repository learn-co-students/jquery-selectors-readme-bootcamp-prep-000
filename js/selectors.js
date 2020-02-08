// declare your functions here...

function paragraphSelector(){
  var ptags = [];
  ptags = $('p');
  return ptags;
}

function lastImageSelector(){
  var img;
  img = $('img:last');
  return  img
}

function ninjaBabySelector(){
  var img;
  img = $('#baby-ninja');
  return img;
}

function divSelector(){
  var div = [];
  div = $('.pics');
  return div;
  
}

function firstListItem(){
  var l;
  l = $('ul li:first-child');
  return l;
}