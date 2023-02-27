let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  console.log(sum);
  //390 Sum of object properties.js:11