let login = prompt("Логин", "");
if (login === "Админ") {
  let password = prompt("Пароль", "");
  if (password === "Я главный") {
    alert("Здравствуйте Админ");
  } else if (password === "" || password === null) {
    alert("Отмена");
  } else {
    alert("Неверный пароль");
  }
} else if (login === "" || login === null) {
  alert("Отмена");
} else {
  alert("Я вас не знаю");
}