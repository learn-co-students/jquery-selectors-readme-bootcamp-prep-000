// declare your functions here...
function paragraphSelector(){

  return $('p')
}


function lastImageSelector(){
  // var images = $('img')
  // for ( let i=0; i< images.length ;i++){
  //   if(i === images.length -1){
  //     return [images[i]];
  //   }
  //   
  // }
  return $("img:last")
}


function ninjaBabySelector(){

    return $("#baby-ninja")
}


function divSelector(){
    return $('.pics')
}


function firstListItem(){
return  $('#pic-list li:first-child')
  
    
}