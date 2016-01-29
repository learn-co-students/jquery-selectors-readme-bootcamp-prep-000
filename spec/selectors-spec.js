'use-strict';

describe('Selectors', function() {

  beforeEach(function() {
    var fixture = setFixtures('<body><div class="pics"><img id="baby-ninja" src="https://s3.amazonaws.com/after-school-assets/baby-ninja.gif" width="300px"><img alt="the beatles making faces" src="https://s3.amazonaws.com/after-school-assets/beatles.gif" width="300px"><img class="cat" src="https://s3.amazonaws.com/after-school-assets/cat.gif" width="300px"></div><p> cupcake bear claw danish chupa chups lemon drops. </p><div class="pics"><ul id="pic-list"><li><img src="https://s3.amazonaws.com/after-school-assets/awesome.jpg"></li><li><img src="https://s3.amazonaws.com/after-school-assets/cat-stretch.jpg"></li><li><img src="https://s3.amazonaws.com/after-school-assets/confused.gif"></li></ul></div></body>');  
  });

  it('#paragraphSelector should select all paragraphs', function() {
    expect(paragraphSelector().length).toBe(1);
    expect(paragraphSelector()[0].innerHTML).toEqual(" cupcake bear claw danish chupa chups lemon drops. ");
  });

  it('#lastImageSelector should return the last image', function() {
    expect(lastImageSelector().length).toBe(1);
    expect(lastImageSelector().attr('src')).toEqual("https://s3.amazonaws.com/after-school-assets/confused.gif");
  });

  it('#ninjaBabySelector should return the image of the ninja baby', function() {
    expect(ninjaBabySelector().length).toBe(1);
    expect(ninjaBabySelector().attr('src')).toEqual("https://s3.amazonaws.com/after-school-assets/baby-ninja.gif");
  });

  it('#divSelector should return two divs', function() {
    expect(divSelector().length).toBe(2);
    expect(divSelector()[0].tagName).toEqual("DIV");
  });

  it('#firstListItem should return the first list item in the unordered list', function() {
    expect(firstListItem().length).toBe(1);
    expect(firstListItem()[0].innerHTML).toEqual('<img src="https://s3.amazonaws.com/after-school-assets/awesome.jpg">');
  });

});