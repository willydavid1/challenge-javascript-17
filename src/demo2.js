const { Deque } = require ('./deque.js');

const deque = new Deque();
console.log(deque.isEmpty());

deque.addFront('element 1');
deque.addFront('element 2');
deque.addFront('element 3');
console.log(deque.getItems());

deque.removeBack();
console.log(deque.getItems());

deque.addFront('element 4');
console.log(deque.getItems());

deque.removeFront();
console.log(deque.getItems());

deque.addFront('element 5');
console.log(deque.getItems());

// Deque o Cola doblemente terminada
// Es una estructura de datos lineal (igual que la cola) que permite insertar y eliminar elementos por ambos extremos
