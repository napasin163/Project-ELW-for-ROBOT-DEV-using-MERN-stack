import $ from 'jquery';

$(document).ready(function () {
    // Define quiz questions and answers
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

    // Display quiz questions and choices
    for (var i = 0; i < questions.length; i++) {
        var question = $("<div>").addClass("question");
        question.append("<h3>Question " + (i + 1) + "</h3>");
        question.append("<p>" + questions[i].question + "</p>");

        var choices = $("<div>").addClass("choices");

        for (var j = 0; j < questions[i].choices.length; j++) {
            var choice = $("<div>").addClass("radio");
            choice.append("<label>");
            choice.find("label").append("<input type='radio' name='q" + i + "' value='" + questions[i].choices[j] + "'>");
            choice.find("label").append(questions[i].choices[j]);
            choices.append(choice);
        }

        question.append(choices);
        $("#question-container2").append(question);
    }

    // Store user answers in local storage
    $("#quiz-form2").submit(function (event) {
        event.preventDefault();
        var userAnswers = {};
        for (var i = 0; i < questions.length; i++) {
            var selectedChoice = $("input[name='q" + i + "']:checked");
            if (selectedChoice.length > 0) {
                userAnswers["q" + i] = selectedChoice.val();
            }
        }
        localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
        window.location.href = "/secondresult";
    });
    
    function areAllAnswersCorrect() {
        for (var i = 0; i < questions.length; i++) {
          var selectedChoice = $("input[name='q" + i + "']:checked");
          if (selectedChoice.length === 0 || selectedChoice.val() !== questions[i].answer) {
            return false;
          }
        }
        return true;
      }
    
      $("#quiz-form2").submit(function (event) {
        event.preventDefault();
    
        if (areAllAnswersCorrect()) {
          window.location.href = '/thirdquiz';
        } else {
          // Show a message or display some indication that not all answers are correct
          alert('คุณยังไม่ผ่านการทดสอบ เสียใจด้วย :(');
        }
      });
});