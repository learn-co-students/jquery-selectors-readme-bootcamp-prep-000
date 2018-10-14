// declare your functions here...

function paragraphSelector(){
  return($('p')); 
}

function lastImageSelector(){
 return( $('img:last') ); 
}

function ninjaBabySelector(){
  return($('#baby-ninja'))
}

function divSelector(){
  return ( $('.pics') )   //removed '.pics div'
}

function firstListItem(){
  return( $('#pic-list li:first-child' ));
  
  // tried  'ul li #pic-list:first-child '
  // tried  'li #pic-list:first-child '
  // tried  'ul #pic-list:first-child '
  // tried  'ul li:first-child #pic-list'
  // tried  '$ul'  ,($('li #pic-list:first-child' 
  // tried   $('ul:first-child'), $('#pic-list') );
}

