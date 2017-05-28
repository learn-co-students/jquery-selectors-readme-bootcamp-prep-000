// select the p tags in index.html and return those elements
function paragraphSelector() {
  return $('p');
}

// return the last image in index.html
function lastImageSelector() {
  return $('img:last');
}

// use an ID selector to return the ninja baby image
function ninjaBabySelector() {
  return $('#baby-ninja');
}

// use a class selector to return the two divs with the class pics
function divSelector() {
  return $('.pics')
}

// return the first list item in the ul with the ID pic-list
function firstListItem() {
  return $('div ul li:first-child')
}
