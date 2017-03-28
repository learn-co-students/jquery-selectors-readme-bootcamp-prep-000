// declare your functions here...
function paragraphSelector(){

  return $('p')
}


function lastImageSelector(){
  var images = $('img')
  for ( let i=0; i< images.length ;i++){
    if(i === images.length -1){
      return [images[i]];
    }
    
  }
  return null;
}