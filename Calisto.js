// REQUORES: a number of stars produced n
// EFFECTS: returns an array of shadow-boxes at random possitions
function giveStars(n) {
    let shadows = [];
    for (let i = 0; i < n; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        shadows.push(`${x}px ${y}px #FFF`);
    }
    return shadows.join(',');                // need to return with , between each due to css syntax
}

document.getElementById('stars').style.boxShadow = giveStars(600);
document.getElementById('stars2').style.boxShadow = giveStars(400);