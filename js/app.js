function getPin(){
    const pin = Math.round(Math.random() * 1000000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('Got 3 digit and calling again', pin);
        
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    // console.log(pin);
    document.getElementById('display-pin').value = pin;
}


document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calsInput = document.getElementById('type-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calsInput.value = '';
        }
        
    }
    else{
    const previousNumber = calsInput.value;
    const newNumber = previousNumber + number;
    calsInput.value = newNumber;

    }
    
});


function verifyPin(){
    // console.log('clicked');
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('type-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');

    if(pin == typedNumbers){
        successMessage.style.display = 'block';
        failError.style.display = 'none';

        
    }
    else{
        failError.style.display = 'block';
        successMessage.style.display = 'none';
        
    }
    
}