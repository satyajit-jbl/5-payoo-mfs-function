/**
 * how to get a number from an inpur field
 * 1. create a variable
 * right side document.getElementByID(id)
 * 3. .value
 * 4. parseFloat
 */
// console.log('add money added');
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    // console.log('add money button clicked')

    // getInputFieldValueByID();
    // const addMoney = getInputFieldValueByID();
    // console.log('add money value', addMoney);
    // const addMoney = document.getElementById('input-add-money').value 
    // const addMoneyNumber = parseFloat(addMoney);

    const addMoney = getInputFieldValueByID('input-add-money');
    const pinNumber = getInputFieldValueByID('input-pin-number');
    // console.log('add money with parameter', addMoney, pinNumber)



})