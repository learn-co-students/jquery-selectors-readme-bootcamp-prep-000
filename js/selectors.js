// declare your functions here...
function paragraphSelector() {
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

//+ Write a function `firstListItem` which does not accept any parameters. The function should use a first-child selector to return the first list item in the `ul` with the ID `pic-list`.

function firstListItem() {
  return $('#pic-list li:first-child');
}
