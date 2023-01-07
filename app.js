const incomeInput = document.getElementById("income-input");
const foodInput = document.getElementById("food-input");
const rentInput = document.getElementById("rent-input");
const clothesInput = document.getElementById("clothes-input");
const totalExpenses = document.getElementById("total-expenses-text");
const balance = document.getElementById("balance-text");
const saveInput = document.getElementById("save-input");

const savingAmount = document.getElementById("saving-amount");
const remainingBlance = document.getElementById("remaining-blance");

document.getElementById("calculate-btn").addEventListener("click", function () {
  const foodInputValue = parseFloat(foodInput.value);
  const rentInputValue = parseFloat(rentInput.value);
  const clothesInputValue = parseFloat(clothesInput.value);
  const totalCoast = foodInputValue + rentInputValue + clothesInputValue;

  const totalExpensesText = (totalExpenses.innerText = totalCoast);

  // incomeInput
  const incomeInputValue = parseFloat(incomeInput.value);

  // income and expenses minus
  const minusExpensesAndIncome = incomeInputValue - totalExpensesText;

  // balamce text
  balance.innerText = minusExpensesAndIncome;
});

// save money
document.querySelector(".save-btn").addEventListener("click", function () {
  const saveInputValue = saveInput.value;
  const incomeInputValue = parseFloat(incomeInput.value);
  const saveMoney = incomeInputValue / saveInputValue;
  const save = (savingAmount.innerText = saveMoney);

  //
  const balanceText = parseFloat(balance.innerText) - save;
  remainingBlance.innerText = balanceText;
});
