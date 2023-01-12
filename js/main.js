// como el primer elemento es preseleccionado guardamos su valor al pricipio
if (!localStorage.getItem('firstChoice')) {
    localStorage.setItem('firstChoice', '2016')
}

if (!localStorage.getItem('secondChoice')) {
    localStorage.setItem('secondChoice', 'ÍNVJ')
}

const buttonOne = document.querySelector('#firstBtn')
if (buttonOne) {
    buttonOne.onclick = function () {
        localStorage.setItem('firstChoice', firstChoice)
    }
}

const buttonTwo = document.querySelector('#secondBtn')
if (buttonTwo) {
    buttonTwo.onclick = function () {
        localStorage.setItem('secondChoice', secondChoice)
    }
}

const handleFirstInput =  document.querySelectorAll('.firstChoice')

let firstChoice = ''
handleFirstInput.forEach(input => {
    input.addEventListener('click', (event) => {
        document.getElementsByClassName('option-container-selected')[0]?.classList
        .remove('option-container-selected')
        event.target.parentElement.parentElement.classList.add('option-container-selected')
        firstChoice = event.path[0].value
    })
})

const handleSecondInput =  document.querySelectorAll('.secondChoice')

let secondChoice = ''
handleSecondInput.forEach(input => {
    input.addEventListener('click', (event) => {
        document.getElementsByClassName('option-container-selected')[0]?.classList
        .remove('option-container-selected')
        event.target.parentElement.parentElement.classList.add('option-container-selected')
        secondChoice = event.path[0].value
    })
})

let discountCode = document.querySelector('#discount-code')

function sumOfLastTwo (str) {
  let lastTwoArr = str.split('').slice(2)
  return lastTwoArr.reduce((acc, prev) => {
    return Number(acc) + Number(prev)
  }, 0) 
}

if (discountCode) {
    let data1 = localStorage.getItem('firstChoice')
    let sumOfTwo = sumOfLastTwo(data1)
    console.log('data: ',data1)
    let data2 = localStorage.getItem('secondChoice')
    let data = `${sumOfTwo}${data2}`
    discountCode.style.fontSize = "x-large";
    discountCode.style.color = "black";
    discountCode.style.paddingLeft = "10px";
    discountCode.append(data)
}

let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')


window.onload = updateClock
let totalTime = 2

function updateClock() {
    let min = Math.trunc(totalTime / 60)
    let sec = totalTime - min * 60
    
    if (minutes) {
        min > 9 ? minutes.innerHTML = min : minutes.innerHTML =`0${min}`
    }

    if (seconds) {
        sec > 9 ? seconds.innerHTML = sec : seconds.innerHTML =`0${sec}`
    }

    if (totalTime === 0 ) {
        minutes.innerHTML = 'Código caducado.'
        let finalScreen = document.querySelector('#final-screen')
        finalScreen.classList.remove('countdown')
        finalScreen.classList.add('countdown-finished')
        const button = document.createElement('button')
        button.type = 'button'; 
        seconds.innerText = ''
        document.querySelector('#colon').innerText = ''
    }else {
        totalTime-=1
    setTimeout("updateClock()",1000)
  }
}
