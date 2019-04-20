var questions = [
    {
        question: "What is the capital of Massachusetts?",
        answers: ["A. Worcester", "B. Boston", "C. Springfield", "D. Lowell"],
        correctAnswer: "B. Boston"
    },
    {
        question: "What is the capital of Kansas?",
        answers: ["A. Kansas City", "B. Wichita", "C. Topeka", "D. Overland Park"],
        correctAnswer: "C. Topeka"
    },
    {
        question: "What is the capital of Iowa?",
        answers: ["A. Des Moines", "B. Iowa City", "C. Davenport", "D. Cedar Rapids"],
        correctAnswer: "A. Des Moines"
    }
]

var timer;

var game = {
    counter: 60,
    correct: 0,
    incorrect: 0,

    countdown: function () {
        game.counter--
        $("#timer").html(game.counter)
        if (game.counter === 0) {
            game.done()
        }
    },
    start: function () {
        game.counter = 60
        $("#quiz").html("")
        timer = setInterval(game.countdown, 1000)
        for (var i = 0; i < questions.length; i++) {
            $("#quiz").append("<h2>" + questions[i].question + "</h2>")
            $("#quiz").append("<input type='radio' name='question-0'>" + questions[i].answers[0] + "<br>")
            $("#quiz").append("<input type='radio' name='question-1'>" + questions[i].answers[1] + "<br>")
            $("#quiz").append("<input type='radio' name='question-2'>" + questions[i].answers[2] + "<br>")
            $("#quiz").append("<input type='radio' name='question-3'>" + questions[i].answers[3] + "<br><br>")
        }
        $("#quiz").append("<button id='finish'>Finish</button>")
    },
    done: function () {
        clearInterval(timer)
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() === questions[0].correctAnswer) {
                game.correct++
            } else {
                game.incorrect++
            }

        })
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() === questions[1].correctAnswer) {
                game.correct++
            } else {
                game.incorrect++
            }

        })
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() === questions[2].correctAnswer) {
                game.correct++
            } else {
                game.incorrect++
            }

        })

        this.result()

    },
    result: function () {
        $("#quiz").html("<h2>You're done!</h2>")
        $("#quiz").append("<h3>Correct answers: " + this.correct + "</h3>")
        $("#quiz").append("<h3>Incorrect answers: " + this.incorrect + "</h3>")
        $("#quiz").append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>")
    }
}

$("#start").on("click", function () {
    game.start()
})

$(document).on("click", "#finish", function () {
    game.done()
}
)