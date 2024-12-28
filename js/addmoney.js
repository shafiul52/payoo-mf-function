document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();

    const addmoney =document.getElementById('input-add-money').value;
    
    
     const pinNumber = document.getElementById('input-pin-number').value;
    
    console.log(addmoney,pinNumber);
    
     // wrong way to verify pin 
     if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const  balanceNumber = parseFloat(balance);
        console.log(balance)

     }
     else{
        alert('Failed to add Money ')
     }


 })