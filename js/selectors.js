// declare your functions here...
function paragraphSelector(){
   return $('p');
}
function lastImageSelector(){
  return $('img:last');
}
function ninjaBabySelector(){//# for id
  return $('#baby-ninja');
}
function divSelector(){//there are to div with same class name
  return $('.pics');
}
function firstListItem(){
  return $('#pic-list li:first-child')//$('parent-tag child-tag:first-child')
  //parent-tag could also be its id
}
