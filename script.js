const questions = [
    { question: "Όλα τα ζωντανά όντα αποτελούνται από κύτταρα.", type: "truefalse", correct: "true" },
    { question: "Τα κύτταρα δεν έχουν πυρήνα.", type: "truefalse", correct: "false" },
    { question: "Ποιο είναι το βασικό δομικό στοιχείο των οργανισμών;", type: "multiple", options: ["Άτομα", "Κύτταρα", "Μόρια"], correct: "Κύτταρα" },
    { question: "Το DNA βρίσκεται...", type: "multiple", options: ["Στην κυτταρική μεμβράνη", "Στον πυρήνα", "Στο κυτταρόπλασμα"], correct: "Στον πυρήνα" },
    { question: "Τα μιτοχόνδρια είναι υπεύθυνα για...", type: "multiple", options: ["Αποθήκευση ενέργειας", "Παραγωγή ενέργειας", "Μεταφορά ουσιών"], correct: "Παραγωγή ενέργειας" }
];

function startQuiz() {
    document.getElementById("theory").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    let quizForm = document.getElementById("quizForm");
    quizForm.innerHTML = "";

    questions.forEach((q, index) => {
        let div = document.createElement("div");
        div.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

        if (q.type === "truefalse") {
            div.innerHTML += `
                <input type="radio" name="q${index}" value="true"> Σωστό
                <input type="radio" name="q${index}" value="false"> Λάθος
            `;
        } else {
            q.options.forEach(option => {
                div.innerHTML += `
                    <input type="radio" name="q${index}" value="${option}"> ${option}
                `;
            });
        }
        quizForm.appendChild(div);
    });
}

function checkAnswers() {
    let correct = 0;
    let userAnswers = [];

    questions.forEach((q, index) => {
        let selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected) {
            userAnswers.push(selected.value);
            if (selected.value === q.correct) correct++;
        } else {
            userAnswers.push(null);
        }
    });

    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";

    document.getElementById("score").innerText = `Σωστές απαντήσεις: ${correct} / ${questions.length}`;
    
    if (correct >= questions.length - 2) {
        document.getElementById("feedback").innerText = "Μπράβο για την προσπάθεια!";
    } else {
        document.getElementById("feedback").innerText = "Δοκίμασε ξανά!";
    }
}

function retryQuiz() {
    document.getElementById("result").style.display = "none";
    document.getElementById("quiz").style.display = "block";
}