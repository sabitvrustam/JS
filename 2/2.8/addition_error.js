// неправильный вариант
let aErr = prompt("Первое число?", 1);
let bErr = prompt("Второе число?", 2);
alert(aErr + bErr); // 12

//правильный вариант
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
console.log(+a + +b);// 3