let homeEl = document.getElementById('home-el')
let guestEl = document.getElementById('guest-el')
let clearEl = document.getElementById('clr')

let Team_One = 0;
let Team_Two = 0;
let one = () => {
    console.log("clicked");
    Team_One += 1;
    homeEl.textContent = Team_One;
}

let two = () => {
    console.log("clicked");
    Team_One += 2;
    homeEl.textContent = Team_One;
}

let three = () => {
    console.log("clicked");
    Team_One += 3;
    homeEl.textContent = Team_One;
}

let G_one = () => {
    console.log("clicked");
    Team_Two += 1;
    guestEl.textContent = Team_Two;
}

let G_two = () => {
    console.log("clicked");
    Team_Two += 2;
    guestEl.textContent = Team_Two;
}

let G_three = () => {
    console.log("clicked");
    Team_Two += 3;
    guestEl.textContent = Team_Two;
}

let newgame = () => {
    console.log("clicked");
    homeEl.textContent = 0;
    guestEl.textContent = 0;
    Team_One =0;
    Team_Two =0;
}
console.log("total points ="+home-el);
console.log("Heelo");