/* ==========================================
   SpendWise JavaScript Foundation - Week 6
   ========================================== */

// 2. Store Application Data (Variables & Data Types)
let totalMonthlyBudget = 2500.00; // Number data type representing total budget
let userName = "MAANAF 7";         // String data type representing user

// Array containing expense objects with name and amount properties
let expensesList = [
    { name: "Food & Dining", amount: 345.50 },
    { name: "Transport", amount: 120.00 },
    { name: "Rent & Housing", amount: 850.00 },
    { name: "Entertainment", amount: 75.20 },
    { name: "Utilities", amount: 190.40 }
];

// 5. Create Reusable Functions
// Function to calculate total expenses from an array
function calculateTotalExpenses(expenses) {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }
    return total;
}

// Function to calculate the remaining balance
function calculateRemainingBalance(budget, totalExpenses) {
    return budget - totalExpenses;
}

// Function to display results clearly labeled in the browser console
function displayFinancialSummary(user, budget, expenses) {
    console.log("========================================");
    console.log(`       SPENDWISE FINANCIAL REPORT       `);
    console.log(`       User: ${user}                    `);
    console.log("========================================");
    console.log(`Initial Budget: $${budget.toFixed(2)}`);
    console.log("----------------------------------------");
    console.log("Expense Categories Breakdown:");
    
    for (let i = 0; i < expenses.length; i++) {
        console.log(`  - ${expenses[i].name}: $${expenses[i].amount.toFixed(2)}`);
    }

    // 4. Perform Budget Calculations using reusable functions
    let totalSpent = calculateTotalExpenses(expenses);
    let remainingBalance = calculateRemainingBalance(budget, totalSpent);

    console.log("----------------------------------------");
    console.log(`Total Expenses: $${totalSpent.toFixed(2)}`);
    console.log(`Remaining Balance: $${remainingBalance.toFixed(2)}`);
    
    if (remainingBalance < 0) {
        console.log("ALERT: You have exceeded your budget!");
    } else {
        console.log("STATUS: Your budget is balanced and healthy.");
    }
    console.log("========================================");
}

// 3. Collect User Input via JavaScript Prompt (Interactive feature)
function initSpendWiseApp() {
    let userInput = prompt("Enter your total monthly budget amount (or click OK to keep default $2500):", totalMonthlyBudget);
    
    if (userInput !== null && userInput.trim() !== "") {
        let parsedInput = parseFloat(userInput);
        if (!isNaN(parsedInput)) {
            totalMonthlyBudget = parsedInput;
            console.log(`User updated budget to: $${totalMonthlyBudget.toFixed(2)}`);
        } else {
            console.log("Invalid input detected. Using default budget value.");
        }
    }

    // Display the calculated report in the console
    displayFinancialSummary(userName, totalMonthlyBudget, expensesList);
}

// Execute application logic on load
initSpendWiseApp();
