document.getElementById('btn-log').addEventListener('click',function(){
    const userEmail = document.getElementById('email-id');
    const emailId = userEmail.value ;
    const userPassword=document.getElementById('user-pass');
    const passwordInput=userPassword.value;
    if(emailId==='sharukh@khan.com' && passwordInput==='123456789'){
        window.location.href='bankInside.html'
    }
    else{
        alert('kindly type write username and password')
    }
    


s

})