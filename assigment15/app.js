let html_income = document.getElementById("income")
let html_expenditure = document.getElementById("expenditure")
let html_balance = document.getElementById("balance")
let html_savings = document.getElementById("savings")

function addincome() {
    let user_input = document.getElementById("input")
    let user_input_value = user_input.value;
    html_income.innerHTML = user_input_value;
    balanceAndsavings();

}
function addexpense() {
    let user_input = document.getElementById("input")
    let user_input_value = user_input.value;
    html_expenditure.innerHTML = user_input_value;
    balanceAndsavings()

}
function balanceAndsavings() {
    let income = parseInt(html_income.innerHTML);
    let expenditure = parseInt(html_expenditure.innerHTML)

    html_balance.innerHTML = income - expenditure;
    html_savings.innerHTML = income - expenditure;
}

function addTransaction() {
    let table = document.getElementById("transactionTable").getElementsByTagName('tbody')[0];
    let income = parseInt(html_income.innerHTML);
    let expenditure = parseInt(html_expenditure.innerHTML)
    let input_button = document.getElementById("inc")
    let currentDate = new Date().toLocaleDateString();
    let currentTime = new Date().toLocaleTimeString();
    let newRow = table.insertRow(table.rows.length);
    let balance = income - expenditure;

    let cell1 = newRow.insertCell(0)
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    if (input_button === document.activeElement) {
        cell1.innerHTML = "Income";
    } else {
        cell1.innerHTML = "Expenditure";
    }
    cell2.innerHTML = currentDate;
    cell3.innerHTML = currentTime;
    cell4.innerHTML = balance;
    
}