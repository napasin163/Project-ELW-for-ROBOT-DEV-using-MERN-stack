import $ from 'jquery';

$(document).ready(function () {
    // Define quiz questions and answers
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
        $("#question-container3").append(question);
    }

    // Store user answers in local storage
    $("#quiz-form3").submit(function (event) {
        event.preventDefault();
        var userAnswers = {};
        for (var i = 0; i < questions.length; i++) {
            var selectedChoice = $("input[name='q" + i + "']:checked");
            if (selectedChoice.length > 0) {
                userAnswers["q" + i] = selectedChoice.val();
            }
        }
        localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
        window.location.href = "/thirdresult";
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
    
      $("#quiz-form3").submit(function (event) {
        event.preventDefault();
    
        if (areAllAnswersCorrect()) {
          window.location.href = '/congrats';
        } else {
          // Show a message or display some indication that not all answers are correct
          alert('คุณยังไม่ผ่านการทดสอบ เสียใจด้วย :(');
        }
      });
});