import './quiz.css';
import './scriptForQuiz.js';


const Quiz = () => {
    return (
        <body>
            <div class="container">
                <h1>Bootstrap Multiple Choice Quiz</h1>
                <form id="quiz-form" method="post" action="result.html">
                    <div id="question-container"></div>
                    <button type="submit" class="btn btn-primary btn-submit">Submit</button>
                </form>
            </div>
            <script src="scriptForQuiz.js"></script>
        </body>

    )
}

export default Quiz;