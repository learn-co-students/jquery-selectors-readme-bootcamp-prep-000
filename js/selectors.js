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
  return $('.pics');
}

function getPicList(){
  return $('#pic-list');
}

function firstListItem(){
  console.log($('#pic-list :first-child'))
  return $('#pic-list li:first-child')
}
