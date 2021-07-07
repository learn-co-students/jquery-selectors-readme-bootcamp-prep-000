function paragraphSelectors(){
  return $("p");
}


function lastImageSelector(){
  return $("img:last");
}

function ninjaBabySelector(){
  return $("#baby-ninja");
}

function divSelector(){
  return $(".pic:nth-child(1)")+$(".pic:nth-child(2)");
} 

function firstListItem(){
  return $("#pic-list li:first-child");
}

console.log(divSelector());