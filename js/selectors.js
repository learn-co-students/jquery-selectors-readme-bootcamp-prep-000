// declare your functions here...
function paragraphSelector(){
  return $(`p`)
}

function lastImageSelector() {
  return $(`img:last`)
}

function ninjaBabySelector() {
  return $("#baby-ninja")
}

function divSelector() {
  return $('.pics')
}

function firstListItem() {
//use a first-child selector to return the first list item in the `ul` with the ID `pic-list`.
//$('parent-tag child-tag:first-child')

  console.log(`${$(`div ul:first-child`).innerHTML}`)
  return $(`div ul li:first-child`)
}
