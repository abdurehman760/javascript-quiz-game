document.addEventListener('DOMContentLoaded', function () {
    const profileContainer = document.getElementById('profile-container');
    const startContainer = document.getElementById('start-container');
    const profileNameInput = document.getElementById('profile-name-input');
    const saveNameButton = document.getElementById('save-name-button');
    const nameDropdown = document.getElementById('name-dropdown');
    const dropdownLabel = document.getElementById('dropdown-label');
    const welcomeMessage = document.getElementById('welcome-message');
    const duplicateMessage = document.getElementById('duplicate-message');
    const duplicateMessageText = document.getElementById('duplicate-message-text');
    const duplicateMessageClose = document.getElementById('duplicate-message-close');
    const nameKey = 'names';
    const activeProfileKey = 'activeProfile';

    // Function to clear the active profile
    function clearActiveProfile() {
        localStorage.removeItem(activeProfileKey);
    }

    // Show profile container on page load
    profileContainer.classList.remove('hidden');
    startContainer.classList.add('hidden');

    // Clear the active profile to ensure a clean start
    clearActiveProfile();

    // Populate dropdown with names from localStorage
    updateDropdown();

    saveNameButton.addEventListener('click', function () {
        const name = profileNameInput.value.trim();
        if (name) {
            let storedNames = JSON.parse(localStorage.getItem(nameKey)) || [];
            if (storedNames.includes(name)) {
                // Show message if the name already exists
                duplicateMessage.classList.remove('hidden');
                // Hide message after 5 seconds
                setTimeout(() => {
                    duplicateMessage.classList.add('hidden');
                }, 5000);
            } else {
                // Hide message and proceed with saving
                duplicateMessage.classList.add('hidden');
                storedNames.push(name);
                localStorage.setItem(nameKey, JSON.stringify(storedNames));
                updateDropdown(); // Refresh dropdown list
                // Set the new profile as active
                localStorage.setItem(activeProfileKey, name);
                profileContainer.classList.add('hidden');
                startContainer.classList.remove('hidden');
                updateWelcomeMessage();
            }
        }
    });

    nameDropdown.addEventListener('change', function () {
        const selectedName = nameDropdown.value;
        if (selectedName) {
            // Set the selected profile as active
            localStorage.setItem(activeProfileKey, selectedName);
            profileContainer.classList.add('hidden');
            startContainer.classList.remove('hidden');
            updateWelcomeMessage();
        }
    });

    // Close button for duplicate message
    duplicateMessageClose.addEventListener('click', function () {
        duplicateMessage.classList.add('hidden');
    });

    function updateDropdown() {
        const storedNames = JSON.parse(localStorage.getItem(nameKey)) || [];
        if (storedNames.length > 0) {
            nameDropdown.innerHTML = '<option value="">Select your name</option>'; // Reset dropdown
            storedNames.forEach(name => {
                const option = document.createElement('option');
                option.value = name;
                option.textContent = name;
                nameDropdown.appendChild(option);
            });
            // Set default selection to the active profile
            const activeProfile = localStorage.getItem(activeProfileKey);
            if (activeProfile && storedNames.includes(activeProfile)) {
                nameDropdown.value = activeProfile;
            }
            nameDropdown.classList.remove('hidden');
            dropdownLabel.classList.remove('hidden');
        } else {
            nameDropdown.classList.add('hidden');
            dropdownLabel.classList.add('hidden');
        }
    }

    function updateWelcomeMessage() {
        const activeProfile = localStorage.getItem(activeProfileKey);
        if (activeProfile) {
            welcomeMessage.textContent = `Welcome ${activeProfile} to the JavaScript Quiz Game!`;
        } else {
            welcomeMessage.textContent = 'Welcome to the JavaScript Quiz Game!';
        }
    }

    // Initial welcome message
    updateWelcomeMessage();
});



//__________________________________________________

function initializeGlobalIdCounter() {
    const globalIdKey = 'globalIdCounter';
    let currentId = localStorage.getItem(globalIdKey);
    if (!currentId) {
        currentId = 1;
        localStorage.setItem(globalIdKey, currentId);
    }
    return parseInt(currentId, 10);
}


