let currentAnswer = '';

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Used like so
var arr = [2, 11, 37, 42];
shuffle(arr);

document.getElementById('ans1c').onclick = function () {
    let currentElement = '1';
    let otherElements = ['4', '2', '3']
    if (document.getElementById('ans' + currentElement + 'c').style.backgroundColor != 'rgb(216, 0, 216)') {
        document.getElementById('ans' + currentElement + 'c').style.backgroundColor = 'rgb(216, 0, 216)';
        document.getElementById('ans' + otherElements[0] + 'c').style.backgroundColor = 'white';
        document.getElementById('ans' + otherElements[1] + 'c').style.backgroundColor = 'white';
        document.getElementById('ans' + otherElements[2] + 'c').style.backgroundColor = 'white';
        currentAnswer = document.getElementById('ans' + currentElement).innerHTML;
        document.getElementById('ans' + otherElements[0] + 'c').style.boxShadow = 'shadow:inset 0 0 0 3px #e5e3f0';
        document.getElementById('ans' + otherElements[1] + 'c').style.boxShadow = 'shadow:inset 0 0 0 3px #e5e3f0';
        document.getElementById('ans' + otherElements[2] + 'c').style.boxShadow = 'shadow:inset 0 0 0 3px #e5e3f0';
        document.getElementById('next').style.display = 'block';
    } else if (document.getElementById('ans' + currentElement + 'c').style.backgroundColor == 'rgb(216, 0, 216)') {
        document.getElementById('ans' + currentElement + 'c').style.backgroundColor = 'white';
        document.getElementById('next').style.display = 'none';
        currentAnswer = '';
    }
}

document.getElementById('ans2c').onclick = function () {
    let currentElement = '2';
    let otherElements = ['1', '4', '3']
    if (document.getElementById('ans' + currentElement + 'c').style.backgroundColor != 'rgb(216, 0, 216)') {
        document.getElementById('ans' + currentElement + 'c').style.backgroundColor = 'rgb(216, 0, 216)';
        document.getElementById('ans' + otherElements[0] + 'c').style.backgroundColor = 'white';
        document.getElementById('ans' + otherElements[1] + 'c').style.backgroundColor = 'white';
        document.getElementById('ans' + otherElements[2] + 'c').style.backgroundColor = 'white';
        currentAnswer = document.getElementById('ans' + currentElement).innerHTML;
        document.getElementById('ans' + otherElements[0] + 'c').style.boxShadow = 'shadow:inset 0 0 0 3px #e5e3f0';
        document.getElementById('ans' + otherElements[1] + 'c').style.boxShadow = 'shadow:inset 0 0 0 3px #e5e3f0';
        document.getElementById('ans' + otherElements[2] + 'c').style.boxShadow = 'shadow:inset 0 0 0 3px #e5e3f0';
        document.getElementById('next').style.display = 'block';
    } else if (document.getElementById('ans' + currentElement + 'c').style.backgroundColor == 'rgb(216, 0, 216)') {
        document.getElementById('ans' + currentElement + 'c').style.backgroundColor = 'white';
        document.getElementById('next').style.display = 'none';
        currentAnswer = '';
    }
}

document.getElementById('ans3c').onclick = function () {
    let currentElement = '3';
    let otherElements = ['1', '2', '4']
    if (document.getElementById('ans' + currentElement + 'c').style.backgroundColor != 'rgb(216, 0, 216)') {
        document.getElementById('ans' + currentElement + 'c').style.backgroundColor = 'rgb(216, 0, 216)';
        document.getElementById('ans' + otherElements[0] + 'c').style.backgroundColor = 'white';
        document.getElementById('ans' + otherElements[1] + 'c').style.backgroundColor = 'white';
        document.getElementById('ans' + otherElements[2] + 'c').style.backgroundColor = 'white';
        currentAnswer = document.getElementById('ans' + currentElement).innerHTML;
        document.getElementById('ans' + otherElements[0] + 'c').style.boxShadow = 'shadow:inset 0 0 0 3px #e5e3f0';
        document.getElementById('ans' + otherElements[1] + 'c').style.boxShadow = 'shadow:inset 0 0 0 3px #e5e3f0';
        document.getElementById('ans' + otherElements[2] + 'c').style.boxShadow = 'shadow:inset 0 0 0 3px #e5e3f0';
        document.getElementById('next').style.display = 'block';
    } else if (document.getElementById('ans' + currentElement + 'c').style.backgroundColor == 'rgb(216, 0, 216)') {
        document.getElementById('ans' + currentElement + 'c').style.backgroundColor = 'white';
        document.getElementById('next').style.display = 'none';
        currentAnswer = '';
    }
}


