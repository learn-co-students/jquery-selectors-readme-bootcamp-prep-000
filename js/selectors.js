// declare your functions here...
//Write a function lastImageSelector that does not accept any parameters.
//The function should use the last jQuery selector to return the last image in index.html.
function lastImageSelector() {
  return  $("img:last")
}

function paragraphSelector(){
  return $("p")
}

function ninjaBabySelector(){
  return $("#baby-ninja")
}

function divSelector(){
  return $('.pics')
}

function firstListItem(){
  return $('ul li:first-child')
}
//Write a function firstListItem that does not accept any parameters. The function should use a
//first-child selector to return the first list item in the ul with the ID pic-list.*/
