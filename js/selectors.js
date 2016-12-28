// declare your functions here...
$('img');
$('.pics');
$('#baby-ninja');
$('ul li');


function paragraphSelector(){
var pArray = $('p');
return pArray;
};

function lastImageSelector(){
  var lastImage = $('img:last');
  return lastImage;
};

function ninjaBabySelector(){
 var ninjaBaby = $('img#baby-ninja');
 return ninjaBaby;
};

function divSelector(){
 var classSelect = $('div.pics');
 return classSelect;
};

function firstListItem(){
var firstItem = $('ul#pic-list li:first-child');
return firstItem;
};
