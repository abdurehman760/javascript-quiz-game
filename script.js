const startButton = document.getElementById('start');
const quizContainer = document.getElementById('quiz-container');
const startContainer = document.getElementById('start-container');
const quizElement = document.getElementById('quiz');
const resetButton = document.getElementById('reset');
const resultsContainer = document.getElementById('results');
const timerElement = document.getElementById('timer');
const timerContainer = document.getElementById('timerContainer');
const timeElement = document.getElementById('time');
const progressElement = document.getElementById('progress');
const feedbackElement = document.getElementById('feedback');
const feedbackMessage = document.getElementById('feedbackMessage');
const pauseButton = document.getElementById('pauseQuiz');
const resumeButton = document.getElementById('resumeQuiz');
const pauseOverlay = document.getElementById('pauseOverlay');

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft;
let totalTime = 0;
let totalTimer;
let selectedQuizData; // Variable to hold selected quiz data
// Variables to hold timer IDs
let pauseTotalTimer;
let pauseTimeLeft;
let startTime; // To store the start time of each question
let timeTaken = []; // To store time taken for each question
let pointsAwarded = [];// To store points earned for each question
let correctAnswersCount = 0; // Add this variable to keep track of correct answers

// Modal variables
const modal = document.getElementById('resultsModal');
const closeModalBtn = document.getElementById('closePreviousRecordsModalBtn');
const modalBody = document.getElementById('resultsModalBody');
const closeModalSpan = document.querySelector('.modal-header .close');

// Function to start the quiz
function startQuiz() {
// Determine which quiz data to use based on selection
const quizType = document.getElementById('quiz-type').value;
selectedQuizData = quizType === 'basic' ? quizData.slice() : quizDataAdvanced.slice(); // Make a copy of the array
timeLeft = quizType === 'basic' ? 10 : 20;
// Ensure the Reset Quiz button is displayed as a block element
document.getElementById('reset').style.display = 'block';
shuffleQuestions();
startContainer.classList.add('hidden');
quizContainer.classList.remove('hidden');
buildQuiz();
showQuestion(currentQuestionIndex);
startTotalTimer();
document.getElementById('pauseQuiz').classList.remove('hidden');


// Make sure Pause Quiz button is visible
document.getElementById('pauseQuiz').classList.remove('hidden');
}

// Function to shuffle questions and limit to 10
function shuffleQuestions() {
    for (let i = selectedQuizData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [selectedQuizData[i], selectedQuizData[j]] = [selectedQuizData[j], selectedQuizData[i]];
    }
    selectedQuizData = selectedQuizData.slice(0, 10); // Limit to 10 questions
    // Update the total number of questions in the HTML

}


// Function to build the quiz UI
function buildQuiz() {
    const output = [];
    selectedQuizData.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        currentQuestion.options.forEach((option, index) => {
            // Create option labels ('a', 'b', 'c', 'd')
            const optionLabel = String.fromCharCode(97 + index); // 97 is the ASCII code for 'a'

            answers.push(
                `<label class="option-label">
    <input type="radio" id="question${questionNumber}_option${index}" name="question${questionNumber}" value="${index}" onchange="handleAnswerSelection(${questionNumber})">
    <span class="custom-radio"></span>
    <span class="option-text"><strong>${optionLabel}.</strong> ${option}</span>
</label>`
            );
        });
        output.push(
            `<div class="question hidden"> ${currentQuestion.question} </div>
            <div class="answers hidden"> ${answers.join('')} </div>`
        );
    });
    quizElement.innerHTML = output.join('');
}




// Function to handle answer selection
function handleAnswerSelection(questionNumber) {
const answerContainers = quizElement.querySelectorAll('.answers');
const selector = `input[name=question${questionNumber}]:checked`;
const selectedRadio = answerContainers[questionNumber].querySelector(selector);
const radios = answerContainers[questionNumber].querySelectorAll('input[type=radio]');
const labels = answerContainers[questionNumber].querySelectorAll('label');

if (selectedRadio) {
    // Clear the timer interval to stop the countdown
    clearInterval(timer);

    const selectedValue = parseInt(selectedRadio.value);
    const correctAnswerIndex = selectedQuizData[questionNumber].options.indexOf(selectedQuizData[questionNumber].answer);

    labels.forEach((label, index) => {
        if (index === correctAnswerIndex) {
            label.classList.add('correct');
        } else if (index === selectedValue) {
            label.classList.add('incorrect');
        } else {
            label.classList.add('neutral');
        }
    });

    radios.forEach(radio => {
        radio.disabled = true;
        radio.classList.add('disabled-radio'); // Add the disabled class
    });

    // Update the feedback and score
    nextQuestion();
}
}


