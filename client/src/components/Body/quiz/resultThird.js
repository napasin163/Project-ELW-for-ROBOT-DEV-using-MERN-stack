import './result.css';
import $ from 'jquery'


const ThirdResult = () => {

    $(document).ready(function () {
        // Retrieve quiz questions and answers
        var questions = [
            {
                question: "ข้อใดกล่าวถึง relay module 5V 2 channel ไม่ ถูกต้อง",
                choices: ["มีความน่าเชื่อถือสูง", "สามารถควบคุมไฟฟ้าได้สูงสุด 2 ช่อง", "ต้องใช้วิธีการเขียนโค้ดคอมพิวเตอร์ขั้นสูง", "อุปกรณ์ที่ใช้สำหรับควบคุมการเปิด-ปิดวงจรไฟฟ้า"],
                answer: "ต้องใช้วิธีการเขียนโค้ดคอมพิวเตอร์ขั้นสูง"
            },
            {
                question: "Relay module 5V 2 channel เหมาะสำหรับใช้งานในโปรเจคอะไร",
                choices: ["โปรเจคเกี่ยวกับการสร้างโมดูล IoT", "โปรเจคเกี่ยวกับการปรับแต่งรถยนต์", "โปรเจคเกี่ยวกับการสร้างแสงสว่าง LED", "โปรเจคเกี่ยวกับการสร้างระบบไฟฟ้าในบ้าน"],
                answer: "โปรเจคเกี่ยวกับการสร้างโมดูล IoT"
            },
            {
                question: "Motor Driver Module (L298N) มีความสามารถในการควบคุมแรงดันได้สูงสุดกี่ช่อง",
                choices: ["1 ช่อง", "2 ช่อง", "3 ช่อง", "4 ช่อง"],
                answer: "2 ช่อง"
            },
            {
                question: "Motor Driver Module (L298N) มีตัวจ่ายไฟที่รองรับการเชื่อมต่อแบบใด",
                choices: ["แบบ DC", "แบบ AC", "แบบ CC", "แบบ DD"],
                answer: "แบบ DC"
            },
            {
                question: "คำว่า I2C ย่อมาจากอะไร",
                choices: ["Inter- Identify Circuit", "Inter-Integrated Circuit", "Inter- Image Circuit", "Image -Integrated Circuit"],
                answer: "Inter-Integrated Circuit"
            },
            {
                question: "ขนาดหน้าจอขนาด 16x2 ของ Inferred I2C LCD หมายความว่าอย่างไร",
                choices: ["มีแถว 2 แถว แต่ละแถวมี 16 ตัวอักษร", "มีแถว 16 แถว แต่ละแถวมี 2 ตัวอักษร", "มีแถว 2 แถว แต่ละแถวมี 32 ตัวอักษร", "มีแถว 32 แถว แต่ละแถวมี 2 ตัวอักษร"],
                answer: "มีแถว 2 แถว แต่ละแถวมี 16 ตัวอักษร"
            },
            {
                question: "ถ้าหากต้องการให้มีการโชว์ข้อความบนหน้าจอตลอดควรเขียนอยู่ในคำสั่งใด  (micro:bit)",
                choices: ["forever", "on start", "on button A pressed", "on shake"],
                answer: "forever"
            },
            {
                question: "OLED 128x64 มักจะนำไปใช้ในการแสดงผลข้อมูลต่าง ๆ ในอุปกรณ์ ยกเว้น ข้อใด",
                choices: ["เก้าอี้ไม้", "ตู้โชว์สินค้า", "โทรศัพท์มือถือ", "นาฬิกาอัจฉริยะ"],
                answer: "เก้าอี้ไม้"
            },
            {
                question: "OLED 128x64 ใช้เทคโนโลยีใดในการแสดงผล",
                choices: ["เทคโนโลยี Organic Light Emitting Diode", "เทคโนโลยี Official Light Emitting Diode", "เทคโนโลยี Operate Light Emitting Diode", "เทคโนโลยี Opposite Light Emitting Diode"],
                answer: "เทคโนโลยี Organic Light Emitting Diode"
            },
            {
                question: "ถ้าหากต้องมีการโชว์ข้อความบนหน้าจอ จะต้องระบุส่วนใดเป็นส่วนแรกก่อนเริ่มการทำงาน(micro:bit)",
                choices: ["ขนาดของหน้าจอ", "ชนิดของ ข้อมูล", "สั่งเปิดหน้าจอ", "คำสั่งเคลียร์หน้าจอ"],
                answer: "ขนาดของหน้าจอ"
            }
        ];
        // Retrieve user answers from local storage
        var userAnswers = JSON.parse(localStorage.getItem("userAnswers"));

        // Calculate score and display results
        var score = 0;
        var resultHtml = "";
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var userAnswer = userAnswers["q" + i];
            var isCorrect = userAnswer == question.answer;
            if (isCorrect) {
                score++;
            }
            var answerHtml = "<div class='answer " + (isCorrect ? "correct" : "incorrect") + "'>";
            answerHtml += "<p><strong>Question " + (i + 1) + ":</strong> " + question.question + "</p>";
            answerHtml += "<p><strong class='red'>Your Answer:</strong> " + (userAnswer ? userAnswer : "No answer") + "</p>";
            answerHtml += "<p><strong class='green'>Correct Answer:</strong> " + question.answer + "</p>";
            answerHtml += "</div>";
            resultHtml += answerHtml;
        }
        resultHtml += "<p><strong>Your Score:</strong> " + score + "/" + questions.length + "</p>";
        $("#result-container3").html(resultHtml);

        // Clear local storage and redirect to quiz page when "Try Again" button is clicked
        $(".btn-try-again").click(function () {
            localStorage.clear();
            window.location.href = "/thirdquiz";
        });
    });
    return (
        <body>
            <div class="container">
                <h1>Quiz Results</h1>
                <div id="result-container3"></div>
                <button type="button" class="btn btn-primary btn-try-again mb-3">Try Again</button>
            </div>
            <script src="scriptForThirdResult.js"></script>
        </body>

    )
}

export default ThirdResult;