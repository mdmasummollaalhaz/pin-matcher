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