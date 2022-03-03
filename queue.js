class Queue {
    constructor(){
        this.data = []
}

enqueue(item){
    this.data.push(item);
    console.log(`${item} chegou na fila`);
};

dequeue(item){
    const item = this.data.shift()
    console.log(`${item} saiu da fila`)
    };
}

const fila = new Queue();
fila.enqueue('mariana');
fila.dequeue('mariana');