// declare your functions here...
function paragraphSelector () {
  let paragraphs = $('p').get()
  return paragraphs
}

function lastImageSelector() {
  return $('img:last')
}

function ninjaBabySelector() {
  return $('#baby-ninja')
}

function divSelector() {
  return $('.pics').get()
}

function firstListItem() {
  return $('ul#pic-list > li').first()
}