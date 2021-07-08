// declare your functions here...
function paragraphSelector() {
  var selectors = $("p");
  return selectors;
};

function lastImageSelector() {
  var lastImg = $('div img:last');
  return lastImg;
};

function ninjaBabySelector() {
  var ninjaBabyImg = $('#baby-ninja');
  return ninjaBabyImg
};

function divSelector() {
  var classPic = $('.pics');
  return classPic;
};

function firstListItem() {
  var firstChildList = $('#pic-list li:first-child');
  return firstChildList;
};
