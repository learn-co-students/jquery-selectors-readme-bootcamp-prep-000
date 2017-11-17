
function paragraphSelector()
{
  return document.querySelectorAll("p");
}

function lastImageSelector()
{
  let images = $("img");
  return images.slice(images.length - 1);
}

function ninjaBabySelector()
{
  let babyNinja = $("img#baby-ninja");
  return babyNinja;
}

function divSelector()
{
  let divs = $("div");
  return divs.slice(0, 2);
}

function firstListItem()
{
  let list = $("ul");
  let arr = [list[0].firstElementChild];
  return arr;
}
