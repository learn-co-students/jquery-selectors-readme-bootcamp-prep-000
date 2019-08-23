// declare your functions here...
$(document).ready(paragraphSelector);
function paragraphSelector(){
return $('p');
}
$(document).ready(lastImageSelector);
function lastImageSelector(){
  return $("div img:last");
}

$(document).ready(ninjaBabySelector);
function ninjaBabySelector(){
  return $("#baby-ninja");
}

$(document).ready(divSelector);
function  divSelector(){
  return $(".pics");
  
}

$(document).ready(firstListItem);
function firstListItem(){
  return $("div li:first-child");
}