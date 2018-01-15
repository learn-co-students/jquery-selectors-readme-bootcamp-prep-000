// declare your functions here...
function paragraphSelector () {
  return $('p');
}

function lastImageSelector() {
  return $('img:last');
}

function ninjaBabySelector() {
  return $('#baby-ninja');
}

function divSelector() {
  return $('.pics');
}

function firstListItem() {
  return $('ul#pic-list li:first-child');
}


/* 
Because we want to select the first image inside a div, we put div first. Next comes the element we want to select, which is img, followed by :first-child:
$('div img:first-child')


Write a function firstListItem that does not accept any parameters. The function should use a first-child selector to return the first list item in the ul with the ID pic-list.
*/
