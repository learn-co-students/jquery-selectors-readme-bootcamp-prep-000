// declare your functions here...


function paragraphSelector() {
  //  Select and return all <p> elements
  return $('p')
}

function lastImageSelector() {
  //  Return last <img> element in index.html
  return $('img:last')
}

function ninjaBabySelector() {
  //  Return gif img of baby-ninja using id selector
  return $('#baby-ninja')
}

function divSelector() {
  //  Return (2) divs with class .pics
  return $('div.pics')
}

function firstListItem() {
  //  Return the first-child element of the ul with id #pic-list
  return $('ul#pic-list li:first-child')
}
