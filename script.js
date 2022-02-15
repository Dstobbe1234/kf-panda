// KungFu Panda Character Search
//Variables for HTML Elements
let searchBtnEl = document.getElementById("search");
let charImgEl = document.getElementById("char-img");
let nameInputEl = document.getElementById("name-input");
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");
// Add event listener
searchBtnEl.addEventListener("click", characterSearch);

// Event Function
function characterSearch() {

// Get Input
let character = nameInputEl.value.toLowerCase();

// Check the name
if(character === "po" || character === "the dragon warrior" || character === "dragon warrior") {
    charImgEl.src = "images/po.png";
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!";
} else if (character === "viper") {
    charImgEl.src = "images/viper.png";
    charNameEl.innerHTML = "Viper";
    charQuoteEl.innerHTML = "I don't need to bite to fight!";
} else if (character === "mantis") {
    charImgEl.src = "images/mantis.png";
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML = "Fear the bug!";
} else if (character === "crane") {
    charImgEl.src = "images/crane.png";
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML = "You can chain my body, but you will never chain my warrior spirit!";
} else if (character === "tigress") {
    charImgEl.src = "images/tigress.png";
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "That was pretty hardcore!";
} else {
    charImgEl.src = "images/question-mark.png";
    charNameEl.innerHTML = "-------";
    charQuoteEl.innerHTML = "Character Not Found.";
}
}