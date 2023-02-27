function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }
  
  console.log( randomInteger(1, 100) );