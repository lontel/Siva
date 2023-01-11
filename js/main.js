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

let discountCode = document.querySelector('#discountCode')

if(discountCode){
    let data1 = localStorage.getItem('firstChoice')
    let data2 = localStorage.getItem('secondChoice')
    let data = `${data1}${data2} `
    console.log(data)
    discountCode.append(data)
}

let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')


window.onload = updateClock

let totalTime = 1200

function updateClock() {
    let min = Math.trunc(totalTime / 60)
    let sec = totalTime - min * 60
    
    min > 9 ? document.getElementById('minutes').innerHTML = min : document.getElementById('minutes').innerHTML =`0${min}`
    sec > 9 ? document.getElementById('seconds').innerHTML = sec : document.getElementById('seconds').innerHTML =`0${sec}`

    if(totalTime==0){
        console.log('Final')
    }else{
        totalTime-=1
    setTimeout("updateClock()",1000)
  }
}
