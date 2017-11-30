# jQuery Selectors

## Objectives

+ Explain the purpose of a DOM selector
+ Use a DOM selector to select an HTML element

## Intro

Because jQuery was created as a way to make DOM manipulation quick and painless, a big part of that is correctly selecting the DOM node you want to work with. Thankfully, the browser provides a seamless way to select the correct HTML, similar to CSS selectors.

When we're using jQuery, we can wrap these selectors (which are just strings) in a call to `$` — for example, if we wanted all the `div`s on a page, we could call `$('div')`.

You will be coding your solution in `index.html` and `js/selectors.js`. There are tests for this walk-through to make sure your code works as expected.

## Getting Everything Set Up

Notice that several resources have been added to `index.html`:

+ jQuery: `<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>`
+ Our JS file: `<script src="js/selectors.js"></script>`

Both of these script tags are at the bottom of the `body`, which is where script tags should usually be loaded — especially those dealing with the DOM. The order in which the scripts are loaded matters: if we plan on using jQuery in `js/selectors.js`, the minified jQuery file needs to be loaded first.


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

You'll notice `index.html` has two `divs` with the class `pics`. Let's use selectors to select those two divs.

```js
$('.pics')
```

Just like in CSS, we use a `.` to denote a class. This code is selecting any HTML elements with the class `pics`, which in this case is two different divs.


### ID Selectors

The first gif on the page is a baby doing ninja moves. An ID selector works in much the same way as a class selector; you just replace the `.` with a `#`:

```js
$('#baby-ninja')
```

### Descendant Selector

Let's say we want to select all list items inside the `ul` tag. The `li` tags are descendants of the `ul` tag. We can use a descendant selector like this:

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

Let's say we want to select an image that has a specific alt text. The second image on our page (The Beatles) has the alt text `"the beatles making faces"`. We can use that text to find the image:


```js
$("img[alt='the beatles making faces']")
```
## Last Selector

Let's say you want to select the last div on the page. You could use the last selector to do that

```js
$('div:last')
```


## Others

There are a tremendous number of other DOM selectors, including but not limited to last-child, nth-type-of,  next sibling, input selector, and the list goes on. Take a look at the [MDN docs](https://api.jquery.com/category/selectors/) for a full list.

## Instructions

If you take a look at `js/selectors.js`, you'll notice we don't have a document ready. Because we're just going to practice writing selectors, and not using the selectors to do anything quite yet, we don't need to worry about browser interaction.

+ Write a function `paragraphSelector` that does not accept any parameters. The function should use an element selector to select the `p` tags in `index.html` and return those elements. (Note that we're using the plural because the selector will always return an array when used with tags, even if there's only one!)

+ Write a function `lastImageSelector` that does not accept any parameters. The function should use the last jQuery selector to return the last image in `index.html`.

+ Write a function `ninjaBabySelector` that does not accept any parameters. The function should use an ID selector to return the ninja baby image.

+ Write a function `divSelector` that does not accept any parameters. The function should use a class selector to return the two divs with the class `pics`.

+ Write a function `firstListItem` that does not accept any parameters. The function should use a first-child selector to return the first list item in the `ul` with the ID `pic-list`.

## Resources

+ [MDN jQuery Selectors](https://api.jquery.com/category/selectors/)
+ [First-Child selector](https://www.w3schools.com/cssref/sel_firstchild.asp)

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/jquery-selectors-readme'>jQuery Selectors</a> on Learn.co and start learning to code for free.</p>
