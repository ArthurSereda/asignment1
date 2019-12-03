let money = prompt("Ваш бюджет на місяць?");
let time = prompt("Введіть дату в форматі YYYY-MM-DD");

let a = prompt("Введіть обов'язкову статтю розходів в цьому місяці"),
    b = prompt("В скільки обійдуться розходи?");
let c = alert(`Ваш бюджет на 1 день ${money/30}грн`);

let expences = {},
    income = [];
expences[b] = a;

let appData = {
    budget: money,
    timeData: time,
}


