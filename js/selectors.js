// declare your functions here...
function paragraphSelector() {
  return $("p")
}

function lastImageSelector() {
  return $("img:last")
}

function ninjaBabySelector() {
  return $("img[id='baby-ninja']")
}

function divSelector() {
  return $("div.pics")
}

/*
Write a function firstListItem that does not accept any parameters. The
function should use a first-child selector to return the first list item
in the ul with the ID pic-list.
*/
function firstListItem() {
  return $('ul#pic-list li:first-child')
}
