// declare your functions here...
function paragraphSelector() {
  return $('p');
}

function lastImageSelector() {
  return $('img:last');
}

function ninjaBabySelector() {
  return $('#baby-ninja');
}

function divSelector() {
  //Return the two divs with the class "pics".
  return $('div.pics');
  
  /* Although this has the same result IN THIS CASE, it's not what I should write as it returns EVERY element in body with the class "pics", not just the div elements. Also, if I put a space between divs and .pics, then I'm looking for elements with the pics class that are DESCENDANTS of div elements.
  return $('body .pics'); */
}

function firstListItem() { 
  //Note: This appears to want the NodeList, not the node/element itself.
  return $('ul#pic-list li:first-child');
}