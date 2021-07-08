// declare your functions here...

// Use an element selector to select "p" tags and return those elements
function paragraphSelector(){
  return $('p')
}

//return the last image in index.html using the "last" selector
function lastImageSelector(){
  return $('div img:last')
}

//Use an ID selector to return the ninja baby image
function ninjaBabySelector(){
  return $('#baby-ninja')
}

//Use Class selector to return the 2 divs with a "pics" class
function divSelector(){
  return $('.pics')
}

// Use "first-child" selector to return the first list item in the ul with ID "pic-list"
function firstListItem(){
  return $('#pic-list li:first-child')
}
