const cards = document.querySelectorAll('.memory-card');
const memoryGame = document.querySelector(".memory-game");
const resultbox = document.querySelector(".result-box");
const homebox = document.querySelector(".home-box");
const titulao = document.querySelector(".titulao");
const tabuleiro = document.querySelector(".tabuleiro");


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var match = 0;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        match = match + 1;
        disableCards();
        if (match < 6) {
            console.log(match);
            return;
        }
        else if (match = 6){
            gameOver();
        }
        
    }
    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;
    });
}

function gameOver() {
    memoryGame.classList.add('hide');
    tabuleiro.classList.add('hide');
    resultbox.classList.remove('hide');

}

function gameStart() {
    homebox.classList.add('hide');
    titulao.classList.add('hide');
    memoryGame.classList.remove('hide');
    tabuleiro.classList.remove('hide');
}

cards.forEach(card => card.addEventListener('click', flipCard));

