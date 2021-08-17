const charDiv = document.getElementById('charDiv');
const scoreNum = document.getElementById('scoreNum');
const pointsNum = document.getElementById('pointNum');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function removeCorrect(){
    charDiv.classList.remove("characterCorrect");
}
function removeWrong(){
    charDiv.classList.remove("characterWrong");
}

var score = 0;
const done = new Event('build');

function runGame(){
    var randomChar = String.fromCharCode(getRandomInt(65, 90));
    document.getElementById('c').innerHTML = randomChar;
    var startTime = Date.now();
    var points = 0;
    var delay = getRandomInt(1000, 2000);

    document.onkeypress = function (event) {
        while (charDiv.classList.length > 0) {
            charDiv.classList.remove(charDiv.classList.item(0));
        }
        charDiv.classList.add("character");

        var userGuess = event.key.toUpperCase();
        var timeTaken = Date.now() - startTime;
        if(userGuess === randomChar){
            charDiv.classList.add("characterCorrect");
            setTimeout(removeCorrect, delay);
            points = 130*Math.pow(0.5, timeTaken/1000);
            if (points > 100) points = 100;

            score += Math.round(points);
            pointsNum.innerHTML = Math.round(points);
            scoreNum.innerHTML = score;
            setTimeout(runGame, delay);
        }
        else{
            charDiv.classList.add("characterWrong");
            setTimeout(removeWrong, delay);

            score += Math.round(points);
            pointsNum.innerHTML = Math.round(points);
            scoreNum.innerHTML = score;
            setTimeout(runGame, delay);
        }
    }; 
    
}

runGame();