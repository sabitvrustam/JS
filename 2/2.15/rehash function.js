function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }

  //оператор ?

  function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }

  //оператор ||