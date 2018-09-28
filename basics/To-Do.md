
### Lesson 5 - Setting up Vue.js (the simple way)
- [x] copy script code from vue.js getting started page# development version was used in video
- [x] in basics (root) folder create index.html

> Create the tags:
> Typing the tag and pressing tab will create the correct syntax. adding a# will include an id. example div#app will create <div id=app></div>
- [x] html
- [x] head
- [x] title (Vue Basics)
- [x] body
- [x] h1 (Vue Basics)
- [x] div (id = "app")
>
- [x] paste script code in header, below title
> Referece to vue needs to be in header because all other js files will require it

- [x] create app.js in root folder
- [x] add script src to html body linking to app.js

### Lesson 6 - The Vue Instance
- [x] create new Vue instance with ({})
- [x] create element reference to div with app id tag (el: '#app')
> If the reference was a class, not an id, it would be '.app'

- [x] create h2 inside index.html app div
- [x] in Vue objects add data: with {}
- [x] include title with a string
- [x] add double curly braces within h2
> {{}} is the syntax that vue uses to identify when it needs to do something, needs to be told to look at it via the el in app js
- [x] output the title
- [x] save and test
> Alt+O opens live html preview in browser

### Lesson 7 - Methods
- [x] in app.js add methods to Vue
- [x] add greet() as a method
- [x] return `hello there'
>es6 template string is ``
>fully explained in bonus section of the course
- [x] add a paragraph within index div
- [x] include greet() within paragraph
- [x] add title to return function
>this. will refer to the current Vue instance
>${} outputs variables (es6 functionality, not Vue)
- [x] add name to data section, then reference it in methods
- [x] pass data from the html greet, and reference it in app.js
- [x] save and test

### Lesson 8 - Data Binding
- [x] add youtube url string to app data
- [x] add href within div and set url from app.js
> Need to use v-bind:href instead of {{}} for html attribute
> known as a directive (v-bind)
- [x] add new div with binded class
- [x] add class with array with 2 class names to app data
- [x] add style to header
- [x] define the color property of class one
- [x] define the text-decoration of class two
- [x] create text input field with vbind value of name
> Able to use : instead of v-bind: for same effect

### Lesson 9 - Events
- [x] clean out code from last time leaving el data title and methods
- [x] create wage property in data (with int)
- [x] create paragraph in app and call wage property
- [x] create Increase Wage button
- [x] add v-on: to button, specify click eqauls wage++ (add one)
- [x] add button that decreases wage
- [x] create change wage method that specifies an amount
- [x] referece this wage and increase amount
- [x] change app js wage to change wage function with number passed through it
- [x] create two new buttons with double click
- [x] make increment different from single click item

### Lesson 10 - The Event Object
- [x] clean out code from last time leaving el data title and methods
- [x] create button with click to log event (@ instead of v-on:)
- [x] add logEvent method (e)
- [x] add console log for e
- [x] view it in the browser console
- [x] create a new div with canvas class
- [x] style the canvas class with height width margin-top and background
- [x] attach mouse move event name and logCoords to div
- [x] add coords to data with x/y properties at 0
- [x] reference the coordinates in the div (two references for x and y)
- [x] create logCoords method
- [x] set x coord to equal e.offsetX
- [x] do the same for y

### Lesson 11 - Keyboard Events
- [x] clean code
- [x] add a name reference and call it in index
- [x] add input that listens to keyup event, name it updateName
- [x] add updateName to methods
- [x] console log the value of the element target
- [x] comment out console
- [x] grab the name property and set it equal to the value of the element target
- [x] try the input with keypress instead

### Lesson 12 - Two-way Data Binding (v-model)
- [x] remove 2nd input, updateName, and reference in html
- [x] use directive v-model in input type
- [x] associate the name property

### Lesson 13 - Modifiers
- [x] add empty button
- [x] add click event that has a function logMessage
- [x] add method for logMessage
- [x] add modifier to event click by adding a . and alt
- [x] create anchor href to google.com
- [x] add click event to href
- [x] add prevent modifier to click event

