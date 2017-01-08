// Learn.co Bootcamp Prep 25 JavaScript jQuery Selectors.

// Define a function, 'paragraphSelector', that accepts no parameter(s).
// Use an element selecter to return an the array of 'p' tags in 'index.html'.
function paragraphSelector() {
  return $('p');
}


// Define a function, 'lastImageSelector', that accepts no parameter(s).
// Return the last image in in 'index.html'.
function lastImageSelector() {
  return $('img:last');
}


// Define a function, 'ninjaBabySelector', that accepts no parameter(s).
// Use an ID selector to return the ninja baby image from 'index.html'.
function ninjaBabySelector() {
  return $('#baby-ninja');
}


// Define a function, 'divSelector', that accepts no parameter(s).
// Use a class selector to return the two 'div's in 'index.html'.
function divSelector() {
  return $('.pics');
}


// Define a function, 'firstListItem', that accepts no parameter(s).
// Use a first-child selector to return the first list item in the 'ul' with
// the ID 'pic-list'.
function firstListItem() {
  return $('ul li:first-child');
}
