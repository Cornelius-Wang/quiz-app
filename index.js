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

/* Render the start screen */
function renderFirst() {

    $('.stats').hide();

    $('main').html(
        `
        <fieldset>
           <div class='textc'>
               <h2>Are You Smarter than a Tech Entreprenuer?</h2>
               <p>This test is designed for you to have fun and learn a thing or two that will help you start your own company.</p>
                <img src='images/thinking_elon.jpg' alt='Thinking Entrepreneur'>
           </div>
           <button type='button' id="begin">Start the Show</button>
        </fieldset>
        `
    );
    startQuiz();
}

/* Update Question # and # of questions answered correctly */
function currentStats() {
    $('.stats').html(
        `<div class='stats'>
        <ul>
            <li>
                Question:
                <span class='question-number'>${currentQuestion+1}</span>/${STORE.length}
            </li>
            <li>
                Score:
                <span class='score'>${score}</span>
            </li>
        </div>`
    );
}

/* Need a way to show the answers to a question */
function showAnswers() {
    /* Iterate through the answers to a question */
    for (let i = 0; i < STORE[currentQuestion].answers.length; i++) {
        $('.js-answers').append(
            `<input type='radio' name='choice' id='option${i+1}' value="${STORE[currentQuestion].answers[i]}" aria-checked='false' tabindex='${i+1}' required>
            <label for="option${i+1}">${STORE[currentQuestion].answers[i]}</label>
            <br>`
        );
    };
}

/* Adding the question + answers to the DOM */
function showQuestion() {
    if ((currentQuestion) === STORE.length) {
        
        finalScreen();

    } else {

        /* Add the current question html to the DOM */
        $('main').html(
            `<form id='js-questions' class='questions'>
                <fieldset>
                        <legend>${STORE[currentQuestion].question}</legend>
                    <div class="js-answers">
                    </div>
                <button type='submit' id="submit-question">Submit Answer</button>
                </fieldset>
            </form>`
    );
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


function questionSubmit() {
    /*On submitting an answer to a question*/
    $('#container').on('submit', '#js-questions', function(event){
        event.preventDefault();
        /* Check if the answer is right*/
        let selected = $('input:checked');
        let answer = selected.val();
        let correct = STORE[currentQuestion].correctAnswer;
        console.log(answer, 'correctAnswer');
        console.log(correct, 'answer');
        if (answer === correct) {
            score = score+1;
            /*Render correct answer content if right, wrong answer content if not*/
            $('main').html(
                `
                <div class='container'>
                <fieldset>
                    <div class='textc'>
                        <h2>Correct!</h2>
                        <img src='images/happy_elon.jpg' alt='Happy Entrepreneur'>
                        <p>${STORE[currentQuestion].funFact}</p>
                    </div>
                <button type='button' id='continue'>Next Question</button>
                </fieldset>
                </div>
                `
            );
        } else {
            $('main').html(
                `
                <fieldset>
                    <div class='textc'>
                        <h2>Incorrect</h2>
                        <img src='images/unhappy_elon.jpg' alt='Unhappy Entrepreneur'>
                        <p>The right answer was ${STORE[currentQuestion].correctAnswer}!</p><br>
                        <p>${STORE[currentQuestion].funFact}</p>
                    </div>
                <button type='submit' id="continue">Next Question</button>
                </fieldset>
                `
            );
        }
        currentStats();
        /* Setting event listener */
        nextQuestion();
    });
}

function restartQuiz() {
    $('#container').on('click', '#restart', function(event){
        $('main').html(
            `
            <fieldset>
            <div class='textc'>
                <h2>Are You Smarter than a Tech Entreprenuer?</h2>
                <p>This test is designed for you to have fun and learn a thing or two that will help you start your own company.</p>
                    <img src='images/thinking_elon.jpg' alt='Thinking Entrepreneur'>
            </div>
            <button type='button' id="begin">Start the Show</button>
            </fieldset>
            `
        )
        resetStats();
        /* Setting event listener */
        startQuiz();
    });
}

function finalScreen() {
    /* Show the final score and a good/average/bad descriptor */
    $('.stats').hide();
    $('main').html(
        `
        <fieldset>
           <div class='textc'>
                <h2>You got ${score}/${STORE.length} right!</h2>
                <p>Elon would be proud of you!</p>
                <div class='gif'>
                <img src="images/dancing_elon.gif" alt="entrepreneur celebration" style="width:240px; height:175px; aspect-ratio: 250:175;">
                </div>
            </div>
           <button type='button' id="restart">Restart</button>
        </fieldset>
        `
    );
    /* Setting event listener */
    restartQuiz();
}

// function finalScreenHtml() {
//     $('main').html(
//         `
//         <fieldset>
//         <div class='textc'>
//                 <h2>You got ${score}/${STORE.length} right!</h2>
//                 <p>Elon would be proud of you!</p>
//                 <div class='gif'>
//                 <img src="images/dancing_elon.gif" alt="entrepreneur celebration" style="width:240px; height:175px; aspect-ratio: 250:175;">
//                 </div>
//             </div>
//         <button type='button' id="restart">Restart</button>
//         </fieldset>
//         `
//     );
// }

function startTheShow() {
    showAnswers();
    resetStats();
    finalScreen();
    showQuestion();
    currentStats();
    startQuiz();
    questionSubmit();
    nextQuestion();
    restartQuiz();
    renderFirst();
}

$(startTheShow);