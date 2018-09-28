new Vue ({
    el: '#app',
    data: {
        title: "Becoming a pro",
        name: "Ryu",
        age: "25",
        showName: true,   
        showAge: true,
        items: ["blue", "white", "green"],
        ninjas: [
            {name:"Ryu", age:"20", belt:"black"},
            {name:"Ken", age:"24", belt:"green"},
            {name:"Yam", age:"28", belt:"blue"},
        ]
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