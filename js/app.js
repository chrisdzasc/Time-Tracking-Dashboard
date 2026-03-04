const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');

function dailyActivity() {
    console.log("You have clicked the daily button");
}

function weeklyActivity() {
    console.log("You have clicked the weekly button");
}

function monthlyActivity() {
    console.log("You have clicked the monthly button");
}

/* 
fetch('./js/data.json')
    .then(response => response.json())
    .then(data => console.log(data))
*/

daily.addEventListener("click", dailyActivity);

weekly.addEventListener("click", weeklyActivity);

monthly.addEventListener("click", monthlyActivity);
