// REQUORES: a number of stars produced n
// EFFECTS: returns an array of shadow-boxes at random possitions
function giveStars(n) {
    let shadows = [];
    for (let i = 0; i < n; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        shadows.push(`${x}px ${y}px black`);
        shadows.push(`${x + 0.4}px ${y + 0.8}px #F7717D`);
    }
    return shadows.join(',');                // need to return with , between each due to css syntax
}

document.getElementById('stars').style.boxShadow = giveStars(900);
document.getElementById('stars2').style.boxShadow = giveStars(600);
document.getElementById('stars3').style.boxShadow = giveStars(300);
document.getElementById('stars4').style.boxShadow = giveStars(5);



function moveStars() {
    document.getElementById('stars').style.width = '25px';
    document.getElementById('stars2').style.width = '25px';
    document.getElementById('stars').style.height = '25px';
    document.getElementById('stars2').style.height = '25px'
    document.getElementById('stars').style.animation = 'melt 10s forwards 1';
    document.getElementById('stars2').style.animation = 'melt 10s forwards 1';

}

const bigBangButton = document.querySelector('#bigBangButton');

bigBangButton.addEventListener('click', () => {
    moveStars();
});