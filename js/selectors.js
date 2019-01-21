// declare your functions here...
//element selector(tag): $('img')
//Class selector:        $('.pics')
//ID selector:           $('#baby-ninja')
//Descendant Selector:  $('ul li')
//First Child:          $('parent-tag child-tag:first-child') . $('div img#baby-ninja')
//Alt Tag Selector:   $("img[alt='the beatles making faces']")
//Last Selector:      $('div:last')
function paragraphSelector(){
  return $('p')
}
function lastImageSelector(){
  return $('img:last')
}
function ninjaBabySelector(){
  return $('#baby-ninja')
}
function divSelector(){
  return $('.pics')
}
function firstListItem(){
  return $('ul li:first-child')
}