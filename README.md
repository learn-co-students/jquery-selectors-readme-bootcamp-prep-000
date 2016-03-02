# jQuery Selectors

## Objectives

+ Explain the purpose of a jQuery selector
+ Use a jQuery selector to select an HTML element

## Intro

Because jQuery was created as a way to make DOM manipulation quick and painless, a big part of that is correctly selecting the DOM node you want to work with. Thankfully, jQuery provides a seamless way to select the correct HTML, similar to CSS selectors.

You will be coding your solution in `index.html` and `js/selectors.js`. There are tests for this walk-through to make sure your code works as expected.

## Getting Everything Set Up

First things first, we need to link several files to `index.html`:

+ jQuery: `<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>`

+ Our JS file: `<script src="js/selectors.js"></script>`

All of these links should go inside the `head` tags. Order here matters, if we plan on using jQuery in `js/selectors.js` that file needs to be linked first. 


## Using Selectors

To set up a jQuery selector, you start with the `$`. Every line of jQuery code should start with the `$`. 

```js
$('selector-goes-here')
```

In between the quotation marks, you place your selector. Just like in CSS, there are many types of selectors. Let's dive into a few.

You'll want to have `index.html` open in the browser, with the console open.

### Element Selector

The element selector returns all HTML elements with that specific tag:

```js
$('img')
```

Because we have six images on our page, this selector will return an array of all six images.

### Class Selectors

You'll notice `index.html` has two `divs` with the class `pics`. Let's use jQuery selectors to select those two divs.

```js
$('.pics')
```

Just like in CSS, we use a `.` to denote a class. This code is selecting any HTML elements with the class `pics`, which in this case is two different divs.


### ID Selectors

The first gif on the page is a baby doing ninja moves. An ID selector works in much the same way as a class selector, you just replace the `.` with a `#`:

```js
$('#baby-ninja')
```

### Descendant Selector

Let's say we want to select all list items inside the `ul` tag. The `li` tags are descendants of the `ul` tag. We can use a jQuery descendant selector like this:

```js
$('ul li')
```

### First Child

Let's say we want to select the first `img` tag inside each `div`. We could do that with the first child selector. You set up this selector:

```js
$('parent-tag child-tag:first-child')
```

Because we want to select the first image inside a `div`, we put `div` first. Next comes the element we want to select, which is `img`, followed by `:first-child`:

```js
$('div img:first-child')
```

### Alt Tag Selector

Let's say we want to select an image that has a specific alt text. The second image on our page (or the beatles) has the alt text `"the beatles making faces"`. We can use that text to find the image:


```js
$("img[alt='the beatles making faces']")
```
## Last Selector

Let's say you want to select the last div on the page. You could use the last selector to do that

```js
$('div:last')
```


## Others

There are a tremendous number of other jQuery selectors, including but not limited to last-child, nth-type-of,  next sibling, input selector, and the list goes on. Take a look at the [MDN docs](https://api.jquery.com/category/selectors/) for a full list.

## Instructions

If you take a look at `js/selectors.js`, you'll notice we don't have a document ready. Because we're just going to practice writing selectors, and not using the selectors to do anything quite yet, we don't need to worry about browser interaction.

+ Write a function `paragraphSelector` that does not accept any parameters. The function should use an element selector to select the `p` tag in `index.html` and return that element.

+ Write a function `lastImageSelector` which does not accept any parameters. The function should use the last jQuery selector to return the last image in `index.html`.

+ Write a function `ninjaBabySelector` which does not accept any parameters. The function should use an ID selector to return the ninja baby image.

+ Write a function `divSelector` which does not accept any parameters. The function should use a class selector to return the two divs on the page.

+ Write a function `firstListItem` which does not accept any parameters. The function should use a first-child selector to return the first list item in the `ul` with the ID `pic-list`.

## Resources

+ [MDN jQuery Selectors](https://api.jquery.com/category/selectors/)

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/jquery-selectors-readme'>jQuery Selectors </a> on Learn.co and start learning to code for free.</p>