function storeQuizRecord(quizType, totalQuestions, totalMissedQuestions, totalWrongQuestions, correctAnswersCount, accuracy, score, totalTime) {
    const activeProfileKey = 'activeProfile';
    const profilesKey = 'profiles';
    const globalIdKey = 'globalIdCounter';

    // Retrieve the active profile name
    const activeProfileName = localStorage.getItem(activeProfileKey);
    if (!activeProfileName) {
        console.error('No active profile found.');
        return;
    }

    // Retrieve the profiles from local storage
    const profiles = JSON.parse(localStorage.getItem(profilesKey)) || {};

    // Initialize results for the active profile if not already present
    if (!profiles[activeProfileName]) {
        profiles[activeProfileName] = [];
    }

    // Retrieve or initialize the global ID counter
    let globalIdCounter = initializeGlobalIdCounter();

    // Create record object
    const newResult = {
        id: globalIdCounter,
        quizType,
        totalQuestionsAttempted: totalQuestions - totalMissedQuestions,
        totalMissedQuestions,
        totalWrongQuestions,
        totalCorrectQuestions: correctAnswersCount,
        accuracy,
        totalScore: score,
        totalTime,
        timestamp: new Date().toLocaleString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        })
    };

    // Increment and save the global ID counter
    globalIdCounter++;
    localStorage.setItem(globalIdKey, globalIdCounter);

    // Add the new result to the profile results
    const profileResults = profiles[activeProfileName];
    profileResults.unshift(newResult); // Add new result at the beginning

    // Keep only the latest 10 results
    if (profileResults.length > 10) {
        profileResults.pop(); // Remove the oldest record
    }

    // Save the updated profile results back to local storage
    profiles[activeProfileName] = profileResults;
    localStorage.setItem(profilesKey, JSON.stringify(profiles));
}
 // Variable to track how the previousRecordsModal was opened
 let openedFromResultsModal = false;
 
 document.getElementById('filterSelect').addEventListener('change', function() {
    showPreviousRecords(); // Re-show the records with the selected filter
});



