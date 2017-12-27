// declare your functions here...
//selects paragraph
function paragraphSelector(){
return $(`p`)
}
//selects last image in whole .hmtl document
function lastImageSelector(){
return  $('img:last')
}
//selets baby ninja
function ninjaBabySelector(){
return  $('#baby-ninja')
}
// uses class selector to return dibs with the class .pics
function divSelector(){
return  $('.pics')
}
//use first-child selector to return first list item in the ul wihtthe ID pic-list
function firstListItem(){
return  $('ul li:first-child')
}