// Function to disable all radio buttons for the current question
function disableRadioButtons() {
const answerContainers = quizElement.querySelectorAll('.answers');
const radios = answerContainers[currentQuestionIndex].querySelectorAll('input[type=radio]');
radios.forEach(radio => {
    radio.disabled = true;
    radio.classList.add('disabled-radio'); // Add the disabled class
});

// Optionally, add the disabled class to the labels as well
const labels = answerContainers[currentQuestionIndex].querySelectorAll('label');
labels.forEach(label => {
    label.classList.add('disabled-label'); // Add the disabled class
});
}
// Function to enable all radio buttons
function enableRadioButtons() {
const answerContainers = quizElement.querySelectorAll('.answers');
const radios = answerContainers[currentQuestionIndex].querySelectorAll('input[type=radio]');
radios.forEach(radio => {
    radio.disabled = false;
    radio.classList.remove('disabled-radio'); // Remove the disabled class
});

// Optionally, remove the disabled class from the labels as well
const labels = answerContainers[currentQuestionIndex].querySelectorAll('label');
labels.forEach(label => {
    label.classList.remove('disabled-label'); // Remove the disabled class
});
}




// Function to show a question
function showQuestion(questionNumber) {
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answers');
questions.forEach((question, index) => {
    question.classList.toggle('hidden', index !== questionNumber);
});
answers.forEach((answer, index) => {
    answer.classList.toggle('hidden', index !== questionNumber);
});
feedbackElement.classList.add('hidden'); // Hide feedback when showing a new question
progressElement.innerHTML = `Question ${questionNumber + 1} of ${selectedQuizData.length}`;
resetTimer();
startTimer();
}

// Function to start the timer for each question
function startTimer() {
startTime = Date.now(); // Record the start time
timer = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(timer);
        timeLeft = 0; // Ensure timeLeft does not go below 0
        timerElement.classList.add('hidden');
        timerContainer.classList.add('hidden');
        document.getElementById('timeUp').classList.remove('hidden');

        // Disable all radio buttons for the current question
        disableRadioButtons();

        setTimeout(() => {
            document.getElementById('timeUp').classList.add('hidden');
            nextQuestion();
        }, 2000);
    } else {
        timeLeft--;
        timeElement.textContent = timeLeft;
        if (timeLeft < 5) {
            timeElement.classList.add('less-than-5');
        } else {
            timeElement.classList.remove('less-than-5');
        }
    }
}, 1000);
}





// Function to reset the timer
function resetTimer() {
clearInterval(timer);
timeLeft = document.getElementById('quiz-type').value === 'basic' ? 10 : 20;
timeElement.textContent = timeLeft;
// Remove the 'less-than-5' class when the timer is reset
timeElement.classList.remove('less-than-5');
timerContainer.classList.remove('hidden');
timerElement.classList.remove('hidden'); // Ensure timerElement is visible again
document.getElementById('timeUp').classList.add('hidden'); // Hide the timeUp element
}


// Function to start the total quiz timer
function startTotalTimer() {
totalTimer = setInterval(() => {
    totalTime++;
}, 1000);
}

