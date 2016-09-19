// declare your functions here...
function paragraphSelector()
{
  //uses element selector to select the p tags in index.html and returns elements
  return $("p");
}

function lastImageSelector()
{
  //uses last jQuery selector to return last image in index.HTML
  return $(`img:last`);

}

function ninjaBabySelector()
{
  //use an ID selector to return baby ninja image
  return $("#baby-ninja");
}

function divSelector()
{
  //uses a class selector to return the two divs
  return $(".pics");
}

function firstListItem()
{
  //uses first child selector to return first list item with id
  return $("#pic-list li:first-child");
}
