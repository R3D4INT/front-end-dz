// // 2 Варіант через обєкти і функції
// // Створюємо методи об'єкта для обробки логіну, пароля та перевірки доступу
// function promptLogin() {
//     return prompt("Введіть логін1 :");
// }

// function promptPassword() {
//     return prompt("Введіть пароль: ");
// }

// function checkLogin(log, login) {
//     return log === login;
// }

// function checkPassword(inputPassword, password) {
//     return inputPassword === password;
// }

// const login = "admin";
// const password = "12345";
// let isAdmin;

// const user = {};
// // У циклі здійснюється перевірка логіну, пароля та визначення статусу адміністратора
// while (true) {
//     let log = promptLogin();

//     if (checkLogin(log, login)) {
//         let inputPassword = promptPassword();
//         if (checkPassword(inputPassword, password)) {
//             isAdmin = true;
//             user.login = login;
//             user.password = password;
//             user.isAdmin = isAdmin;
//             alert('Ласкаво просимо!');
//             break;
//         } else {
//             alert("Невірний пароль");
//         }
//     } else if (log === null) {
//         isAdmin = false;
//         user.login = log;
//         user.isAdmin = isAdmin;
//         alert("Ласкаво просимо!");
//         break;
//     } else {
//         alert("Доступ заборонено");
//     }
// // }

// console.log("isAdmin:", isAdmin);
// console.log("user:", user);

const tour = {
    name: "Mystical Bali Adventure" ,
    description: "Explore the enchanting island of Bali, with its lush jungles, vibrant culture, and ancient temples. Visit the iconic Tanah Lot temple, hike to the summit of Mount Batur, and unwind on the pristine beaches of Nusa Dua.",
    price: 650,
    duration: 56
};

tour.displayinfo = function () {
    console.log("tour:", tour);    
}

tour.displayinfo();

function promptTravelers() {
    return prompt("Введіть кількість мандрівників:");
}

while (true) {
    let colvo = promptTravelers();
    function calculateTotalCost (tour, colvo) {
        let resultPrice = colvo * tour.price;
        console.log ("totalPrice:", resultPrice);
   }

    if (colvo > 0) {
        calculateTotalCost(tour, colvo); 
        break;                   
    } else {
        alert("Кількість мандрівників має бути додатнією")
    }
}

