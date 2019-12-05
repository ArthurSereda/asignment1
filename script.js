let money, time;

function start() {
  money = prompt("Ваш бюджет на місяць?");
  time = prompt("Введіть дату в форматі YYYY-MM-DD");

  while (isNaN(money) || money == "" || money == null) {
    money = prompt("Ваш бюджет на місяць?", "Введіть інформацію числами");
  }
}
start();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  saving: true
};

function chooseExpenses() { //введення списку та витрати грошей
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введіть обов'язковий список витрат цього місяця"),
      b = prompt("В скільки $$ обійдуться розходи?");
    if (
      typeof a === "string" &&
      typeof a != null &&
      a != "" &&
      a.length < 50 &&
      typeof b != null &&
      typeof b === "string" &&
      b != ""
    ) {
      appData.expenses[a] = b;
    } else {
      i -= 1;
    }
  }
}
chooseExpenses();

function calcDayBudget() { //бюджет на 1 день
  appData.moneyPerDay = (appData.budget / 30).toFixed(2);
  alert(`Щоденні витрати: ${appData.moneyPerDay}`);
}
calcDayBudget();

function calcLevel() { //умовне вираховування рівня достатку
  if (appData.moneyPerDay < 100) {
    console.log("Мінімальний рівень достатку");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Середній рівень достатку");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Високий рівень достатку");
  } else {
    console.log("Відбулася якась помилка");
  }
}
calcLevel();

function checkSavings() {   //накопичення з депозиту
  if (appData.saving == true) {
    let save = +prompt("Яка сума накопичень?"),
      percent = +prompt("Під який відсоток?");

    appData.monthIncome = (save / 100 / 12) * percent;

    alert(`Прибуток в місяць з вашого депозиту: ${appData.monthIncome}`);
  }
}
checkSavings();
function chooseOptExpenses() {   //необов'язкові витрати
  for(let i = 1; i < 4; i++) {
    let optExpenses = prompt("Статья необязательных расходов", "Отмените для выхода из цыкла");
    if(optExpenses != "" &&
    optExpenses.length < 50) {
      appData.optionalExpenses[i] = optExpenses;
    } else if(optExpenses == null) {
      break;
    }
  }
}

chooseOptExpenses();
