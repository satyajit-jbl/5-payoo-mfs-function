/**
 * Common shared Functions here
 */
// console.log('utility added')

// function getInputFieldValueByID(){
//     console.log('we will get value by id');

//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney;
// }


function getInputFieldValueByID(id){

    const inputValue = document.getElementById(id).value;
    return inputValue;
}