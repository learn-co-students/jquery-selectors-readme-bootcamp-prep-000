// declare your functions here...
function paragraphSelector() {
  let p = $('p');
  return p;
};

function lastImageSelector() {
  let lastImage = $('img:last');
  return lastImage;
}

function ninjaBabySelector() {
  let babyID = $('#baby-ninja');
  return babyID;
}

function divSelector() {
  let divs = $('div.pics');
  return divs;
}

function firstListItem() {
  let firstList = $('ul#pic-list li:first-child');
  return firstList;
}