function showScore() {
    document.getElementById("question-block").innerHTML = '<h1 style="font-size: 92px; margin-top: 200px;">Your Score is:</h1><br><h1 style="color:rgb(11, 207, 11); font-size: 86px;">' + score + '</h1>';
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);

    startConfetti();
}

document.getElementById('next').onclick = function () {
    if (currentAnswer != '') {
        if (currentAnswer == allQuestions[currentQuestionNumber][allQuestions[currentQuestionNumber]['correctAnswer']]) {
            score += 100;
            document.getElementById('score').innerHTML = score;
            document.getElementById('next').style.display = 'none';
        }
        currentQuestionNumber += 1;
        if (allQuestions.length < currentQuestionNumber + 1) {
            showScore();
        } else {
            document.getElementById("question").innerHTML = allQuestions[Object.keys(allQuestions)[currentQuestionNumber]]['question'];
            answerArray = [allQuestions[currentQuestionNumber]['firstOption'], allQuestions[currentQuestionNumber]['secondOption'], allQuestions[currentQuestionNumber]['thirdOption'], allQuestions[currentQuestionNumber]['fourthOption']];
            shuffle(answerArray);
            document.getElementById("ans1").innerHTML = answerArray[0];
            document.getElementById("ans2").innerHTML = answerArray[1];
            document.getElementById("ans3").innerHTML = answerArray[2];
            document.getElementById("ans4").innerHTML = answerArray[3];
            document.getElementById('ans1c').style.backgroundColor = 'white';
            document.getElementById('ans2c').style.backgroundColor = 'white';
            document.getElementById('ans3c').style.backgroundColor = 'white';
            document.getElementById('ans4c').style.backgroundColor = 'white';
            document.getElementById('next').style.display = 'none';
        }
    }
}

document.getElementById('ans4c').onclick = function () {
    let currentElement = '4';
    let otherElements = ['1', '2', '3']
    if (document.getElementById('ans' + currentElement + 'c').style.backgroundColor != 'rgb(216, 0, 216)') {
        document.getElementById('ans' + currentElement + 'c').style.backgroundColor = 'rgb(216, 0, 216)';
        document.getElementById('ans' + otherElements[0] + 'c').style.backgroundColor = 'white';
        document.getElementById('ans' + otherElements[1] + 'c').style.backgroundColor = 'white';
        document.getElementById('ans' + otherElements[2] + 'c').style.backgroundColor = 'white';
        currentAnswer = document.getElementById('ans' + currentElement).innerHTML;
        document.getElementById('next').style.display = 'block';
    } else if (document.getElementById('ans' + currentElement + 'c').style.backgroundColor == 'rgb(216, 0, 216)') {
        document.getElementById('ans' + currentElement + 'c').style.backgroundColor = 'white';
        document.getElementById('next').style.display = 'none';
        currentAnswer = '';
    }
}
let allQuestions = [
    {
        // questionNumber: "Math-1",
        question: "Solve the following equation: 3 × 10 ÷ 5 + 128 ÷ 2 = ?",
        firstOption: "67",
        secondOption: "68",
        thirdOption: "134",
        fourthOption: "70",
        correctAnswer: "fourthOption"
    },
    {
        // questionNumber: "Math-2",
        question: "Solve the following equation: 20 × 0 + 235 - 76 ÷ 2 + 1 = ?",
        firstOption: "198",
        secondOption: "53",
        thirdOption: "80.5",
        fourthOption: "90.5",
        correctAnswer: "firstOption"
    }]

let currentQuestionNumber = 0;
let answerArray = [allQuestions[currentQuestionNumber]['firstOption'], allQuestions[currentQuestionNumber]['secondOption'], allQuestions[currentQuestionNumber]['thirdOption'], allQuestions[currentQuestionNumber]['fourthOption']];
shuffle(answerArray);
document.getElementById("question").innerHTML = allQuestions[Object.keys(allQuestions)[currentQuestionNumber]]['question'];

document.getElementById("ans1").innerHTML = answerArray[0];
document.getElementById("ans2").innerHTML = answerArray[1];
document.getElementById("ans3").innerHTML = answerArray[2];
document.getElementById("ans4").innerHTML = answerArray[3];

let score = 0;
document.getElementById("score").innerHTML = score;