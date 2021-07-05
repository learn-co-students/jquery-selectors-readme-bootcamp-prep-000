// declare your functions here...
function paragraphSelector()
{
  return $('p')
}

function lastImageSelector()
{
  return $('img:last')
}

function ninjaBabySelector()
{
  return $('#baby-ninja')
}

function divSelector()
{
  return $('.pics')
}

function firstListItem()
{
  console.log($('ul li:first-child img:first-child')[0].src);
  //console.log($('ul li img:first-child'));
  return $('ul li:first-child')
}
