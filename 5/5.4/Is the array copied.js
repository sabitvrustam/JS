let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
console.log( fruits.length ); // выведет колличество элементов в массиве равный 4
console.log(fruits);// (4) ['Яблоки', 'Груша', 'Апельсин', 'Банан']