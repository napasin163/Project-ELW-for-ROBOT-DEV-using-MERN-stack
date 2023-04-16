import $ from 'jquery'

$(document).ready(function () {
    // Retrieve quiz questions and answers
    var questions = [
        {
            question: "เซนเซอร์ E18-D80NK ตรวจจับวัตถุโดยใช้หลักการใด",
            choices: ["หลักการหักเห", "หลักการกระจาย", "หลักการสะท้อน", "หลักการเดินทางเป็นเส้นตรง"],
            answer: "หลักการสะท้อน"
        },
        {
            question: "เซนเซอร์ E18-D80NK ใช้ไฟกี่โวลต์",
            choices: ["1.5 โวลต์", "5 โวลต์", "12 โวลต์", "220 โวลต์"],
            answer: "5 โวลต์"
        },
        {
            question: "เซอร์โวมอเตอร์ควบคุมการทำงานด้วยสัญญาณใด",
            choices: ["สัญญาณ Phase modulation", "สัญญาณ Amplitude modulation", "สัญญาณ Pulse Code Modulation", "สัญญาณ Pulse Width Modulation"],
            answer: "สัญญาณ Pulse Width Modulation"
        },
        {
            question: "เซอร์โวมอเตอร์คืออะไร",
            choices: ["สามารถสั่งงานผ่านไมโครคอนโทรลเลอร์", "การรวมมอเตอร์ไฟฟ้ากระแสสลับเข้ากับวงจรควบคุม", "เหมาะสำหรับหุ่นยนต์ขนาดใหญ่", "ข้อ A และข้อ B ถูก"],
            answer: "ข้อ A และข้อ B ถูก"
        },
        {
            question: "Passive buzzer module ทำงานแบบใด",
            choices: ["ทำงานแบบ Active Low", "ทำงานแบบ Active High", "ทำงานแบบ Active Low สลับกับการทำงานแบบ Active High", "ไม่มีข้อใดถูก "],
            answer: "ทำงานแบบ Active Low"
        },
        {
            question: "ข้อใดกล่าวถึงการสร้างเสียงด้วย Passive buzzer module ไม่ ถูกต้อง",
            choices: ["สามารถสร้างเสียงได้ด้วยตัวมันเอง", "ไม่สามารถสร้างเสียงได้ด้วยตัวมันเอง", "สร้างเสียงได้ด้วยสัญญาณจาก Arduino", "สร้างเสียงได้ด้วยสัญญาณจาก Raspberry P"],
            answer: "สามารถสร้างเสียงได้ด้วยตัวมันเอง"
        },
        {
            question: "Button switch module เป็นปุ่มกดลักษณะแบบใด",
            choices: ["ลักษณะแบบเลื่อน", "ลักษณะแบบกระดก", "ลักษณะแบบก้านยาว", "ลักษณะแบบกดติดปล่อยดับ"],
            answer: "ลักษณะแบบกดติดปล่อยดับ"
        },
        {
            question: "Button switch module มีโครงสร้างพื้นฐานประกอบด้วยสองส่วนหลัก คืออะไร",
            choices: ["ไดโอดและLED", "ปุ่มกดและLED", "ตัวต้านทานและไดโอด", "ปุ่มกดและตัวต้านทาน"],
            answer: "ปุ่มกดและตัวต้านทาน"
        },
        {
            question: "Adapter PS2 Joystick PlayStation",
            choices: ["หมุนได้ 90 องศา", "หมุนได้ 180 องศา", "หมุนได้ 270 องศา", "หมุนได้ 360 องศา"],
            answer: "หมุนได้ 360 องศา"
        },
        {
            question: "ข้อใดคือประโยชน์ของ Adapter PS2 Joystick PlayStation",
            choices: ["สามารถเชื่อมต่อ PlayStation 2", "สามารถเพิ่มความสะดวกในการเล่นเกม PlayStation 2", "สามารถใช้งานจอยสำหรับเครื่องเล่นเกม PlayStation 2", "ถูกทุกข้อ"],
            answer: "ถูกทุกข้อ"
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
    $("#result-container2").html(resultHtml);

    // Clear local storage and redirect to quiz page when "Try Again" button is clicked
    $(".btn-try-again").click(function () {
        localStorage.clear();
        window.location.href = "/secondquiz";
    });
});