function topSalary(salaries) {
    let max = 0;
    let maxPrice = null;
    for(const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxPrice = name;
      }
    }
    return maxPrice;
  }

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  console.log(topSalary(salaries)); //pete