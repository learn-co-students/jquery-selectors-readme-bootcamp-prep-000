describe('Selectors', () => {
  it('paragraphSelector() should select all paragraphs', function() {
    expect(paragraphSelector().length).toBe(1);
    expect(paragraphSelector()[0].innerHTML).toEqual($('p')[0].innerHTML);
  });

  it('lastImageSelector() should return the last image', function() {
    expect(lastImageSelector().length).toBe(1);
    expect(lastImageSelector().attr('src')).toEqual("https://s3.amazonaws.com/after-school-assets/confused.gif");
  });

  it('ninjaBabySelector() should return the image of the ninja baby', function() {
    expect(ninjaBabySelector().length).toBe(1);
    expect(ninjaBabySelector().attr('src')).toEqual("https://s3.amazonaws.com/after-school-assets/baby-ninja.gif");
  });

  it('divSelector() should return two divs', function() {
    expect(divSelector().length).toBe(2);
    expect(divSelector()[0].tagName).toEqual("DIV");
  });

  it('firstListItem() should return the first list item in the unordered list', function() {
    expect(firstListItem().length).toBe(1);
    expect(firstListItem()[0].children[0].src).toEqual('https://s3.amazonaws.com/after-school-assets/awesome.jpg');
  });

});