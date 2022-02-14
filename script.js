// KungFu Panda Character Search
// Add event listener
document.getElementById("search").addEventListener("click", characterSearch);

// Event Function
function characterSearch() {

// Get Input
let character = document.getElementById("name-input").value;

// Check the name
if(character === "Po") {
    document.getElementById("char-img").src = "images/po.png";
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-quote").innerHTML = "Buddy, I am the Dragon Warrior";
} else if (character === "Viper") {
    document.getElementById("char-img").src = "images/viper.png";
    document.getElementById("char-name").innerHTML = "Viper";
    document.getElementById("char-quote").innerHTML = "I don't need to bite to fight!";
} else if (character === "Mantis") {
    document.getElementById("char-img").src = "images/mantis.png";
    document.getElementById("char-name").innerHTML = "Mantis";
    document.getElementById("char-quote").innerHTML = "Fear the bug!";
} else if (character === "Crane") {
    document.getElementById("char-img").src = "images/crane.png";
    document.getElementById("char-name").innerHTML = "Crane";
    document.getElementById("char-quote").innerHTML = "You can chain my body, but you will never chain my warrior spirit!";
} else if (character === "Tigress") {
    document.getElementById("char-img").src = "images/tigress.png";
    document.getElementById("char-name").innerHTML = "Tigress";
    document.getElementById("char-quote").innerHTML = "That was pretty hardcore!";
} else {
    document.getElementById("char-img").src = "images/question-mark.png";
    document.getElementById("char-name").innerHTML = "-------";
    document.getElementById("char-quote").innerHTML = "Character Not Found.";
}
}