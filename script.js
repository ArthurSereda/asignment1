let money = prompt("Ваш бюджет на місяць?");
let time = prompt("Введіть дату в форматі YYYY-MM-DD");

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  saving: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Введіть обов'язковий список витрат цього місяця"),
    b = prompt("В скільки $$ обійдуться розходи?");
      if(typeof(a) === "string" &&
        typeof(a) != null &&
        a != "" &&
        a.length < 50 &&
        typeof(b) != null &&
        typeof(b) === "string" &&
        b != "") {
          appData.expenses[a] = b;
        } else {
          i -= 1;
        }
}

appData.moneyPerDay = Math.round(appData.budget / 30);

alert(`Щоденні витрати: ${appData.moneyPerDay}`);

if (appData.moneyPerDay < 100) {
  console.log("Мінімальний рівень достатку");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Середній рівень достатку");
} else if (appData.moneyPerDay > 2000) {
  console.log("Високий рівень достатку");
} else {
  console.log("Відбулася якась помилка");
}
