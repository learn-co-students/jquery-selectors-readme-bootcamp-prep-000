// declare your functions here...
function paragraphSelector() {
  return document.body.querySelectorAll('p')
}

function lastImageSelector() {
  return $('img:last')
}

function ninjaBabySelector() {
  return $('#baby-ninja')
}

function divSelector() {
  return $('.pics')//document.body.querySelectorAll('.pics')
}

function firstListItem() {
  return $("#pic-list li:first-child")//('ul li:first-child')
}
