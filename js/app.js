const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');

const buttons = [daily, weekly, monthly];

function removeActiveClasses() {
    buttons.forEach(button => {
        button.classList.remove("profile-card__option--active");
    });
}

function dailyActivity() {
    removeActiveClasses();
    daily.classList.add("profile-card__option--active");
}

function weeklyActivity() {
    removeActiveClasses();
    weekly.classList.add("profile-card__option--active");
}

function monthlyActivity() {
    removeActiveClasses();
    monthly.classList.add("profile-card__option--active");
}

/* 
fetch('./js/data.json')
    .then(response => response.json())
    .then(data => console.log(data))
*/

daily.addEventListener("click", dailyActivity);

weekly.addEventListener("click", weeklyActivity);

monthly.addEventListener("click", monthlyActivity);
