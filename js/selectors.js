// declare your functions here...

function paragraphSelector () {
  
  return $('p');
}

function lastImageSelector() {
  
  //just "img.last" — dont need any . or #. Because it's searching through ALL images for the first. No need to reduce scope.
  
  return $('img:last');
}

function ninjaBabySelector() {

  //# before baby-ninja because it works the same was asa a class selector
  return $('#baby-ninja');  
}

function divSelector(){
  
  //period before pics because it'll return entire class
  return $('.pics');
}

function firstListItem(){
  
  //descendent selector + first child selector (see lesson for)
  return $('ul li:first-child');
}