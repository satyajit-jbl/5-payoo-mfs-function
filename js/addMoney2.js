document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueByID('input-add-money');
    const pinNumber = getInputFieldValueByID('input-pin-number');
    
    //wrong way to verify
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;
        // console.log(newBalance);
;    }
    else{
        alert('fail to add money')
    }
})