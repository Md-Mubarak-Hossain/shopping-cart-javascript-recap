// console.log('utility.js');

// mobile price and case price function
function totalNumber(isIncrease, field, amount, elementId) {

    const textInputField = document.getElementById(field);
    const textInputFieldString = textInputField.value;
    const number = parseInt(textInputFieldString);
    let newNumber;
    if (isIncrease === true) {

        newNumber = number + 1;
    }
    else {
        newNumber = number - 1;
    }
    textInputField.value = newNumber;
    const totalPrice = newNumber * parseInt(amount);


    const textField = document.getElementById(elementId);
    textField.innerText = totalPrice;

}

function subTotal() {
    const mobilePriceField = document.getElementById('mobile-price');
    const mobilePriceString = mobilePriceField.innerText;
    const mobilePrice = parseFloat(mobilePriceString);


    const casePriceField = document.getElementById('case-price');
    const casePriceString = casePriceField.innerText;
    const casePrice = parseFloat(casePriceString);

    const subtotal = mobilePrice + casePrice;

    const subField = document.getElementById('subTotal');
    subField.innerText = subtotal;
    return subtotal;
}

function Tax() {
    const taxBalances = subTotal() * .01;
    const taxField = document.getElementById('tax');
    const taxBalance = parseFloat(taxBalances.toFixed(2));
    taxField.innerText = taxBalance;

    return taxBalance;
}

function Total() {
    const totalBalance = subTotal() + Tax();
    const totalField = document.getElementById('Total');
    totalField.innerText = totalBalance;
}