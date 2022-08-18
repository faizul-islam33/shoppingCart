function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    currentPhoneTotal = parseFloat(currentPhoneTotalString);
    return currentPhoneTotal;
}


function sexTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}


function calucateSubTotal() {

    // calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    sexTextElementValueById('sub-total', currentSubTotal);


    // calculate tax 
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    sexTextElementValueById('tax-amount', taxAmount);


    const finalAmount = currentSubTotal + taxAmount;
    sexTextElementValueById('final-total', finalAmount);

}
