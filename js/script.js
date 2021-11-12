/* TODOLIST
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
*/
var myAppList = new Vue({
    el: '#appList',
    data: {
        newTask: {
            text: '',
            done: false
        },
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
        addTask() {
            if (this.newTask.text.length > 3) {
                this.tasks.push(this.newTask);
                this.newTask = {};
            }
        },
        deleteTask(index) {
            this.tasks.splice(index, 1)
        }
    },
});

console.log("Eccomi sono todolist!");