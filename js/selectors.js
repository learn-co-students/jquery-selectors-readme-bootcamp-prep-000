/*
$('img')
$('.pics')
$('#baby-ninja')
$('ul li')
$('div img:first-child')
$("img[alt='the beatles making faces']")
$('div:last')
*/

function paragraphSelector() {
var p = []
p = $('p')
  return p
}

function lastImageSelector() {
  var img = []
  img = $('img:last')
  return img
}

function ninjaBabySelector() {
  var nin = []
  nin = $('#baby-ninja')
  return nin
}

function divSelector() {
  div = []
  div = $('.pics')
  return div
}

function firstListItem() {
  var list = []
  list = $('div ul li:first-child')
  return list
}
