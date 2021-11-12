var myAppList = new Vue({
    el: '#appList',
    data: {
        tasks: [
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Portare il cane fuori',
                done: false
            },
            {
                text: 'Fare il bucato',
                done: true
            },
            {
                text: 'Preparare la cena',
                done: false
            },
            {
                text: "Fare l'esercizio pomeridiano",
                done: true
            },
            {
                text: 'Comprare vestiti',
                done: false
            },
        ]
    },
    methods: {

    },
});

console.log("Eccomi sono todolist!");