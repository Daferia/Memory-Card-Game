const cards = document.querySelectorAll('.card');
const cardFront = document.querySelectorAll('p');
const cardImg = document.querySelectorAll('img');

const cardFox = document.getElementById('fox');
const cardWhale = document.getElementById('whale');

let userPicks =[];
let marched = false;

cards.forEach(card =>{
    card.addEventListener("click", pickCard)
})


function pickCard() {
    this.children[1].classList.toggle("show-front");

    // console.log(this)
    userPicks.push(this);
    console.log(this.children[1]);
    // console.log(userPicks);

    if (userPicks.length == cardImg.length){
        console.log("Game Over");
    };
    matchCards(this);

}

function matchCards(e){
    if(userPicks.length == 2){
        e.setAttribute("disabled","");
        const firstClicked = userPicks[0].children[0].textContent.trim().toLowerCase();
        const secondClicked = userPicks[1].children[0].textContent.trim().toLowerCase();
        if (firstClicked == secondClicked){
            userPicks[0].style['pointer-events'] = "none";
            userPicks[1].style['pointer-events'] = "none";

            console.log("keep the cards flipped");
        }else {
            console.log("rotate back!")
            }
        console.log("there are 2 items in the array");
        userPicks=[];
    }
}
