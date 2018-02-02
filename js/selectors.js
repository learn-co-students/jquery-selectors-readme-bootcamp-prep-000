// declare your functions here...
$('.pics');
$('#baby-ninja');
$('ul li');
$('div img:first-child');
$("img[alt='the beatles making faces']");
$('div:last');

function paragraphSelector(){
  paragraphs = $('p');
  return paragraphs;
}

function lastImageSelector(){
  return $('img:last');
}

function ninjaBabySelector(){
  return $('#baby-ninja');
}

function divSelector(){
  return $('.pics');
}

function firstListItem(){
  return $('#pic-list li:first-child')
}