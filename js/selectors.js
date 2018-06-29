// declare your functions here...
$(document).ready(function() {

  function paragraphSelector() {
    return $('p')
  }

  function lastImageSelector() {
    return $('img:last')
  }

  function ninjaBabySelector() {
    return $('#baby-ninja')
  }

  function divSelector() {
    return $('div .pics')
  }

  function firstListItem() {
    return $('ul:first-child #piclist')
  }

  // for tags
  $('img')

  // for class
  $('.pics')

  // for ids
  $('#baby-ninja')

  // select first child of parent
  $('parent-tag child-tag:first-child')

  //select based on alt info
  $("img[alt='the beatles making faces']")

  // last selector, "last"
  $('div:last')
});
