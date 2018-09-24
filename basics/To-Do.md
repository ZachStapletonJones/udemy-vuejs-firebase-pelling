
### Lesson 5 - Setting up Vue.js (the simple way)
    - [x] - copy script code from vue.js getting started page
    <!-- development version was used in video -->
    - [x] - in basics (root) folder create index.html that includes the tags:
    <!-- typing the tag and pressing tab will create the correct syntax. adding a # will include an id. example div#app will create <div id=app></div> -->
        - [x] - html
            - [x] - head
                - [x] - title (Vue Basics)
            - [x] - body
                - [x] - h1 (Vue Basics)
                - [x] - div (id = "app")
    - [x] - paste script code in header, below title
    <!-- referece to vue needs to be in header because all other js files will require it -->
    - [x] - create app.js in root folder
    - [x] - add script src to html body linking to app.js

### Lesson 6 - The Vue Instance
    - [x] - create new Vue instance with ({})
        - [x] - create element reference to div with app id tag (el: '#app')
        <!-- if the reference was a class, not an id, it would be '.app' -->
    - [x] - create h2 inside index.html app div
    - [x] - in Vue objects add data: with {}
        - [x] - include title with a string
    - [x] - add double curly braces within h2
    <!-- {{}} is the syntax that vue uses to identify when it needs to do something, needs to be told to look at it via the el in app js -->
        - [x] - output the title
    - [x] - save and test
    <!-- alt+o opens live html preview in browser -->
