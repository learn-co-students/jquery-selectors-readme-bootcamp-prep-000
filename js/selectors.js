// declare your functions here...

/*function paragraphSelector() {
  var parSelect = $('p');
  var allPar = [];
  for (let i = 0; i<parSelect.length;i++) {
  var currPar = parSelect[i].innerHTML
  allPar.push(currPar);
  }
}   */

function paragraphSelector() {
  return $('p')
}

function lastImageSelector() {
   return $('img:last')
}

function ninjaBabySelector() {
  return $('#baby-ninja')
}

function divSelector() {
 return $('.pics')
}

function firstListItem() {
 return $('#pic-list li:first-child')
}