// Function to calculate points based on time left
function calculatePoints(timeLeft, quizType) {
let points = 0;

if (quizType === 'basic') {
    if (timeLeft >= 6) points = 10;
    else if (timeLeft === 5) points = 9;
    else if (timeLeft === 4) points = 8;
    else if (timeLeft === 3) points = 7;
    else if (timeLeft === 2) points = 6;
    else if (timeLeft === 1) points = 5;
    else if (timeLeft === 0) points = 4;
} else if (quizType === 'advanced') {
    if (timeLeft >= 11) points = 10;
    else if (timeLeft === 10) points = 9.5;
    else if (timeLeft === 9) points = 9;
    else if (timeLeft === 8) points = 8.5;
    else if (timeLeft === 7) points = 8;
    else if (timeLeft === 6) points = 7.5;
    else if (timeLeft === 5) points = 7;
    else if (timeLeft === 4) points = 6.5;
    else if (timeLeft === 3) points = 6;
    else if (timeLeft === 2) points = 5.5;
    else if (timeLeft === 1) points = 5;
    else if (timeLeft === 0) points = 4.5;
}

return points;
}

// Function to proceed to the next question
// Function to proceed to the next question
function nextQuestion() {
    const answerContainers = quizElement.querySelectorAll('.answers');
    const selector = `input[name=question${currentQuestionIndex}]:checked`;
    const userAnswerIndex = parseInt((answerContainers[currentQuestionIndex].querySelector(selector) || {}).value);
    const quizType = document.getElementById('quiz-type').value;

    let endTime = Date.now();
    let questionTime = Math.round((endTime - startTime) / 1000);
    timeTaken.push(questionTime);

    let points = 0;
    let isCorrect = false;
    let isMissed = false;

    if (!isNaN(userAnswerIndex)) {
        const userAnswer = selectedQuizData[currentQuestionIndex].options[userAnswerIndex];
        const correctAnswerIndex = selectedQuizData[currentQuestionIndex].options.indexOf(selectedQuizData[currentQuestionIndex].answer);

        if (userAnswer === selectedQuizData[currentQuestionIndex].answer) {
            isCorrect = true;
            points = calculatePoints(timeLeft, quizType);
            feedbackElement.classList.remove('hidden', 'incorrect', 'missed');
            feedbackElement.classList.add('correct');
            feedbackMessage.textContent = `Correct! Points: ${points}`;
            score += points;
            correctAnswersCount++;
        } else {
            feedbackElement.classList.remove('hidden', 'correct', 'missed');
            feedbackElement.classList.add('incorrect');
            feedbackMessage.textContent = `Wrong! Points Awarded: 0`;
        }
    } else {
        isMissed = true;
        feedbackElement.classList.remove('hidden', 'correct', 'incorrect');
        feedbackElement.classList.add('missed');
        feedbackMessage.textContent = `Not Attempted! The correct answer is "${selectedQuizData[currentQuestionIndex].answer}". Points: 0`;
    }

    pointsAwarded.push(points);

    // Calculate missed and wrong questions
    if (isMissed) {
        // Increment missed count
    } else if (!isCorrect) {
        // Increment wrong count
    }

    setTimeout(() => {
        feedbackElement.classList.add('hidden');
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuizData.length) {
            showQuestion(currentQuestionIndex);
        } else {
            showResults();
        }
    }, 2000);
}




