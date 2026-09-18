/* ==========================================
   SpendWise JavaScript Foundation - Week 6
   ========================================== */

// 2. Store Application Data using variables
let userName = "MAANAF 7";
let monthlyBudget = 2500.00;

// Store expense records using arrays and objects
let expensesList = [
    { name: "Food & Dining", amount: 345.50 },
    { name: "Transport", amount: 120.00 },
    { name: "Rent & Housing", amount: 850.00 }
];

// 3. Collect User Input using JavaScript input prompt
let userInputName = prompt("Enter new expense name (e.g., Coffee):", "Coffee");
let userInputAmount = parseFloat(prompt("Enter expense amount ($):", "25.00"));

if (userInputName && !isNaN(userInputAmount)) {
    expensesList.push({
        name: userInputName,
        amount: userInputAmount
    });
}

// 5. Create Reusable Functions for calculations
function calculateTotalExpenses(expenses) {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }
    return total;
}

function calculateRemainingBalance(budget, totalExpenses) {
    return budget - totalExpenses;
}

// Perform calculations
let totalSpent = calculateTotalExpenses(expensesList);
let remainingBalance = calculateRemainingBalance(monthlyBudget, totalSpent);

// 6. Display Results in the Browser Console clearly labeled
console.log("=== SPENDWISE BUDGET REPORT ===");
console.log("User:", userName);
console.log("Total Monthly Budget: $" + monthlyBudget.toFixed(2));
console.log("Total Expenses: $" + totalSpent.toFixed(2));
console.log("Remaining Balance: $" + remainingBalance.toFixed(2));
console.log("Detailed Expenses List:", expensesList);
console.log("===============================");
