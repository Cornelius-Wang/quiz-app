function startQuiz() {
    $('#begin').on('click', function(event) {
        showQuestion();
    });
}

/* Update Question # and # of questions answered correctly */
function currentStats() {
    let currentQuestion = STORE.currentQuestion;
    let numCorrect = STORE.score;

    $('.stats').html(
        `<p> Question #: ${currentQuestion}  |   Score: ${numCorrect} </p>`
    );
}

/* Need a way to show the answers to a question */
function showAnswers() {
    let numQuestion = STORE.questions[STORE.currentQuestion];
    /* Iterate through the answers to a question */
    for (let i = 0; i < numQuestion.answers.length; i++) {
        $('.js-questions').append(
            `<input type='radio' name='choice' id='option${i+1}' value='${numQuestion.answers[i]}' tabindex = ${i+1}>
            <label for="option${i+1}">${numQuestion.answers[i]}</label>`
        );
    };
}

/* Adding the question + answers to the DOM */
function showQuestion() {
    let questionObject = STORE.questions(STORE.currentQuestion);

    currentStats();
    /* Add the current question html to the DOM */
    $('main').html(
        `<fieldset>
           <div class='textc'>
               <h2>Question ${STORE.currentQuestion}</h2>
               <p>${questionObject.question}</p>
           </div>
           <div class="choice">
               <form id='js-questions' class='questions'>
               </form>
           </div>
           <button type='button' id="submit-question">Submit Answer</button>
        </fieldset>`
    );
    showAnswers();
}

function nextQuestion() {
    /*
    On clicking next question
    Find the next question in the STORE.question array
    render the question and answers
    */

}

function questionSubmit() {
    /*
    On submitting an answer to a question
    */
    $('#submit-question').on('click', '')
    /*Check if the answer is right
    Render correct answer content if right, wrong answer content if not
    */
}

function restartQuiz() {
    /* 
    Render as part of the final screen
    Click the restart button to reset back to DOM original status
    use $().html
    */
}

function finalScreen() {
    /*
    On clicking the next button
    After the final question is answered
    Show the final score and a good/average/bad descriptor
    load the restart quiz function
    */
}


function startTheShow() {
   startQuiz();
   currentStats();
   showAnswers();
   showQuestion();
}

$(startTheShow);