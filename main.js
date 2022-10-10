// Here are the variables that contain the user's current answer and score.
let currentAnswer = '';
let score = 0;
let currentAnswerIndex = '';
// Storing the current question's number.
let currentQuestionNumber = 0;

// Probability
let probability = {
    'Programmer': {
        'score': 0,
        'image': 'https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=1380&t=st=1665331169~exp=1665331769~hmac=2df8b1c249025035a77bbddd9a144b58029e517b702c6fc45873c4e3500a2047',
    },
    'Artist': {
        'score': 0,
        'image': 'https://img.freepik.com/free-photo/young-male-painter-holding-painting-brushes-white_114579-91595.jpg?w=1380&t=st=1665331230~exp=1665331830~hmac=b74ee69de48bc26b8dabc224f9bc30e96f02f078509969d9f61d433fc7ac65fd',
    },
    'Engineer': {
        'score': 0,
        'image': 'https://img.freepik.com/free-photo/pointing-sketch_1098-14323.jpg?w=1380&t=st=1665331274~exp=1665331874~hmac=f4c3d81aca0dfba3ff34cadbc5eb8095a5024a742c757ff1e46e2ccd6e56ac6a',
    },
}

// Here is the list of the questions.

let allQuestions = [
    {
        question: "Do you like maths?",
        image: 'https://img.freepik.com/free-vector/scientific-formulas-chalkboard_23-2148494010.jpg?w=1380&t=st=1665323200~exp=1665323800~hmac=6c44b5092c887857b5ac1af351284d15c974e21fad52d37be6924de6164f3382',
        options: ["It's my BEST subject!", "It's OK I guess...", "🤮 I HATE MATHS"],
        scores: [[1, 0, 1], [0, 0.5, 0], [0, 1, 0]]
    },
    {
        question: "Do you like scientific subjects, or do you like the arts?",
        image: 'https://img.freepik.com/premium-photo/boss-vs-leader-concept-white-origami-birds-red-one-blue-background_495423-5512.jpg?w=1380',
        options: ['Scientific', 'Arts'],
        scores: [[1, 0, 1], [0, 1, 0]]
    },
    {
        question: "Are you into tech?",
        image: 'https://img.freepik.com/free-vector/software-engineering-background_1284-3394.jpg?w=826&t=st=1665323482~exp=1665324082~hmac=705546004543d990be8a0b9ead4bd7e801cb1a05be3a291feee44f196820fa42',
        options: ['I ADORE tech', 'I am a pretty simple human'],
        scores: [[1, 0, 1], [0, 1, 0]]
    },
]

// Setting up the first question.

let answerArray = [];

function displayContent(questionNumber) {
    answerArray = [];
    document.getElementById("question").innerHTML = allQuestions[questionNumber]['question'];
    for (let i = 0; i < allQuestions[questionNumber]['options'].length; i++) {
        answerArray.push(allQuestions[questionNumber]['options'][i])
    }
    document.getElementById('all-answers').innerHTML = '';
    for (let i = 1; i <= allQuestions[questionNumber]['options'].length; i++) {
        document.getElementById('all-answers').innerHTML += '<div id="ans' + i + 'c" class="answer-block"><h3 id="ans' + i + '">' + allQuestions[questionNumber]['options'][i - 1] + '</h3></div>';
    }
    document.getElementById("img-content").src = allQuestions[questionNumber]['image'];
}
displayContent(0);

document.addEventListener('click', event => {
    let id = '';
    if (event.target.id[event.target.id.length - 1] != 'c') {
        id = event.target.id + 'c';
    } else {
        id = event.target.id;
    }
    if (event.target.id.indexOf('ans') == 0) {
        if (document.getElementById(id).style.backgroundColor != 'rgb(216, 0, 216)') {
            if (currentAnswerIndex != '') {
                document.getElementById('ans' + currentAnswerIndex + 'c').style.backgroundColor = 'white';
            }
            currentAnswerIndex = event.target.id[3];
            document.getElementById(id).style.backgroundColor = 'rgb(216, 0, 216)';
            currentAnswer = document.getElementById(id.slice(0, -1)).innerHTML;
            document.getElementById('next').style.display = 'block';
        } else {
            document.getElementById(id).style.backgroundColor = 'white';
            document.getElementById('next').style.display = 'none';
            currentAnswer = '';
        }
    }
});

// This function is set off when the quiz is finished. It creates a bit 'Your Score is:' text along with the score. Confetti added.
function showCharacter(character) {
    document.getElementById("question-block").innerHTML = '<h1 style="font-size: 92px; margin-top: 200px;">Your Character is:</h1><br><h1 style="color:rgb(11, 207, 11); font-size: 86px;">' + character + '</h1>';
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);

    startConfetti();
}

// When the next button is clicked, this function is set off. It checks if you got the correct answer in order to increase your score. It also shows you the score at the end, and shows you the next question.
document.getElementById('next').onclick = function () {
    if (currentAnswer != '') {
        for (let j = 0; j < Object.keys(probability).length; j++) {
            console.log(allQuestions[currentQuestionNumber]['scores'][parseInt(currentAnswerIndex) - 1][j])
            probability[Object.keys(probability)[j]]['score'] += allQuestions[currentQuestionNumber]['scores'][parseInt(currentAnswerIndex) - 1][j];
        }
        currentAnswer = '';
        currentAnswerIndex = '';
        currentQuestionNumber += 1;
        if (allQuestions.length < currentQuestionNumber + 1) {
            console.log(probability)
            showCharacter(biggestInDictionary());
        } else {
            displayContent(currentQuestionNumber);
            for (let i = 1; i <= answerArray.length; i++) {
                document.getElementById('ans' + i + 'c').style.backgroundColor = 'white';
            }
            document.getElementById('next').style.display = 'none';
        }
    }
}

function biggestInDictionary() {
    let biggest = 0;
    for (let i = 0; i < Object.keys(probability).length; i++) {
        if (probability[Object.keys(probability)[i]]['score'] > biggest) {
            biggest = probability[Object.keys(probability)[i]]['score'];
        }
    }
    for (let i = 0; i < Object.keys(probability).length; i++) {
        if (probability[Object.keys(probability)[i]]['score'] == biggest) {
            return Object.keys(probability)[i];
        }
    }
}