const bigBangButton = document.querySelector('#bigBangButton');
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
        shadows.push(`${x + 0.4}px ${y + 0.8}px #F7717D`);
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
        bigBangButton.style.scale = 1.2;
        bigBangButton.style.animation = "fade-in 3s forwards"
    },3500) 

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
    expandGradient();
    clearOutStars();
});