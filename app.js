const expenseLabelInput = document.getElementById('expense-label');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');
let selectedExpense = null;

function addExpense() {
    const label = expenseLabelInput.value.trim();
    const amount = expenseAmountInput.value.trim();

    if (!label || !amount || isNaN(amount) || Number(amount) <= 0) {
        alert('Please enter a valid label and a positive amount.');
        return;
    }

    const listItem = document.createElement('li');

    
    const radioBtn = document.createElement('input');
    radioBtn.type = 'radio';
    radioBtn.name = 'selected-expense';
    radioBtn.onclick = () => {
        if (selectedExpense) {
            selectedExpense.classList.remove('selected');
        }
        selectedExpense = listItem;
        selectedExpense.classList.add('selected');
    };

    
    const expenseDetails = document.createElement('span');
    expenseDetails.textContent = `${label} - $${parseFloat(amount).toFixed(2)}`;

    
    const editIcon = document.createElement('i');
    editIcon.className = 'fas fa-edit';
    editIcon.onclick = () => editExpense(listItem, label, amount);

    
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-trash-alt';
    deleteIcon.onclick = () => deleteExpense(listItem);

    listItem.appendChild(radioBtn);
    listItem.appendChild(expenseDetails);
    listItem.appendChild(editIcon);
    listItem.appendChild(deleteIcon);
    expenseList.appendChild(listItem);

    expenseLabelInput.value = '';
    expenseAmountInput.value = '';
    selectedExpense = null;
}

function editExpense(listItem, oldLabel, oldAmount) {
    const label = prompt('Enter new label:', oldLabel);
    const amount = prompt('Enter new amount:', oldAmount);

    if (!label || !amount || isNaN(amount) || Number(amount) <= 0) {
        alert('Please enter a valid label and a positive amount.');
        return;
    }

    const expenseDetails = listItem.querySelector('span');
    expenseDetails.textContent = `${label} - $${parseFloat(amount).toFixed(2)}`;
}

function deleteExpense(listItem) {
    if (confirm('Are you sure you want to delete this expense?')) {
        
        listItem.classList.add('fade-out');

        setTimeout(() => {
            listItem.remove();
        }, 500); 
    }
}
