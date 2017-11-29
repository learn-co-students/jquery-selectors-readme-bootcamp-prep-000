/* Write a function paragraphSelector that does not accept any parameters. The function
 should use an element selector to select the p tags in index.html and return those
 elements. */
function paragraphSelector() {
 var pElements = $('p');
 return pElements;
}

/* Write a function lastImageSelector that does not accept any parameters. The function
 should use the last jQuery selector to return the last image in index.html */
function lastImageSelector() {
  var lastImage = $('img:last');
  return lastImage;
}

/* Write a function ninjaBabySelector that does not accept any parameters. The function
 should use an ID selector to return the ninja baby image. */
function ninjaBabySelector() {
  var babyNinja = $('#baby-ninja');
  return babyNinja;
}

/* Write a function divSelector that does not accept any parameters. The function should
 use a class selector to return the two divs with the class pics */
function divSelector() {
  var myDivSelector = $('.pics');
  return myDivSelector;
}

/* Write a function firstListItem that does not accept any parameters. The function
 should use a first-child selector to return the first list item in the ul with the
 ID pic-list. */
function firstListItem() {
  var firstLi = $('ul li:first-child');
  return firstLi;
}
