function copySorted(arr) {
    return arr.slice().sort();
  }
  let arr = ["HTML", "JavaScript", "CSS"];
  let sorted = copySorted(arr);
  
  console.log(sorted);//(3) ['CSS', 'HTML', 'JavaScript']
  console.log(arr);//(3) ['HTML', 'JavaScript', 'CSS']