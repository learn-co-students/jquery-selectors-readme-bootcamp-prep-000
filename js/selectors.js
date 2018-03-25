// declare your functions here...

function paragraphSelector() {
  $(document).ready(function() {
    output = $('p');
  });
  return output;
}

function lastImageSelector() {
  $(document).ready(function() {
    output = $('img:last');
  });
  return output;
}

function ninjaBabySelector() {
  $(document).ready(function() {
    output = $('#baby-ninja');
  });
  return output;
}

function divSelector() {
  $(document).ready(function() {
    output = $('.pics');
  });
  return output;
}

function firstListItem() {
  $(document).ready(function() {
    output = $('#pic-list li:first-child');
  });
  return output;
}

