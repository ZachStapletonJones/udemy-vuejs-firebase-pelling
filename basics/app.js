new Vue ({
    el: '#app',
    data: {
        title: "Becoming a pro",
        name: "Jim",
        url: "https://www.youtube.com/watch?v=6n3pFFPSlW4",
        classes: ["one" , "two"]
    },
    methods: {
        greet(time){
            return `hello there, ${this.name}. Are you free ${time}`
        }
    }
})