$(document).ready( ()=> {
  mocha.run()
})

function paragraphSelector() {
  //The function should use an element selector to select the p tags in index.html and return those elements. (Note that we're using the plural because the selector will always return an array when used with tags, even if there's only one!)
  return $('p')
}

function lastImageSelector() {
  return $('img:last')
}

function ninjaBabySelector() {
  return $('#baby-ninja')
}

function divSelector() {
  return $('div.pics')
}

function firstListItem() {
  return $('ul#pic-list li:first')
}
