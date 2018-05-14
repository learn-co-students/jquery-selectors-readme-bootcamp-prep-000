// declare your functions here...
function paragraphSelector(){
  return $("p");
}

function lastImageSelector(){
  return $("img:last")
}

function ninjaBabySelector(){
  return $("#baby-ninja")
}

function divSelector(){
  return $(".pics:first-child") + $(".pics:second-child")
}

function firstListItem(){
  return $("#pics.list ul li:first-child")
}
