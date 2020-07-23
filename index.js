/* Setting global counters */
let currentQuestion = 0;
let score = 0;

function startQuiz() {
    $('#begin').on('click', function(event) {
        /* Render the next question in the STORE array */
        renderQuestion();        
    });
}

function firstScreenTemplate() {

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
function renderFirstScreen() {

    $('.stats').hide();

    $('main').html(firstScreenTemplate());
    startQuiz();
}

function statsTemplate(numQuestion, score) {

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
function renderStats() {
    $('.stats').html(
        statsTemplate(currentQuestion, score)
    );
}

function answersTemplate(id, value) {

    return `<input type='radio' name='choice' id='option${id+1}' value="${value}" aria-checked='false' required>
            <label for="option${id+1}">${value}</label>
            <br>`
    
}

/* Need a way to show the answers to a question */
function renderAnswers() {
    /* Iterate through the answers to a question */
    for (let i = 0; i < STORE[currentQuestion].answers.length; i++) {
        let answerString = answersTemplate(i,STORE[currentQuestion].answers[i]);
        $('.js-answers').append(answerString);
    };
}

function questionTemplate(question) {

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
function renderQuestion() {
    if ((currentQuestion) === STORE.length) {
        
        renderFinalScreen();

    } else {

        /* Add the current question html to the DOM */
        $('.stats').show();
        $('main').html(questionTemplate(STORE[currentQuestion].question));
        renderStats();
    /* Add the answers to the question to the DOM */
    renderAnswers();
    }
}

function resetStats() {
 
    currentQuestion = 0;
    score = 0;
    $('.score').text(0);
    $('.questionNumber').text(0);
    renderStats();

}

function nextQuestion() {
    /* On clicking next question */
    $('#continue').on('click', function(event){
        currentQuestion++;
        /* Render the question and answers */
        renderQuestion();
        renderStats();
    });    
}

function correctTemplate(funFact) {

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

function wrongTemplate(rightAnswer, funFact) {

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

function renderCorrect(funFact) {
    score = score+1;
    $('main').html(correctTemplate(funFact));
}

function renderWrong(rightAnswer, funFact) {
    $('main').html(wrongTemplate(rightAnswer, funFact))
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
            renderCorrect(STORE[currentQuestion].funFact)
        } else {
            renderWrong(STORE[currentQuestion].correctAnswer, STORE[currentQuestion].funFact);
        }
        /* Update Score */
        renderStats();
        /* Setting event listener */
        nextQuestion();
    });
}

function restartQuiz() {
    $('#container').on('click', '#restart', function(event){
        resetStats();
        renderFirstScreen();
    });
}

function finalScreenTemplate(score) {
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

function renderFinalScreen() {
    /* Show the final score and a good/average/bad descriptor */
    $('.stats').hide();
    $('main').html(finalScreenTemplate(score));
    /* Setting event listener */
    restartQuiz();
}

function eventSet() {

    startQuiz();
    questionSubmit();
    nextQuestion();
    restartQuiz();
    firstScreenTemplate();

}

function startTheShow() {

    eventSet();
    renderFirstScreen();

}

$(startTheShow);