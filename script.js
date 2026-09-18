let totalMonthlyBudget = 2500.00;
let userName = "MAANAF 7";

let expensesList = [
    { name: "Food & Dining", amount: 345.50, category: "Expense" },
    { name: "Transport", amount: 120.00, category: "Expense" },
    { name: "Rent & Housing", amount: 850.00, category: "Fixed" },
    { name: "Entertainment", amount: 75.20, category: "Expense" },
    { name: "Utilities", amount: 190.40, category: "Bills" }
];

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

function updateDashboard() {
    const budgetEl = document.getElementById("summary-budget");
    const spentEl = document.getElementById("summary-spent");
    const balanceEl = document.getElementById("summary-balance");
    const alertEl = document.getElementById("budget-alert");
    const containerEl = document.getElementById("expenses-container");

    let totalSpent = calculateTotalExpenses(expensesList);
    let remainingBalance = calculateRemainingBalance(totalMonthlyBudget, totalSpent);

    budgetEl.textContent = `$${totalMonthlyBudget.toFixed(2)}`;
    spentEl.textContent = `$${totalSpent.toFixed(2)}`;
    balanceEl.textContent = `$${remainingBalance.toFixed(2)}`;

    containerEl.innerHTML = "";
    for (let i = 0; i < expensesList.length; i++) {
        let item = expensesList[i];
        let card = document.createElement("div");
        card.className = "card";
        card.setAttribute("tabindex", "0");
        card.innerHTML = `
            <div class="card-header">
                <h3>${item.name}</h3>
                <span class="badge">${item.category || 'Expense'}</span>
            </div>
            <div class="card-body">
                <p class="amount">$${item.amount.toFixed(2)}</p>
                <span class="sub-text">Recorded Expense</span>
            </div>
        `;
        containerEl.appendChild(card);
    }

    alertEl.style.display = "block";
    if (remainingBalance < 0) {
        alertEl.style.backgroundColor = "#fee2e2";
        alertEl.style.color = "#991b1b";
        alertEl.textContent = "ALERT: You have exceeded your monthly budget! Review your spending.";
    } else if (remainingBalance < (totalMonthlyBudget * 0.2)) {
        alertEl.style.backgroundColor = "#fef3c7";
        alertEl.style.color = "#92400e";
        alertEl.textContent = "WARNING: You are running low on funds (less than 20% remaining).";
    } else {
        alertEl.style.backgroundColor = "#dcfce7";
        alertEl.style.color = "#166534";
        alertEl.textContent = "STATUS: Your budget is balanced and healthy.";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    updateDashboard();

    const form = document.getElementById("expense-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let nameInput = document.getElementById("expense-name");
        let amountInput = document.getElementById("expense-amount");

        let nameVal = nameInput.value.trim();
        let amountVal = parseFloat(amountInput.value);

        if (nameVal !== "" && !isNaN(amountVal) && amountVal > 0) {
            expensesList.push({
                name: nameVal,
                amount: amountVal,
                category: "Custom"
            });

            nameInput.value = "";
            amountInput.value = "";

            updateDashboard();
        } else {
            alert("Please enter a valid expense name and a positive amount.");
        }
    });
});
