// declare your functions here...

// 1. Return all p's
function paragraphSelector() {
  return $('p');
}

// 2. Return last image
function lastImageSelector() {
  return $('img:last')
}

// 3. Return the ninja baby image using an ID selector - #baby-ninja
function ninjaBabySelector() {
  return $('#baby-ninja')
}

// 4. Use class selector to return the two divs on the page
function divSelector() {
  return $('.pics')
}

// 5. Return the first list item in the `ul` with the ID `pic-list`
function firstListItem() {
  return $("ul#pic-list li:first")
}