function showPreviousRecords(fromResultsModal = false) {
    // Get the active profile name from local storage
    const activeProfileName = localStorage.getItem('activeProfile');
    if (!activeProfileName) {
        console.error('No active profile found.');
        return;
    }

    // Retrieve profile data from local storage
    const profiles = JSON.parse(localStorage.getItem('profiles')) || {};
    const profileResults = profiles[activeProfileName] || [];

    // Get the table and no records message elements
    const tableBody = document.getElementById('recordsTableBody');
    const noRecordsMessage = document.getElementById('noRecordsMessage');
    const filterContainer = document.querySelector('.filter-container');

   // Clear existing records from the table
   tableBody.innerHTML = '';
   recordsTable.style.display = 'table'; // Ensure table is visible initially
   noRecordsMessage.style.display = 'none'; // Hide no records message initially
   filterContainer.style.display = 'flex'; // Ensure filter container is visible initially

   // Check if there are no records
   if (profileResults.length === 0) {
       recordsTable.style.display = 'none'; // Hide table if no records
       filterContainer.style.display = 'none'; // Hide filter container if no records
       noRecordsMessage.style.display = 'block'; // Show no records message
       document.getElementById('previousRecordsModal').style.display = 'block';
       return;
   }

    // Get the selected filter value from the dropdown
    const filter = document.getElementById('filterSelect').value;

    // Convert date strings to Date objects for accurate sorting
    profileResults.forEach(record => {
        record.dateObject = new Date(record.timestamp.replace(/ at /, ' '));

        // Determine the remark based on score, accuracy, and total time
        let remark = '';
        // Define time thresholds (you can adjust these values as needed)
        const timeThresholds = {
            excellent: 60, // seconds
            great: 120,    // seconds
            good: 180,     // seconds
            average: 240   // seconds
        };

        if (record.totalScore >= 90 && record.accuracy >= 90) {
            if (record.totalTime <= timeThresholds.excellent) {
                remark = 'Excellent';
            } else if (record.totalTime <= timeThresholds.great) {
                remark = 'Great Job';
            } else if (record.totalTime <= timeThresholds.good) {
                remark = 'Good';
            } else if (record.totalTime <= timeThresholds.average) {
                remark = 'Average';
            } else {
                remark = 'Needs Improvement';
            }
        } else if (record.totalScore >= 80 && record.accuracy >= 80) {
            if (record.totalTime <= timeThresholds.great) {
                remark = 'Great Job';
            } else if (record.totalTime <= timeThresholds.good) {
                remark = 'Good';
            } else if (record.totalTime <= timeThresholds.average) {
                remark = 'Average';
            } else {
                remark = 'Needs Improvement';
            }
        } else if (record.totalScore >= 70 && record.accuracy >= 70) {
            if (record.totalTime <= timeThresholds.good) {
                remark = 'Good';
            } else if (record.totalTime <= timeThresholds.average) {
                remark = 'Average';
            } else {
                remark = 'Needs Improvement';
            }
        } else if (record.totalScore >= 50 && record.accuracy >= 50) {
            if (record.totalTime <= timeThresholds.average) {
                remark = 'Average';
            } else {
                remark = 'Needs Improvement';
            }
        } else {
            remark = 'Needs Improvement';
        }
        record.remark = remark;
    });

    // Define remark ranking for sorting
    const remarkRanking = {
        'Needs Improvement': 1,
        'Average': 2,
        'Good': 3,
        'Great Job': 4,
        'Excellent': 5
    };

    // Sort records based on the selected filter
    profileResults.sort((a, b) => {
        switch (filter) {
            case 'dateDesc':
                return b.dateObject - a.dateObject; // Newest first
            case 'dateAsc':
                return a.dateObject - b.dateObject; // Oldest first
            case 'scoreDesc':
                return b.totalScore - a.totalScore; // Highest score first
            case 'scoreAsc':
                return a.totalScore - b.totalScore; // Lowest score first
            case 'accuracyDesc':
                return b.accuracy - a.accuracy; // Highest accuracy first
            case 'accuracyAsc':
                return a.accuracy - b.accuracy; // Lowest accuracy first
            case 'questionsAttemptedDesc':
                return b.totalQuestionsAttempted - a.totalQuestionsAttempted; // Most questions attempted first
            case 'questionsAttemptedAsc':
                return a.totalQuestionsAttempted - b.totalQuestionsAttempted; // Fewest questions attempted first
            case 'wrongQuestionsDesc':
                return b.totalWrongQuestions - a.totalWrongQuestions; // Most wrong questions first
            case 'wrongQuestionsAsc':
                return a.totalWrongQuestions - b.totalWrongQuestions; // Fewest wrong questions first
            case 'missedQuestionsDesc':
                return b.totalMissedQuestions - a.totalMissedQuestions; // Most missed questions first
            case 'missedQuestionsAsc':
                return a.totalMissedQuestions - b.totalMissedQuestions; // Fewest missed questions first
            case 'timeTakenDesc':
                return b.totalTime - a.totalTime; // Longest time taken first
            case 'timeTakenAsc':
                return a.totalTime - b.totalTime; // Shortest time taken first
            case 'remarkDesc':
                return remarkRanking[b.remark] - remarkRanking[a.remark]; // Remark from good to bad
            case 'remarkAsc':
                return remarkRanking[a.remark] - remarkRanking[b.remark]; // Remark from bad to good
            default:
                return b.id - a.id; // Default: Sort by ID in descending order
        }
    });

    // Remove any existing highlight classes from table headers and cells
    const headers = document.querySelectorAll('#recordsTable thead th');
    headers.forEach(header => header.classList.remove('highlight'));

    // Highlight the appropriate column
    let highlightIndex;
    switch (filter) {
        case 'dateDesc':
        case 'dateAsc':
            highlightIndex = 10; // Timestamp column index
            break;
        case 'scoreDesc':
        case 'scoreAsc':
            highlightIndex = 7; // Total Score column index
            break;
        case 'accuracyDesc':
        case 'accuracyAsc':
            highlightIndex = 6; // Accuracy column index
            break;
        case 'questionsAttemptedDesc':
        case 'questionsAttemptedAsc':
            highlightIndex = 2; // Questions Attempted column index
            break;
        case 'wrongQuestionsDesc':
        case 'wrongQuestionsAsc':
            highlightIndex = 3; // Wrong Questions column index
            break;
        case 'missedQuestionsDesc':
        case 'missedQuestionsAsc':
            highlightIndex = 4; // Missed Questions column index
            break;
        case 'timeTakenDesc':
        case 'timeTakenAsc':
            highlightIndex = 8; // Total Time column index
            break;
        case 'remarkDesc':
        case 'remarkAsc':
            highlightIndex = 9; // Remark column index
            break;
        default:
            highlightIndex = null;
    }

    // Add the highlight class to the appropriate header
    if (highlightIndex !== null) {
        headers[highlightIndex].classList.add('highlight');
    }

    profileResults.forEach(record => {
        const row = document.createElement('tr');
        // Determine remark class based on remark
        let remarkClass;
        let remarkTitle;
        switch (record.remark) {
            case 'Excellent':
                remarkClass = 'remark-excellent';
                remarkTitle = 'Excellent: Score of 90 or above with accuracy of 90% or more, and achieved in less than 60 seconds.';
                break;
            case 'Great Job':
                remarkClass = 'remark-great-job';
                remarkTitle = 'Great Job: Score of 80 or above with accuracy of 80% or more, and achieved in less than 120 seconds.';
                break;
            case 'Good':
                remarkClass = 'remark-good';
                remarkTitle = 'Good: Score of 70 or above with accuracy of 70% or more, and achieved in less than 180 seconds.';
                break;
            case 'Average':
                remarkClass = 'remark-average';
                remarkTitle = 'Average: Score of 50 or above with accuracy of 50% or more, and achieved in less than 240 seconds.';
                break;
            case 'Needs Improvement':
                remarkClass = 'remark-needs-improvement';
                remarkTitle = 'Needs Improvement: Below average performance with a score under 50% and accuracy below 50%.';
                break;
            default:
                remarkClass = '';
                remarkTitle = '';
        }
        
        row.innerHTML = `
            <td>${record.id}</td>
            <td>${record.quizType.charAt(0).toUpperCase() + record.quizType.slice(1)}</td>
            <td>${record.totalQuestionsAttempted} / 10</td>
            <td>${record.totalWrongQuestions} / 10</td>
            <td>${record.totalMissedQuestions} / 10</td>
            <td>${record.totalCorrectQuestions} / 10</td>
            <td>${record.accuracy}%</td>
            <td>${record.totalScore} / 100</td>
            <td>${formatTime(record.totalTime)}</td>
            <td class="remark-cell ${remarkClass}" data-tooltip="${remarkTitle}">${record.remark}</td>
            <td>${record.timestamp}</td>
        `;

        // Apply highlight class to the relevant cell
        if (highlightIndex !== null) {
            const cells = row.children;
            cells[highlightIndex].classList.add('highlight');
        }
        
        tableBody.appendChild(row);
    });

    // Add animation class for feedback
    const table = document.getElementById('recordsTable');
    table.classList.add('sort-feedback');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        table.classList.remove('sort-feedback');
    }, 500);

    // Track if the modal was opened from the results modal
    openedFromResultsModal = fromResultsModal;
    // Display the previous records modal
    document.getElementById('previousRecordsModal').style.display = 'block';
}