// Function to show the results
function showResults() {
    clearInterval(timer);
    clearInterval(totalTimer);

    const quizType = document.getElementById('quiz-type').value;
    const totalQuestions = selectedQuizData.length;
    const totalMissedQuestions = selectedQuizData.filter((_, index) => {
        return isNaN(parseInt(document.querySelector(`input[name=question${index}]:checked`)?.value));
    }).length;
    const totalWrongQuestions = selectedQuizData.length - correctAnswersCount - totalMissedQuestions;
    
    const accuracy = ((correctAnswersCount / totalQuestions) * 100).toFixed(2);
    
   // Determine the remark based on score, accuracy, and total time
let remark = '';

// Define time thresholds ()
const timeThresholds = {
    excellent: 60, // seconds
    great: 120,    // seconds
    good: 180,     // seconds
    average: 240   // seconds
};

// Determine the remark based on score, accuracy, and total time
if (score >= 90 && accuracy >= 90) {
    if (totalTime <= timeThresholds.excellent) {
        remark = 'Excellent';
    } else if (totalTime <= timeThresholds.great) {
        remark = 'Great Job';
    } else if (totalTime <= timeThresholds.good) {
        remark = 'Good';
    } else if (totalTime <= timeThresholds.average) {
        remark = 'Average';
    } else {
        remark = 'Needs Improvement';
    }
} else if (score >= 80 && accuracy >= 80) {
    if (totalTime <= timeThresholds.great) {
        remark = 'Great Job';
    } else if (totalTime <= timeThresholds.good) {
        remark = 'Good';
    } else if (totalTime <= timeThresholds.average) {
        remark = 'Average';
    } else {
        remark = 'Needs Improvement';
    }
} else if (score >= 70 && accuracy >= 70) {
    if (totalTime <= timeThresholds.good) {
        remark = 'Good';
    } else if (totalTime <= timeThresholds.average) {
        remark = 'Average';
    } else {
        remark = 'Needs Improvement';
    }
} else if (score >= 50 && accuracy >= 50) {
    if (totalTime <= timeThresholds.average) {
        remark = 'Average';
    } else {
        remark = 'Needs Improvement';
    }
} else {
    remark = 'Needs Improvement';
}

    // Retrieve stored records
    const activeProfileName = localStorage.getItem('activeProfile');
    if (!activeProfileName) {
        console.error('No active profile found.');
        return;
    }
    const profiles = JSON.parse(localStorage.getItem('profiles')) || {};
    const profileResults = profiles[activeProfileName] || [];
    
    // Determine if the new result is the best
    const isBestRecord = profileResults.every(record => {
        return score > record.totalScore ||
            (score === record.totalScore && accuracy > record.accuracy) ||
            (score === record.totalScore && accuracy === record.accuracy && totalTime < record.totalTime);
    });

    // Determine the result details
    const resultPreview = selectedQuizData.map((question, index) => {
        const answerContainers = quizElement.querySelectorAll('.answers');
        const selector = `input[name=question${index}]:checked`;
        const userAnswerIndex = parseInt((answerContainers[index].querySelector(selector) || {}).value);
        const correctAnswerIndex = question.options.indexOf(question.answer);
    
        let resultHTML = `
            <div class="result-question" id="question${index}" onclick="toggleDetails(${index})">
                <strong>Q${index + 1}:</strong> ${question.question}
            </div>
            <div class="result-details" id="details${index}">
        `;
    
        question.options.forEach((option, optionIndex) => {
            const optionLabel = String.fromCharCode(97 + optionIndex); // 'a' + index
    
            if (userAnswerIndex === optionIndex && userAnswerIndex === correctAnswerIndex) {
                resultHTML += `<div class="result-option correct"><strong>${optionLabel}.</strong> ${option}</div>`;
            } else if (userAnswerIndex === optionIndex) {
                resultHTML += `<div class="result-option incorrect"><strong>${optionLabel}.</strong> ${option}</div>`;
            } else if (optionIndex === correctAnswerIndex) {
                resultHTML += `<div class="result-option correct"><strong>${optionLabel}.</strong> ${option}</div>`;
            } else {
                resultHTML += `<div class="result-option"><strong>${optionLabel}.</strong> ${option}</div>`;
            }
            if (optionIndex < question.options.length - 1) {
                resultHTML += `<hr class="option-divider">`;
            }
        });
    
        if (isNaN(userAnswerIndex)) {
            resultHTML += `<div class="missed-answer">Not Attempted! Points awarded: 0</div>`;
        } else {
            resultHTML += `<div class="time-taken">Time Taken: ${timeTaken[index]} seconds</div>`;
            resultHTML += `<div class="points-awarded">Points Awarded: ${pointsAwarded[index]}</div>`;
        }
    
        resultHTML += `
            <div class="result-reason">
                <strong>Introduction:</strong> ${question.reason || 'No introduction provided'}
            </div>
        </div><hr class="result-divider">`;
    
        return resultHTML;
    }).join('');
    
    modalBody.innerHTML = `
        <div class="result-summary">
         
            <p class="summary-item"><strong>Quiz Type:</strong> ${quizType.charAt(0).toUpperCase() + quizType.slice(1)}</p>
            <p class="summary-item"><strong>Total Questions Attempted:</strong> ${totalQuestions - totalMissedQuestions} / ${totalQuestions}</p>
            <p class="summary-item"><strong>Total Number of Missed Questions:</strong> ${totalMissedQuestions} / ${totalQuestions}</p>
            <p class="summary-item"><strong>Total Number of Wrong Questions:</strong> ${totalWrongQuestions} / ${totalQuestions}</p>
            <p class="summary-item"><strong>Total Number of Correct Questions:</strong> ${correctAnswersCount} out of ${totalQuestions}</p>
            <p class="summary-item"><strong>Accuracy:</strong> ${accuracy}%</p>
            <p class="summary-item"><strong>Total Score:</strong> ${score} out of 100</p>
            <p class="summary-item"><strong>Total Time Taken:</strong> ${totalTime} seconds</p>
            <p class="summary-item"><strong>Remark:</strong> ${remark}</p>
            ${isBestRecord ? '<p class="summary-item new-record""><strong>New Record!</strong> Congratulations, you achieved the best result!</p>' : ''}
            <hr class="summary-divider">
        </div>
        <div class="result-detail">
            ${resultPreview}
        </div>
    `;
    
    modal.style.display = 'block';
    storeQuizRecord(quizType, totalQuestions, totalMissedQuestions, totalWrongQuestions, correctAnswersCount, accuracy, score, totalTime);
}


