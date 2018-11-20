// declare your functions here...
function paragraphSelector(){
  return $('p');
}
function lastImageSelector(){
  return $('img:last')
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
/*
+ Write a function `divSelector` that does not accept any parameters. The function
should use a class selector to return the two divs with the class `pics`.

+ Write a function `firstListItem` that does not accept any parameters. The
function should use a first-child selector to return the first list item in the
`ul` with the ID `pic-list`.

*/
