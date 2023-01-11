const buttonOne = document.querySelector('#firstBtn')
if(buttonOne){
    buttonOne.onclick = function () {
        localStorage.setItem('firstChoice', firstChoice)
    }
}

const buttonTwo = document.querySelector('#secondBtn')
if(buttonTwo){
    buttonTwo.onclick = function () {
        localStorage.setItem('secondChoice', secondChoice)
    }
}

const handleFirstInput =  document.querySelectorAll('.firstChoice')

let firstChoice = ''
handleFirstInput.forEach(input=>{
    input.addEventListener('click', (event) => {
        firstChoice = event.path[0].value
        console.log(firstChoice)
    })
})

const handleSecondInput =  document.querySelectorAll('.secondChoice')

let secondChoice = ''
handleSecondInput.forEach(input=>{
    input.addEventListener('click', (event) => {
            secondChoice = event.path[0].value
            console.log(secondChoice)
        })
    })



        
        

