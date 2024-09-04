var balance, inputText, incomesArray, outcomesArray, validText;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


balance = [];
incomesArray = [];
outcomesArray = [];


document.getElementById('submit_button').addEventListener('click', (event) => {
  inputText = convertToNumber(document.getElementById('amount_input').value);
  balance.push(inputText);
  validText = '';
  if (inputText > '0') {
    let element_earnings_list = document.getElementById('earnings_list');
    let new_li = document.createElement('li');
    new_li.innerText = balance.slice(-1)[0];

    element_earnings_list.appendChild(new_li);
    let element_warning = document.getElementById('warning');
    element_warning.replaceChildren();
    incomesArray.unshift(inputText);
    let element_earnings_total = document.getElementById('earnings_total');
    element_earnings_total.innerText = incomesArray.reduce((a,b) => a+b, 0);
  } else if (inputText == false) {
    if (validText != 'Enter the valid amount') {
      let element_warning2 = document.getElementById('warning');
      element_warning2.innerText = 'Enter the valid amount';
      validText = 'Enter the valid amount';
    }
  } else if (inputText < '0') {
    let element_spent_list = document.getElementById('spent_list');
    let new_li2 = document.createElement('li');
    new_li2.innerText = balance.slice(-1)[0];

    element_spent_list.appendChild(new_li2);
    let element_warning3 = document.getElementById('warning');
    element_warning3.replaceChildren();
    outcomesArray.unshift(inputText);
    let element_spent_total = document.getElementById('spent_total');
    element_spent_total.innerText = outcomesArray.reduce((a,b) => a+b, 0);
  } else {
    if (validText != 'Enter the valid amount') {
      let element_warning4 = document.getElementById('warning');
      element_warning4.innerText = 'Enter the valid amount';
      validText = 'Enter the valid amount';
    }
  }
  let element_total_balance = document.getElementById('total_balance');
  element_total_balance.innerText = balance.reduce((a,b) => a+b, 0);

});