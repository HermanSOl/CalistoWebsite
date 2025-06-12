const bigBangButton = document.querySelector('#bigBangButton');
const CalistoSection = document.getElementById('Calistosection');
const stars = document.getElementById('stars');
const stars2 = document.getElementById('stars2');
const stars3 = document.getElementById('stars3');
const stars4 = document.getElementById('stars4');

// REQUORES: a number of stars produced n
// EFFECTS: returns an array of shadow-boxes at random possitions
function giveStars(n, color) {
    let shadows = [];
    for (let i = 0; i < n; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        shadows.push(`${x}px ${y}px ${color}`);
        shadows.push(`${x + 0.7}px ${y + 1}px #F7717D`);
    }
    return shadows.join(',');                // need to return with , between each due to css syntax
}

// EFFECTS: sets the stars, black
function initializeDarkStars() {
    stars.style.boxShadow = giveStars(900, `black`);
    stars2.style.boxShadow = giveStars(600, `black`);
    stars3.style.boxShadow = giveStars(300, `black`);
    stars4.style.boxShadow = giveStars(5,`black`);
}

// EFFECTS: sets the stars, white
function initializeLightStars() {
    stars.style.boxShadow = giveStars(900, `white`);
    stars2.style.boxShadow = giveStars(600, `white`);
    stars3.style.boxShadow = giveStars(300, `white`);
    stars4.style.boxShadow = giveStars(5,`white`);
    starsFadeIn();
    setTimeout(() => {
        stars.style.animation = "animStar 40s infinite"
        stars2.style.animation = "animStar 50s infinite 1.5s"
        stars3.style.animation = "animStar 60s infinite 2.2s"
        stars4.style.animation = "animStar 65s infinite 4s"
    },1500);
}


// EFFECTS: gets rid of the box shadows, sets animation to fade-out
function clearOutStars() {
    stars.style.animation = "fade-out 3s forwards"
    stars2.style.animation = "fade-out 3s forwards"
    stars3.style.animation = "fade-out 3s forwards"
    stars4.style.animation = "fade-out 3s forwards"
    bigBangButton.style.animation = "fade-out 3s forwards" // fade the button out

    setTimeout(() => {
        console.log("This working?");
        stars.style.boxShadow = "none";
        stars2.style.boxShadow = "none";
        stars3.style.boxShadow = "none";
        stars4.style.boxShadow = "none";
        document.getElementById('CatIcon').src = "resources/096.svg";
        bigBangButton.style.animation = "fade-in 2s forwards"
        bigBangButton.style.scale = 1.2;
        addStarsTransition();
    },3500) 

}

function starsFadeIn() {
    stars.style.animation = "fade-in 3s forwards"
    stars2.style.animation = "fade-in 3s forwards"
    stars3.style.animation = "fade-in 3s forwards"
    stars4.style.animation = "fade-in 3s forwards"
}

function addStarsTransition(){
    setTimeout(() => {
        bigBangButton.style.animation = "fade-out 3s forwards";
        setTimeout(() => {
            bigBangButton.style.display = "none";
        },3000)
        starsFadeIn();
        setTimeout(initializeLightStars(), 2000);
        
    }, 1500);
}

function expandGradient() {
    const box = document.getElementById('gradient-box');
    let stop = 1;
    let interval = setInterval(() => {
      if (stop > 100) {
        clearInterval(interval);
        return;
      }
      box.style.background = `radial-gradient(circle at center, #12152B ${stop}%, white ${stop + 5}%)`;
      stop++;
    }, 50); 
}


initializeDarkStars();



bigBangButton.addEventListener('click', () => {
    bigBangButton.disabled = true;
    expandGradient();
    clearOutStars();
    setTimeout(() => {
        document.getElementById('gradient-box').style.background = `linear-gradient(to bottom, #12152B 0%, #2A2E44 100%)`;
        CalistoSection.style.display = "flex";
        CalistoSection.style.animation = "fadein-from-bottom 2s forwards"
    }, 7500)
    
});