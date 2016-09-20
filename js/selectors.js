// declare your functions here...
// $(document).ready(function() {
//
// })

function paragraphSelector() {
  //uses an element selector to select the p tags in index.html and return those elements.
  return $('p')
}

function lastImageSelector() {
  //uses the last jQuery selector to return the last image in index.html
  return $('img:last')
}

function ninjaBabySelector() {
  //uses the last jQuery selector to return the last image in index.html
  return $('#baby-ninja')
}

function divSelector() {
  //uses a class selector to return the two divs on the page.
  return $('.pics')
}
function firstListItem() {
  //uses a first-child selector to return the first list item in the ul with the ID pic-list.
  return $('ul#pic-list li:first-child')
}
