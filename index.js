/* Setting global counters */
let currentQuestion = 0;
let score = 0;

function startQuiz() {
    $('#begin').on('click', function(event) {
        /* Render the next question in the STORE array */
        showQuestion();
        /* Render the score and question number counters */
        $('.stats').show();
    });
}

function renderFirst() {

    return `<fieldset>
                <div class='textc'>
                    <h2>Are You Smarter than a Tech Entreprenuer?</h2>
                    <p>This test is designed for you to have fun and learn a thing or two that will help you start your own company.</p>
                        <img src='images/thinking_elon.jpg' alt='Thinking Entrepreneur'>
                </div>
                <button type='button' id="begin">Start the Show</button>
            </fieldset>
    `;

}

/* Render the start screen */
function firstScreen() {

    $('.stats').hide();

    $('main').html(renderFirst());
    startQuiz();
}

function renderStats(numQuestion, score) {

    return `<div class='stats'>
                <ul>
                    <li>
                        Question:
                        <span class='question-number'>${numQuestion+1}</span>/${STORE.length}
                    </li>
                    <li>
                        Score:
                        <span class='score'>${score}</span>
                    </li>
                </ul>
            </div>`

}

/* Update Question # and # of questions answered correctly */
function currentStats() {
    $('.stats').html(
        renderStats(currentQuestion, score)
    );
}

function renderAnswers(id, value) {

    return `<input type='radio' name='choice' id='option${id+1}' value="${value}" aria-checked='false' required>
            <label for="option${id+1}">${value}</label>
            <br>`
    
}

/* Need a way to show the answers to a question */
function showAnswers() {
    /* Iterate through the answers to a question */
    for (let i = 0; i < STORE[currentQuestion].answers.length; i++) {
        let answerString = renderAnswers(i,STORE[currentQuestion].answers[i]);
        $('.js-answers').append(answerString);
    };
}

function renderQuestion(question) {

    return `<form id='js-questions' class='questions'>
                <fieldset>
                        <legend>${question}</legend>
                    <div class="js-answers">
                    </div>
                <button type='submit' id="submit-question">Submit Answer</button>
                </fieldset>
            </form>
    `;

}
/* Adding the question + answers to the DOM */
function showQuestion() {
    if ((currentQuestion) === STORE.length) {
        
        finalScreen();

    } else {

        /* Add the current question html to the DOM */
        $('main').html(renderQuestion(STORE[currentQuestion].question));
    /* Add the answers to the question to the DOM */
    showAnswers();
    }
}

function resetStats() {
 
    currentQuestion = 0;
    score = 0;
    $('.score').text(0);
    $('.questionNumber').text(0);
    currentStats();

}

function nextQuestion() {
    /* On clicking next question */
    $('#continue').on('click', function(event){
        currentQuestion++;
        /* Render the question and answers */
        showQuestion();
        currentStats();
    });    
}

function renderCorrect(funFact) {

    return `<div class='container'>
            <fieldset>
                <div class='textc'>
                    <h2>Correct!</h2>
                    <img src='images/happy_elon.jpg' alt='Happy Entrepreneur'>
                    <p>${funFact}</p>
                </div>
            <button type='button' id='continue'>Next Question</button>
            </fieldset>
            </div>
    `;

}

function renderWrong(rightAnswer, funFact) {

    return `<div class='container'>
            <fieldset>
                <div class='textc'>
                    <h2>Incorrect</h2>
                    <img src='images/unhappy_elon.jpg' alt='Unhappy Entrepreneur'>
                    <p>The right answer was ${rightAnswer}!</p><br>
                    <p>${funFact}</p>
                </div>
            <button type='submit' id="continue">Next Question</button>
            </fieldset>
            </div>
    `;

}

function questionSubmit() {
    /*On submitting an answer to a question*/
    $('#container').on('submit', '#js-questions', function(event){
        event.preventDefault();
        /* Check if the answer is right*/
        let selected = $('input:checked');
        let answer = selected.val();
        let correct = STORE[currentQuestion].correctAnswer;
        /*Render correct answer content if right, wrong answer content if not*/
        if (answer === correct) {
            score = score+1;
            
            $('main').html(renderCorrect(STORE[currentQuestion].funFact));
        } else {
            $('main').html(renderWrong(STORE[currentQuestion].correctAnswer, STORE[currentQuestion].funFact));
        }
        /* Update Score */
        currentStats();
        /* Setting event listener */
        nextQuestion();
    });
}

function restartQuiz() {
    $('#container').on('click', '#restart', function(event){
        $('main').html(renderFirst());
        resetStats();
        /* Setting event listener */
        startQuiz();
    });
}

function renderFinalScreen(score) {
    return  `<fieldset>
                <div class='textc'>
                    <h2>You got ${score}/${STORE.length} right!</h2>
                    <div class='gif'>
                    <img src="images/dancing_elon.gif" alt="entrepreneur celebration" style="width:240px; height:175px;">
                    </div>
                    <p>Elon would be proud of you!</p>
                </div>
            <button type='button' id="restart">Restart</button>
            </fieldset>
            `;
            
}

function finalScreen() {
    /* Show the final score and a good/average/bad descriptor */
    $('.stats').hide();
    $('main').html(renderFinalScreen(score));
    /* Setting event listener */
    restartQuiz();
}

function eventSet() {

    startQuiz();
    questionSubmit();
    nextQuestion();
    restartQuiz();
    renderFirst();

}

function startTheShow() {

    eventSet();
    firstScreen();

}

$(startTheShow);