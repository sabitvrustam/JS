let message;

if (login == 'Сотрудник') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
}

// перделанное
let message1 = (login == "Сотрудник") ? "Привет" :
    (login == "Директор") ? "Здравствуйте" :
        (login == "") ? "Нет логина" : "";