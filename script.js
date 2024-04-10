// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let url = "https://cdn.glitch.global/15a79e66-1898-4c44-9230-316450aa6f02";
let cards = [
    "/chivas1.png?v=1710259515725",
    "/chivas2.png?v=1710259521783",
    "/chivas3.png?v=1710259525775",
    "/chivas4.png?v=1710259528894",
    "/chivas5.png?v=1710259533087",
    "/chivas9.png?v=1710259759643",
    "/chivasy%20.png?v=1710259857662",
    "/chivasAl.png?v=1710259953146"



];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
    }
};

// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("Deck has" + cards.length + "cards.");
};
    for (let card of cards){
        if (cards.length !==16){
            cards.push(card);
            game.insertAdjacentHTML ("beforeend", "<div style= 'background-image: url(" + urlPrefix + card +")' class='card'>"
 );
        }
    }
    buttonDouble.style.color = "silver";
console.log("Now the deck has" + cards.length + "cards.");



// Button to Shuffle Cards


// Button to Flip All Cards


// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
});
