function getDateAgo(date, days) {
    let date1 = new Date(date);
    date1.setDate(date.getDate() - days);
    return date1.getDate();
  }
  let date = new Date(2015, 0, 2);
  
  console.log(getDateAgo(date, 1)); // 1
  console.log(getDateAgo(date, 2)); // 31
  console.log(getDateAgo(date, 365)); // 2