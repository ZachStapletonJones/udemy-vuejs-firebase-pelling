new Vue ({
    el: '#app',
    data: {
        title: "Becoming a pro",
        wage: 10,
    },
    methods: {
        changeWage(amount){
            this.wage += amount;
        }
    }
})