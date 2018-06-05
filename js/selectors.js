// declare your functions here...

var results = []

function paragraphSelector(){
  var x= $('p');
  console.log(x);
  results.push(x);
  return $(x);
}

function lastImageSelector(){
  var x = $('img:last');
  console.log(x);
  return x;
};

function ninjaBabySelector(){
  var x = $('img#baby-ninja');
  console.log(x);
  return x;
};

function divSelector(){
  var x = $('.pics');
  console.log(x);
  return x;
};

function firstListItem(){
  var x = $('ul#pic-list li:first-child');
  console.log(x);
  return x;
};

//paragraphSelector()
//lastImageSelector()
//ninjaBabySelector()
//divSelector()
//firstListItem()
