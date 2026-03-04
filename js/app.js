let dashboardData = [];

fetch('./js/data.json')
    .then(response => { 
        return response.json()
    })
    .then(data => {
        dashboardData = data;
        
        weeklyActivity();
    });

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

    workCurrent.innerText = dashboardData[0].timeframes.daily.current;
    workPrevious.innerText = dashboardData[0].timeframes.daily.previous;

    playCurrent.innerText = dashboardData[1].timeframes.daily.current;
    playPrevious.innerText = dashboardData[1].timeframes.daily.previous;

    studyCurrent.innerText = dashboardData[2].timeframes.daily.current;
    studyPrevious.innerText = dashboardData[2].timeframes.daily.previous;

    exerciseCurrent.innerText = dashboardData[3].timeframes.daily.current;
    exercisePrevious.innerText = dashboardData[3].timeframes.daily.previous;

    socialCurrent.innerText = dashboardData[4].timeframes.daily.current;
    socialPrevious.innerText = dashboardData[4].timeframes.daily.previous;

    selfCareCurrent.innerText = dashboardData[5].timeframes.daily.current;
    selfCarePrevious.innerText = dashboardData[5].timeframes.daily.previous;

}

function weeklyActivity() {
    removeActiveClasses();
    weekly.classList.add("profile-card__option--active");

    workCurrent.innerText = dashboardData[0].timeframes.weekly.current;
    workPrevious.innerText = dashboardData[0].timeframes.weekly.previous;

    playCurrent.innerText = dashboardData[1].timeframes.weekly.current;
    playPrevious.innerText = dashboardData[1].timeframes.weekly.previous;

    studyCurrent.innerText = dashboardData[2].timeframes.weekly.current;
    studyPrevious.innerText = dashboardData[2].timeframes.weekly.previous;

    exerciseCurrent.innerText = dashboardData[3].timeframes.weekly.current;
    exercisePrevious.innerText = dashboardData[3].timeframes.weekly.previous;

    socialCurrent.innerText = dashboardData[4].timeframes.weekly.current;
    socialPrevious.innerText = dashboardData[4].timeframes.weekly.previous;

    selfCareCurrent.innerText = dashboardData[5].timeframes.weekly.current;
    selfCarePrevious.innerText = dashboardData[5].timeframes.weekly.previous;
}

function monthlyActivity() {
    removeActiveClasses();
    monthly.classList.add("profile-card__option--active");

    workCurrent.innerText = dashboardData[0].timeframes.monthly.current;
    workPrevious.innerText = dashboardData[0].timeframes.monthly.previous;

    playCurrent.innerText = dashboardData[1].timeframes.monthly.current;
    playPrevious.innerText = dashboardData[1].timeframes.monthly.previous;

    studyCurrent.innerText = dashboardData[2].timeframes.monthly.current;
    studyPrevious.innerText = dashboardData[2].timeframes.monthly.previous;

    exerciseCurrent.innerText = dashboardData[3].timeframes.monthly.current;
    exercisePrevious.innerText = dashboardData[3].timeframes.monthly.previous;

    socialCurrent.innerText = dashboardData[4].timeframes.monthly.current;
    socialPrevious.innerText = dashboardData[4].timeframes.monthly.previous;

    selfCareCurrent.innerText = dashboardData[5].timeframes.monthly.current;
    selfCarePrevious.innerText = dashboardData[5].timeframes.monthly.previous;
}


daily.addEventListener("click", dailyActivity);

weekly.addEventListener("click", weeklyActivity);

monthly.addEventListener("click", monthlyActivity);
