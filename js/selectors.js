// declare your functions here...
function paragraphSelector(){
  return $('p');
}

function lastImageSelector(){
  return $('img:last');
}

function ninjaBabySelector(){
  return $('#baby-ninja');
}

function divSelector(){
  myDivs = $('div');
  return [myDivs[myDivs.length - 2], myDivs[myDivs.length - 1]]
}

function firstListItem(){
  return $('ul li:first-child');
}
