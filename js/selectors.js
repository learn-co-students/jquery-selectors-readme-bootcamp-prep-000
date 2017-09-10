// declare your functions here...
function paragraphSelector() {
  return $('p');
}

function lastImageSelector() {
  const lastImage = $('img:last')
  return lastImage
}

function ninjaBabySelector() {
  const ninja = $('#baby-ninja')
  return ninja
}

function divSelector() {
  const pics = $('.pics')
  return pics
}

function firstListItem() {
  const picList = $('ul#pic-list li:first-child')
  return picList
}