//  * Function to format time in seconds into a human-readable format.


function formatTime(seconds) {
    if (seconds < 60) {
        return `${seconds} sec`; // For time less than a minute
    } else {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes} min ${remainingSeconds} sec`; // For time more than a minute
    }
}

// Event listener for showing previous records from the start container
document.getElementById('showPreviousRecordsBtn').addEventListener('click', function() {
    showPreviousRecords(); // Open from start container
});

// Event listener for showing previous records from the results modal
document.getElementById('showPreviousRecordsBtnInResultsModal').addEventListener('click', function() {
    // Close the results modal
    document.getElementById('resultsModal').style.display = 'none';
    
    // Show the previous records modal
    showPreviousRecords(true); // Open from results modal
});

// Close Previous Records Modal
document.getElementById('closePreviousRecordsModalBtn').addEventListener('click', function() {
    const previousRecordsModal = document.getElementById('previousRecordsModal');
    previousRecordsModal.style.display = 'none';

    // Reload the app if it was opened from the results modal
    if (openedFromResultsModal) {
        location.reload();
    }
});


document.getElementById('closeResultsModalBtn').addEventListener('click', function() {
    // Hide the results modal
    document.getElementById('resultsModal').style.display = 'none';
    
    // Reload the app
    location.reload();
});


