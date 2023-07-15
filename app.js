let firstContainer=document.getElementById('submit-container');
let secondContainer=document.getElementById('thank-you-container');
let submitButton=document.getElementById('submit-button');
let selectedNumber=document.getElementById('selected-num')

submitButton.addEventListener('click',ThankYou)
function ThankYou(){
    firstContainer.style.display="none"
    secondContainer.style.display="grid"     
}
function changeStyleAndContent(e){
    e.style.backgroundColor='hsl(216, 12%, 54%)'
    e.style.color='white'
    selectedNumber.textContent=e.textContent
};