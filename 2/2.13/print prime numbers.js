let num = 10;
nextPrime:
for (let i = 2; i <= num; i++) { 
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }
 console.log( i ); 
}
//2
//print prime numbers.js:7
//3
//print prime numbers.js:7
//5
//print prime numbers.js:7
//7