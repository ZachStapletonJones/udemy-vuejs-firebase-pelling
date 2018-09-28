new Vue ({
    el: '#app',
    data: {
        title: "Becoming a pro",
        name: "Ryu",
        age: "25",
        showName: true,   
        showAge: true,
    },
    methods: {
        toggleName(){
            this.showName = !this.showName
        },
        toggleAge(){
            this.showAge = !this.showAge
        }
    }
})