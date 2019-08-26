// declare your functions here...
function paragraphSelector() {
  const p = $('p');
  return p;
}

function lastImageSelector(){
  const lastImg = $('img:last');
  return lastImg;
}

function ninjaBabySelector() {
  const nb = $('img#baby-ninja');
  return nb;
}

function divSelector() {
  const pics = $('div.pics');
  return pics;
}

function firstListItem() {
  const first = $('ul#pic-list >li:first-child');
  return first;
}
