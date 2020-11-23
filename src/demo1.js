const { Queue } = require ('./queue.js');

const queue = new Queue();
console.log(queue.isEmpty());
console.log(queue.getItems(), queue.size());

queue.enqueue('element 1');
queue.enqueue('element 2');
queue.enqueue('element 3');
console.log(queue.toString(), queue.size());

console.log('remove', queue.dequeue());
console.log('remove', queue.dequeue());
console.log(queue.toString(), queue.size());

queue.enqueue('element 5');
queue.enqueue('element 6');
console.log(queue.toString(), queue.size());

// Es una estructura de datos que funciona igual que una cola de cine | el primero en entrar es el primero en salir de esa cola 
// conocida como estructura FIFO (First in, first out)
