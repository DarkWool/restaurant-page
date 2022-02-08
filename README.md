# Restaurant Page Project, [view live](https://darkwool.github.io/restaurant-page/)

This was a project made for The Odin Project curriculum, our goal for this one was to make use of webpack and to generate all the pages dynamically with Javascript using modules.

## Specifications

1. Set up an HTML skeleton inside of dist/index.html with single `<div id="content">`.

1. Inside of src/index.js write a simple console.log or alert statement and then run npx webpack. Load up dist/index.html in a browser to make sure everything is working correctly.
1. Create a bare-bones homepage for a restaurant. Include an image, headline, and some copy about how wonderful the restaurant is. It’s okay to hard-code these into the HTML for now just to see how they look on the page.
1. Now remove those elements from the HTML (so leave only the `<html>, <body>, and <div id="content">` tags) and instead create them by using JavaScript only, e.g. by appending each new element to div#content once the page is first loaded. Since we’re all set up to write our code in multiple files, let’s write this initial page-load function inside of its own module and then import and call it inside of index.js.
1. Next, set up your restaurant site to use tabbed browsing to access the Contact and Menu pages. Look at the behavior of this student solution for visual inspiration.
    1. Put the contents of each ‘tab’ inside of its own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.
    1. Write the tab-switching logic inside of index.js. You should have event listeners for each tab that wipes out the current contents and then runs the correct ‘tab module’ to populate it again.

Check the original page of the assignment [here.](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/restaurant-page)

## Things that I learned / put in practice:

1. Differences between innerHTML and textContent.
1. How to use modules in Javascript.
1. Useful methods to append, remove, clone nodes.
1. How to dynamically generate the entire contents of a page.
1. This was my first time using webpack, learned a lot of things with this!
1. How to use and why a document fragment is a good idea.
