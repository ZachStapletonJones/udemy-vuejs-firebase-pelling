new Vue ({
    el: '#app',
    data: {
        title: "Becoming a pro",
        name: "Jim"
    },
    methods: {
        greet(time){
            return `hello there, ${this.name}. Are you free ${time}`
        }
    }
})