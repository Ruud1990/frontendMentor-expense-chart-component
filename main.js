import  mockData  from './data.json' assert { type: "json" };


function days (){
    return displayDay()
}
function displayDay (){
    const newData = mockData.mockData;
    console.log(newData);
    const daysContainer = document.querySelector('.days-container');
    let showDays = newData.map(function(newData) {
        return `<div class="day-item"><h4>${newData.day}</h4> <div class="bar"></div></div>`
    })
    showDays = showDays.join("");
    daysContainer.innerHTML = showDays;
}

days ();