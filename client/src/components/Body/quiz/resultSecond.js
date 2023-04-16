import './result.css';
import './scriptForSecondResult.js';


const SecondResult = () => {
    return (
        <body>
            <div class="container">
                <h1>Quiz Results</h1>
                <div id="result-container2"></div>
                <button type="button" class="btn btn-primary btn-try-again mb-3">Try Again</button>
            </div>
            <script src="scriptForSecondResult.js"></script>
        </body>

    )
}

export default SecondResult;