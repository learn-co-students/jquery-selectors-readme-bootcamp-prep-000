// declare your functions here...
function paragraphSelector() {
  return $('p')
}

function lastImageSelector() {
  //last jQuery to return last image//
  return $('img:last')
}

function ninjaBabySelector() {
  //ID selector to return ninja baby image//
  return $('#baby-ninja')
}

function divSelector() {
  //class selector to return two divs with the class pics//
  return $('.pics')
}

function firstListItem() {
  //first child selector to return the first list item in ul with the ID pic-list//
  return $('#pic-list li:first-child')
}
