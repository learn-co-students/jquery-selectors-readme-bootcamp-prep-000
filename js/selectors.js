// declare your functions here...
// jQuery to select all <p> elements
function paragraphSelector() {
  return $('p');
}
// returns last image of the document using last selector
function lastImageSelector() {
  return $('img:last');
}
// returns baby-ninja img with id
function ninjaBabySelector() {
  return $('#baby-ninja');
}
// returns all of the elements with the class of pics
function divSelector() {
  return $('.pics');
}
/* returns the first list item in an unordered list from an element that
has the id of pic-list using descendandt selectors
*/
function firstListItem() {
  return $('#pic-list li:first-child');
}
