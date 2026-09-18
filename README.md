# SpendWise - JavaScript Foundation (Week 6)

This project extends the SpendWise dashboard by integrating foundational JavaScript concepts to process budgeting data, handle user input, perform financial calculations, and organize logic with functions.

## Features & Implementation Details:

1. **What the SpendWise Project Does:**
   SpendWise is a personal finance dashboard designed to help users track monthly budgets, view structured financial categories, and process income versus expense calculations.

2. **JavaScript Concepts Implemented:**
   - Variables (`let`) and Data Types (Numbers, Strings, Arrays, Objects).
   - User Input Collection (`prompt()`).
   - Mathematical Calculations (Totals and remaining balances).
   - Reusable Functions and Control Flow (`for` loops, `if/else` statements).
   - Console Output Formatting (`console.log`).

3. **How Variables Are Being Used:**
   - `totalMonthlyBudget`: Stores the numerical value of the user's available budget.
   - `userName`: Stores the string representing the active user profile ("MAANAF 7").
   - `expensesList`: Stores an array of expense objects, where each object holds a category name and its associated numerical amount.

4. **How User Input Is Collected:**
   - The application utilizes JavaScript's `prompt()` dialog box inside `initSpendWiseApp()` to allow users to input or update their custom monthly budget interactively when the page loads.

5. **How Calculations Are Performed:**
   - Total expenses are calculated by iterating through the `expensesList` array and accumulating each expense amount.
   - The remaining balance is determined by subtracting total expenses from the `totalMonthlyBudget` using dedicated mathematical functions.

6. **How Functions Help Organize the Code:**
   - `calculateTotalExpenses(expenses)`: Encapsulates the logic for summing array items.
   - `calculateRemainingBalance(budget, totalExpenses)`: Separates subtraction logic.
   - `displayFinancialSummary(...)`: Handles formatting and output logging.
   - `initSpendWiseApp()`: Manages initialization and user input workflow.
