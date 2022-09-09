const homeScoreBoxEl = document.getElementById("homeScoreBox");
const homeScoreEl = document.getElementById("homeScore");
const guestScoreBoxEl = document.getElementById("guestScoreBox");
const guestScoreEl = document.getElementById("guestScore");

const home1BtnEl = document.getElementById("home_1");
const home2BtnEl = document.getElementById("home_2");
const home3BtnEl = document.getElementById("home_3");
const guest1BtnEl = document.getElementById("guest_1");
const guest2BtnEl = document.getElementById("guest_2");
const guest3BtnEl = document.getElementById("guest_3");
const resetBtnEl = document.getElementById("reset");


let homeScore = 0;
let guestScore = 0;

function noLead() {
    homeScoreBoxEl.classList = ["score-box"];
    guestScoreBoxEl.classList = ["score-box"];
}

function showLead() {
    if (homeScore > 0 || guestScore > 0) {
        if (homeScore > guestScore) {
            homeScoreBoxEl.classList.add("lead");
            guestScoreBoxEl.classList = ["score-box"];
        } else if(homeScore < guestScore) {
            guestScoreBoxEl.classList.add("lead");
            homeScoreBoxEl.classList = ["score-box"];
        } else if (homeScore == guestScore) {
            noLead();
        }
    }
}

function reset() {
    homeScore = 0;
    updateScore(homeScoreEl, homeScore);
    guestScore = 0;
    updateScore(guestScoreEl, guestScore);
    noLead();
}

function updateScore(el, score) {
    el.textContent = score;
}

function raiseScore(btnEl) {
    const strs = btnEl.id.split("_");
    const team = strs.shift();
    const raise = parseInt(strs[0]);
    if (team === "home") {
        homeScore += raise;
        updateScore(homeScoreEl, homeScore);
    } else {
        guestScore += raise;
        updateScore(guestScoreEl, guestScore);
    }
    showLead();
    
}

home1BtnEl.addEventListener("click", () => raiseScore(home1BtnEl));
home2BtnEl.addEventListener("click", () => raiseScore(home2BtnEl));
home3BtnEl.addEventListener("click", () => raiseScore(home3BtnEl));

guest1BtnEl.addEventListener("click", () => raiseScore(guest1BtnEl));
guest2BtnEl.addEventListener("click", () => raiseScore(guest2BtnEl));
guest3BtnEl.addEventListener("click", () => raiseScore(guest3BtnEl));

resetBtnEl.addEventListener("click", () => reset());