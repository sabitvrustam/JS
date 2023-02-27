function ucFirst(string) {
    if (!string){
      return string;  
    } 
  
    return string[0].toUpperCase() + string.slice(1);
  }
  
  console.log( ucFirst("рустам") ); 
  //Рустам first character capitalized.js:9
