// Initialize variables
let transactions = [];
let totalIncome = 0;
let totalExpense = 0;

// Get DOM elements
const incomeInput = document.getElementById('income');
const expenseName = document.getElementById('expenseName');
const expenseInput = document.getElementById('expense');
const transactionsTable = document.getElementById('transactions');
const totalIncomeOutput = document.getElementById('totalIncome');
const totalExpenseOutput = document.getElementById('totalExpense');
const balanceOutput = document.getElementById('balance');
const Hello = document.getElementById('hello');
// page2.js
window.addEventListener('DOMContentLoaded', () => {
    const id = sessionStorage.getItem('id');
    const displayIdElement = document.getElementById('displayId');
    displayIdElement.textContent = id;
});

// Add transaction to table and array
function addTransaction() {
    // Get input values

    const income = parseFloat(incomeInput.value);
    const expense = parseFloat(expenseInput.value);

    // Reset input fields
    incomeInput.value = '';
    expenseInput.value = '';

    console.log(expenseName.value);

    // Add transaction to array
    if (income > 0) {
        transactions.push({ type: 'Income', amount: income });
        totalIncome += income;
    } else if (expense > 0) {
        transactions.push({ type: expenseName.value, amount: expense });
        totalExpense += expense;
    }
    expenseName.value = '';
    // Update table and summary
    updateTable();
    updateSummary();
}

// Update transactions table
function updateTable() {
    // Clear table rows
    while (transactionsTable.rows.length > 1) {
        transactionsTable.deleteRow(1);
    }

    // Add rows for each transaction
    for (let i = 0; i < transactions.length; i++) {
        const row = transactionsTable.insertRow(i + 1);
        const typeCell = row.insertCell(0);
        const amountCell = row.insertCell(1);
        typeCell.innerHTML = transactions[i].type;
        amountCell.innerHTML = "₹" + transactions[i].amount.toFixed(2);

        // Add delete button to the second column
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            transactions.splice(i, 1);
            totalIncome -= transactions[i].type === 'Income' ? transactions[i].amount : 0;
            totalExpense -= transactions[i].type !== 'Income' ? transactions[i].amount : 0;
            updateTable();
            updateSummary();
        });
        amountCell.appendChild(deleteButton);
    }
}
deleteButton.addEventListener('click', () => trans.style.backgroundColor = 'red')
// Update summary section
function updateSummary() {
    // Recalculate total income and total expense
    totalIncome = transactions.reduce((acc, transaction) => {
        return transaction.type === 'Income' ? acc + transaction.amount : acc;
    }, 0);

    totalExpense = transactions.reduce((acc, transaction) => {
        return transaction.type !== 'Income' ? acc + transaction.amount : acc;
    }, 0);

    totalIncomeOutput.innerHTML = "₹ " + totalIncome.toFixed(2);
    totalExpenseOutput.innerHTML = "₹ " + totalExpense.toFixed(2);
    balanceOutput.innerHTML = "₹ " + (totalIncome - totalExpense).toFixed(2);
}

// Initialize table and summary
updateTable();
updateSummary();
const table = document.getElementById('transactions');