// Function to toggle the display of question details
function toggleDetails(index) {
    // Hide all question details
    selectedQuizData.forEach((_, i) => {
        const detailsElement = document.getElementById(`details${i}`);
        if (detailsElement) {
            detailsElement.style.display = 'none';
        }
    });
    
    // Toggle the selected question's details
    const detailsElement = document.getElementById(`details${index}`);
    if (detailsElement.style.display === 'none' || detailsElement.style.display === '') {
        detailsElement.style.display = 'block';
    } else {
        detailsElement.style.display = 'none';
    }
}




// Function to reset the quiz
function resetQuiz() {
clearInterval(totalTimer);
clearInterval(timer);
currentQuestionIndex = 0;
score = 0;
totalTime = 0;
startContainer.classList.remove('hidden');
quizContainer.classList.add('hidden');
quizElement.classList.remove('hidden');
resetButton.classList.add('hidden');
const modal = document.getElementById('resultsModal');
if (modal) {
    modal.style.display = 'none'; // Hide the modal
} else {
    console.error('Modal element not found');
}
modal.style.display = 'none';
timeTaken = [];
pointsAwarded = [];
document.getElementById('reset').style.display = 'none';
document.getElementById('pauseQuiz').classList.add('hidden');
}
function pauseQuiz() {
    // Stop all timers
    clearInterval(totalTimer);
    clearInterval(timer);

    // Preserve current states
    pauseTotalTimer = totalTime;
    pauseTimeLeft = timeLeft;

    // Update the UI to indicate paused state
    quizContainer.classList.add('blur');
    pauseOverlay.classList.remove('hidden');

    // Disable all interactive elements
    document.querySelectorAll('input[type=radio]').forEach(input => {
        input.disabled = true;
    });

    // Hide buttons that should not be visible during pause
    document.getElementById('pauseQuiz').classList.add('hidden');
    document.getElementById('resumeQuiz').classList.remove('hidden');
}

// Function to resume the quiz
function resumeQuiz() {
    // Restore timers
    totalTime = pauseTotalTimer;
    timeLeft = pauseTimeLeft;

    // Restart the total timer
    totalTimer = setInterval(() => {
        totalTime++;
    }, 1000);

    // Restart the question timer
    startTimer();

    // Update the UI to indicate resumed state
    pauseOverlay.classList.add('hidden');
    quizContainer.classList.remove('blur');
    pauseButton.classList.remove('hidden');

    // Re-enable interactive elements
    document.querySelectorAll('input[type=radio]').forEach(input => {
        input.disabled = false;
    });

    // Show buttons that were hidden during pause
    document.getElementById('pauseQuiz').classList.remove('hidden');
    document.getElementById('resumeQuiz').classList.add('hidden');
}


