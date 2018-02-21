function paragraphSelector() {
  var list = $('p');

  return list;
}

function lastImageSelector() {
  var last = $('img:last');

  return last
}

function ninjaBabySelector() {
  var baby = $('#baby-ninja');

  return baby;
}

function divSelector() {
  var picDiv = $('.pics');

  return picDiv;
}

function firstListItem() {
  // var firstKid = $('ul:first-child.#pic-list');
  var firstKid = $("ul li:first-child"); 
  return firstKid;
}
