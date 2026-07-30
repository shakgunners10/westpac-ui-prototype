// Savings calculator
// Calculates a projected balance based on starting balance, monthly deposits,
// annual interest rate, and number of years — using monthly compounding.

document.addEventListener('DOMContentLoaded', function () {
  const calculateBtn = document.getElementById('calculateBtn');

  // Only run on pages that actually have the calculator (guards against
  // console errors if this script is ever linked on a page without it)
  if (!calculateBtn) return;

  const startingBalanceInput = document.getElementById('startingBalance');
  const monthlyDepositInput = document.getElementById('monthlyDeposit');
  const interestRateInput = document.getElementById('interestRate');
  const yearsInput = document.getElementById('years');
  const calcError = document.getElementById('calcError');
  const calcResult = document.getElementById('calcResult');

  calculateBtn.addEventListener('click', function () {
    // Reset previous output before recalculating
    calcError.textContent = '';
    calcResult.textContent = '';

    const startingBalance = parseFloat(startingBalanceInput.value);
    const monthlyDeposit = parseFloat(monthlyDepositInput.value);
    const annualRate = parseFloat(interestRateInput.value);
    const years = parseInt(yearsInput.value, 10);

    // Validate all fields are actual numbers and within sensible ranges
    if (
      isNaN(startingBalance) || startingBalance < 0 ||
      isNaN(monthlyDeposit) || monthlyDeposit < 0 ||
      isNaN(annualRate) || annualRate < 0 ||
      isNaN(years) || years < 1
    ) {
      calcError.textContent = 'Please fill in all fields with valid positive numbers.';
      return;
    }

    // Convert annual rate to a monthly rate, and years to total months
    const monthlyRate = annualRate / 100 / 12;
    const totalMonths = years * 12;

    // Simulate month-by-month compounding:
    // each month, interest is applied to the current balance,
    // then the monthly deposit is added.
    let balance = startingBalance;
    for (let i = 0; i < totalMonths; i++) {
      balance += balance * monthlyRate;
      balance += monthlyDeposit;
    }

    const totalDeposited = startingBalance + (monthlyDeposit * totalMonths);
    const interestEarned = balance - totalDeposited;

    calcResult.innerHTML =
      `Projected balance after ${years} year${years > 1 ? 's' : ''}: <strong>$${balance.toFixed(2)}</strong><br>` +
      `Total interest earned: <strong>$${interestEarned.toFixed(2)}</strong>`;
  });
});