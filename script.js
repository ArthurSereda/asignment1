let money, time;

function start() {
  money = prompt("Ваш бюджет на місяць?");
  time = prompt("Введіть дату в форматі YYYY-MM-DD");

  while (isNaN(money) || money == "" || money == null) {
    money = prompt("Ваш бюджет на місяць?", "Введіть інформацію числами");
  }
}
start();

// MAIN OBJECT
let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  saving: true,
  chooseExpenses: () => {
    //записати витрати
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введіть обов'язковий список витрат цього місяця", ""),
        b = prompt("В скільки $$ обійдуться розходи?", "");
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
  },
  calcDayBudget: () => {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert(`Щоденні витрати: ${appData.moneyPerDay}`);
  },
  calcLevel: () => {
    if (appData.moneyPerDay < 100) {
      console.log("Мінімальний рівень достатку");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Середній рівень достатку");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Високий рівень достатку");
    } else {
      console.log("Відбулася якась помилка");
    }
  },
  checkSavings: () => {
    //накопичення депозиту
    let save = +prompt("Яка сума накопичень?", ""),
      percent = +prompt("Під який відсоток?", "");

    appData.monthIncome = (save / 100 / 12) * percent;

    alert(`Прибуток в місяць з вашого депозиту: ${appData.monthIncome}`);
  },
  chooseOptExpenses: () => {
    for (let i = 0; i < 3; i++) {
      let opt = prompt("Список необов'язкових витрат", "");
      appData.optionalExpenses[i] = opt;
    }
  },
  chooseIncome: () => {
    for(let i = 0; i < 1; i++) {
      let incomes = prompt("Що приносить вам додатковий дохід?");
      if(incomes != null && incomes != '' && isNaN(incomes)) {
        appData.income = incomes.split(",");
      } else {
        i -= 1;
      }
    }

  }



};//appData