import './result.css';
import './scrpitForResult.js';


const Result = () => {
    return (
        <body>
            <div class="container">
                <h1>Quiz Results</h1>
                <div id="result-container"></div>
                <button type="button" class="btn btn-primary btn-try-again">Try Again</button>
            </div>
            <script src="scriptForResult.js"></script>
        </body>

    )
}

export default Result;