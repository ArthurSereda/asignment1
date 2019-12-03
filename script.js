let money = prompt("Ваш бюджет на місяць?");
let time = prompt("Введіть дату в форматі YYYY-MM-DD");

let appData = {
    budget: money,
    expences: {},
    optionalExpences: {},
    income: [],
    timeData: time,
    saving: false
};

let a1 = prompt("Введіть обов'язкову статтю розходів в цьому місяці"),
    a2 = prompt("В скільки обійдуться розходи?"),
    a3 = prompt("Введіть обов'язкову статтю розходів в цьому місяці"),
    a4 = prompt("В скільки обійдуться розходи?");

appData.expences.a1 = a2;
appData.expences.a3 = a4;

alert(appData.budget / 30);

