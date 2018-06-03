// declare your functions here...

function paragraphSelector(){
    return $("p");
}

function lastImageSelector(){
    return $("img:last");
}

function ninjaBabySelector(){
    return $("#baby-ninja");
}
//kinda guessed
//function divSelector(){
//return $("div .pics")+$("div .pics");};
//read sections again of readme: first child and 

function divSelector(){
  return $(".pics");
}

//function firstListItem(){
//return $("ul #pic-last: nth-child(1)");}

//function firstListItem(){return $("#pic-list ul:first-child");}

function firstListItem (){
  return $("#pic-list li:first-child");
}
