document.getElementById('btn-log').addEventListener('click',function(){
    // updated after deposit any amount
    const depositReq=document.getElementById('deposit-req');
    const depositAmount=depositReq.value;
    const deposited=parseFloat(depositAmount);
    
    depositReq.value='';
    if(isNaN(deposited)){
        alert('Please kindly provide valid number');
        return;
    }
    
    
    const depositInBank=document.getElementById('deposit-money');
    const depositPrevious=depositInBank.innerText;
    const depositTotalAmount=parseFloat(depositPrevious);
    
    const depositedUpdatedAmount=deposited+depositTotalAmount;
    depositInBank.innerText = depositedUpdatedAmount;  
    
// --------------------------added done--------------------------------------------------------

// --------------update new amount with previous amount--------------------------------------------
    const previousBalancedAmount=document.getElementById('balance-after-dw');
    const getBalancedAmount = previousBalancedAmount.innerText;
    
    const balancedConvert=parseFloat(getBalancedAmount);
    const newAmount=deposited+balancedConvert;

    previousBalancedAmount.innerHTML=newAmount;
    
    depositReq.value='';
})