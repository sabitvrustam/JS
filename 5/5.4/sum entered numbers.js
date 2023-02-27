function sumInput() {
    let n = [];
    while (true) {
      let value = prompt("Введите число", 0);
      if (value === "" || value === null || !isFinite(value)) break;
      n.push(+value);
    }
    let sum = 0;
    for (let number of n) {
      sum += number;
    }
    return sum;
  }
  
  console.log(sumInput());