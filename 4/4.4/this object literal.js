function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  let user = makeUser();
  console.log( user.ref.name );
  //undefined this object literal.js:8
  //this внутри makeUser() равно undefined и вызывается как функция