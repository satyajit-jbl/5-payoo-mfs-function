document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();

        const cashOut = getInputFieldValueByID('input-cash-out');
        const cashOutNumber = parseFloat(cashOut);
        const pinNumber = getInputFieldValueByID('input-cash-out-pin-number');
        // console.log('inside the click handdler', cashOut, pinNumber)

        if(pinNumber === 1234){
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance - cashOut;
            // console.log('balance here', balance);
            document.getElementById('account-balance').innerText = newBalance;

        }
        else{
            alert('No money for you .. DGM')
        }
})