function paragraphSelector(){
return $('p') //use an element selector to select all p tags in index.html and return those elements
}

function lastImageSelector(){
return  $('img:last') //selects last image in index.html
}

function ninjaBabySelector(){
  return $('#baby-ninja') //returns element with the given ID
}

function divSelector(){
  return $('.pics') //class selector (.) and returns all of class .pics
}

function firstListItem(){
 return $('ul li:first-child')
  //uses a first-child selector to return the first list item in the ul with the ID pic-list.
}
