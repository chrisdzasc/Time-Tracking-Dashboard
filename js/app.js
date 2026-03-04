const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');

const workCurrent       = document.querySelector('#work-current');
const workPrevious      = document.querySelector('#work-previous');
const playCurrent       = document.querySelector('#play-current');
const playPrevious      = document.querySelector('#play-previous');
const studyCurrent      = document.querySelector('#study-current');
const studyPrevious     = document.querySelector('#study-previous');
const exerciseCurrent   = document.querySelector('#exercise-current');
const exercisePrevious  = document.querySelector('#exercise-previous');
const socialCurrent     = document.querySelector('#social-current');
const socialPrevious    = document.querySelector('#social-previous');
const selfCareCurrent   = document.querySelector('#self-care-current');
const selfCarePrevious  = document.querySelector('#self-care-previous');

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
