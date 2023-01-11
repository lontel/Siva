
const button = document.querySelector('#firstBtn');
button.onclick = function () {
        alert('butttttonnnn')
    };


const handleFirstInput =  document.querySelectorAll('.firstChoice');


let firstChoice = []
handleFirstInput.forEach(input=>{
    input.addEventListener('click', (event) => {
        if(firstChoice.length === 0){
            firstChoice.push(event.path[0].value)
        console.log(firstChoice)
        }else{
            firstChoice = []
            firstChoice.push(event.path[0].value)
        console.log(firstChoice)
        }
    })
})

const handleSecondInput =  document.querySelectorAll('.secondChoice');


let secondChoice = []
handleSecondInput.forEach(input=>{
    input.addEventListener('click', (event) => {
        if(secondChoice.length === 0){
            secondChoice.push(event.path[0].value)
        console.log(secondChoice)
        }else{
            secondChoice = []
            secondChoice.push(event.path[0].value)
        console.log(secondChoice)
        }
    })
})






