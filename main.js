import  mockData  from './data.json' assert { type: "json" };


function days (){
    window.addEventListener("DOMContentLoaded", function(){

        displayDay()
        showPopup()
        totalAmount()
    }
    )}
    const newData = mockData.mockData;

    function displayDay (){
        const daysContainer = document.querySelector('.days-container');
        let showDays = newData.map(function(newData) {
            return `<div class="day-item"><div class="bar-popup">$${newData.amount}</div><div class="bar" style="height: ${newData.amount}px"></div><h4>${newData.day}</h4></div>`
            
        })
    
    showDays = showDays.join("");
    daysContainer.innerHTML = showDays;
}

function totalAmount(){
        const totalAmount = document.querySelector('.total-value');
        const totalValue = newData.reduce(function(x, y) {
            return x + y.amount
        }, 0)
        totalAmount.textContent = `$${totalValue}`;
}



function showPopup(){
    const dayBars = document.querySelectorAll('.bar');
    const daypopup = document.querySelectorAll('.bar-popup');
    for (let i = 0; i < dayBars.length; i++){
        dayBars[i].addEventListener('mouseover', function(){
            daypopup[i].classList.add('show')
        })
        dayBars[i].addEventListener('mouseleave', function(){
            daypopup[i].classList.remove('show')
        })
    }

    
}

days();