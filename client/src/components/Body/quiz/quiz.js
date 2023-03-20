import './quiz.css';
import './scriptForQuiz.js';


const Quiz = () => {
    return (
        <body>
            <div className="container">
                <h1>Quiz</h1>
                <form id="quiz-form" method="post" action="result.html">
                    <div id="question-container"></div>
                    <button type="submit" className="btn btn-primary btn-submit">Submit</button>
                </form>
            </div>
            <script src="scriptForQuiz.js"></script>
        </body>

    )
}

export default Quiz;