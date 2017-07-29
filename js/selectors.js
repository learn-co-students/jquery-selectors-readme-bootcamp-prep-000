  // <script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>

function paragraphSelector(){return $('p')}
function lastImageSelector(){return $('img:last')}
function ninjaBabySelector(){ return $('#baby-ninja')}
function divSelector(){return $('.pics')}

// Write a function firstListItem that does not accept any parameters.
// The function should use a first-child selector to return the first list item in the ul with the ID pic-list.
function firstListItem(){
// console.log($('#pic-list:first-child'))
  return $('#pic-list li:first-child')
}
// firstListItem()
