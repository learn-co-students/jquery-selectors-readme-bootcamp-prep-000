// declare your functions here...
function paragraphSelector(){
  let text = $('p');
  return text;
}

function lastImageSelector(){
  let finalPic = $('img:last');
  return finalPic;
}

function ninjaBabySelector() {
  let babyPic = $('#baby-ninja');
  return babyPic;
}

function divSelector(){
  let picsDivs = $('.pics');
  return picsDivs;
}

function firstListItem(){
  $('parent-tag child-tag:first-child');
  let listItem = $('#pic-list li:first-child');
  return listItem;
}
