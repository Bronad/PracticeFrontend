const stats = JSON.parse(localStorage.getItem('stuff')) || {
    wins: 0,
    losses: 0,
    draws: 0
}

let bla;
let pickk;
let blaString;
function comAnswer(){
bla = Math.random();
if (bla < 1/3){
    bla = 1;
}else if(2/3 <= bla){
    bla = 3;
}else {bla = 2;
}
blaString = getpick(bla);
}
function whoWins(pick){
    comAnswer();
    pickk = getpick(pick);
    if(pick === bla){
        stats.draws++;
        document.querySelector('.js-result').innerHTML = 'Draw!';
                }else {
        pick--;
        if(pick == 0){ pick = 3; }
        if(pick== bla){ stats.wins++;
        document.querySelector('.js-result').innerHTML = 'You Win!';}
        else { stats.losses++; 
        document.querySelector('.js-result').innerHTML = 'You Loose!';}
    } 
    updateScore();
    document.querySelector('.js-picks').innerHTML = pickedStuff();
    localStorage.setItem('stuff', JSON.stringify(stats));
}

function getpick(numbb){
    if(numbb === 3){return 'scissors';}
    if(numbb === 2){return'paper';}
    else{return 'rock'}     
}

function updateScore(){
document.querySelector('.js-score').innerHTML = `Wins: ${stats.wins}, Losses: ${stats.losses}, Ties: ${stats.draws}`;
}

function pickedStuff(){
    return `You <img src="images/${pickk}-emoji.png" class="button-img">
        <img src="images/${blaString}-emoji.png" class="button-img"> Computer`;
}

function resetbutton(){
            stats.draws = 0;
            stats.losses = 0;
            stats.wins = 0;
            localStorage.removeItem('stuff');
            updateScore();
            document.querySelector('.js-picks').innerHTML = '';
            document.querySelector('.js-result').innerHTML = '';
}