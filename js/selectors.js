// declare your functions here...
function paragraphSelector() {
  const pTags = $('p');
  return pTags;
}

function lastImageSelector() {
  const lastImg = $('img:last');
  return lastImg;
}

function ninjaBabySelector() {
  const babyNinja = $('#baby-ninja');
  return babyNinja;
}

function divSelector() {
  const classPics = $('div.pics')
  return classPics;
}

function firstListItem() {
  const listPics = $('div.pics li:first-child');
  return listPics;
}

/*

<div class="pics">
    <ul id="pic-list">
      <li>
        <img src="https://s3.amazonaws.com/after-school-assets/awesome.jpg">
      </li>
*/