// Event listeners for pause and resume buttons
pauseButton.addEventListener('click', pauseQuiz);
resumeButton.addEventListener('click', resumeQuiz);
/// Event listeners
startButton.addEventListener('click', startQuiz);
resetButton.addEventListener('click', resetQuiz);
// Event listener to close the modal when the close button is clicked
if (closeModalBtn) {
closeModalBtn.addEventListener('click', resetQuiz);
} else {
console.error('Close button element not found');
}

// Event listener to close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
if (event.target === modal) {
    resetQuiz();
}
});



//___________________________________________________________________
document.addEventListener("DOMContentLoaded", () => {
const startContainer = document.getElementById("start-container");
const instructionContainer = document.getElementById("instruction-container");
const quizContainer = document.getElementById("quiz-container");
const proceedButton = document.getElementById("proceed");
const startButton = document.getElementById("start");
const quizTypeSelect = document.getElementById("quiz-type");
const basicInstructions = document.getElementById("basic-instructions");
const advancedInstructions = document.getElementById("advanced-instructions");

proceedButton.addEventListener("click", () => {
    startContainer.classList.add("hidden");
    instructionContainer.classList.remove("hidden");

    const selectedQuizType = quizTypeSelect.value;
    if (selectedQuizType === "basic") {
        basicInstructions.classList.remove("hidden");
        advancedInstructions.classList.add("hidden");
    } else if (selectedQuizType === "advanced") {
        basicInstructions.classList.add("hidden");
        advancedInstructions.classList.remove("hidden");
    }
});

startButton.addEventListener("click", () => {
    instructionContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
});
});
document.addEventListener('DOMContentLoaded', () => {
const toggleSections = document.querySelectorAll('.toggle-section');

toggleSections.forEach(section => {
    section.addEventListener('click', () => {
        // Get the target section to toggle
        const targetId = section.getAttribute('data-target');
        const targetSection = document.querySelector(targetId);

        // Toggle visibility of the target section
        if (targetSection.style.display === 'block') {
            targetSection.style.display = 'none';
        } else {
            // Hide all sections
            document.querySelectorAll('.section-content').forEach(content => {
                content.style.display = 'none';
            });
            targetSection.style.display = 'block';
        }
    });
});
});
//_____________________________________________
document.addEventListener('DOMContentLoaded', function() {
// Get the total counts from the arrays
const basicQuestionCount = quizData.length;
const advancedQuestionCount = quizDataAdvanced.length;
// Update the total number of questions in the HTML
document.getElementById('total-basic-questions').textContent = basicQuestionCount;
// Update the total number of advanced questions in the HTML
document.getElementById('total-advanced-questions').textContent = advancedQuestionCount;

// Define quiz options with dynamic question counts
const quizOptions = [
    { value: 'basic', text: `Basic (${basicQuestionCount})` },
    { value: 'advanced', text: `Advanced (${advancedQuestionCount})` }
];

const selectElement = document.getElementById('quiz-type');

// Populate the dropdown with options
quizOptions.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    selectElement.appendChild(optionElement);
});
});
//___________________________________________________________________
 // Function to show a container and hide the start container
 function showContainer(containerId) {
    document.getElementById('start-container').classList.add('hidden');
    document.getElementById(containerId).classList.remove('hidden');
    document.getElementById('overlay').classList.add('show');
}

// Function to hide a container and show the start container
function hideContainer(containerId) {
    document.getElementById(containerId).classList.add('hidden');
    document.getElementById('start-container').classList.remove('hidden');
    document.getElementById('overlay').classList.remove('show');
}

// Event listeners for showing and hiding containers
document.getElementById('show-about-me').addEventListener('click', function() {
    showContainer('about-me-container');
});

document.getElementById('show-purpose').addEventListener('click', function() {
    showContainer('purpose-container');
});

document.getElementById('close-about-me').addEventListener('click', function() {
    hideContainer('about-me-container');
});

document.getElementById('close-purpose').addEventListener('click', function() {
    hideContainer('purpose-container');
});

// Optionally, you can also add a click event listener to the overlay
// to close the containers when clicking outside of them
document.getElementById('overlay').addEventListener('click', function() {
    if (!document.querySelector('.info-container').classList.contains('hidden')) {
        hideContainer('about-me-container');
        hideContainer('purpose-container');
    }
});


//____________________________________________________

