document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawRequestField = document.getElementById('withdraw-amount-request');
    const requestAmount=withdrawRequestField.value ;
    const gettingAmount=parseFloat(requestAmount);

    withdrawRequestField.value='';
    
    if(isNaN(gettingAmount)){
        alert('please provide a valid number');
        return;
    }

    const withdrawnAmount=document.getElementById('withdrawn');
    const requestedWithdrawn=withdrawnAmount.innerText;
    const requestGettingAmount=parseFloat(requestedWithdrawn);

    withdrawRequestField.value='';
    
    const bankBalance = document.getElementById('balance-after-dw');
    const balanceAmount=bankBalance.innerText;
    const amountConvert=parseFloat(balanceAmount);
    if(gettingAmount>amountConvert){
        alert('baper bank ee eto taka nay');
        return;
    }
    
    const withdrawn=gettingAmount+requestGettingAmount;
    withdrawnAmount.innerText=withdrawn;

    const afterWithdrawnBalance=amountConvert-gettingAmount;

    bankBalance.innerText=afterWithdrawnBalance;
    


})

