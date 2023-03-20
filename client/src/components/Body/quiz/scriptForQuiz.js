import $ from 'jquery';

$(document).ready(function () {
    // Define quiz questions and answers
    var questions = [
        {
            question: "บอร์ดไมโครบิตมีจุดเด่นด้านการเขียนโปรแกรมที่ง่ายโดยใช้ภาษาแบบใด",
            choices: ["ภาษาซี", "ภาษาเบสิก", "ภาษาโคบอล", "ภาษาบล็อก"],
            answer: "ภาษาบล็อก"
        },
        {
            question: "ข้อใด ไม่มี ในบอร์ดไมโครบิต",
            choices: ["บลูทูธ", "หลอด LED", "เซ็นเซอร์วัดอุณหภูมิ", "เซ็นเซอร์แม่เหล็กโลก"],
            answer: "เซ็นเซอร์วัดอุณหภูมิ"
        },
        {
            question: "บอร์ด Arduino UNO R3 มี port digital INPUT/OUTPUT กี่ขา",
            choices: ["6", "8", "12", "14"],
            answer: "14"
        },
        {
            question: "บอร์ด Arduino UNO R3 สร้างมาจากไอซีไมโครคอนโทรลเลอร์ตระกูลอะไร",
            choices: ["AVR", "PIC", "MSP", "MSC-51"],
            answer: "AVR"
        },
        {
            question: "เซ็นเซอร์ HC-SR04 อาศัยการทำงานของคลื่นใด",
            choices: ["คลื่นวิทย", "คลื่นเสียง", "คลื่นแสง", "คลื่นไมโครเวฟ"],
            answer: "คลื่นเสียง"
        },
        {
            question: "ข้อใด ไม่ได้ หมายถึง คลื่นอัลตร้าโซนิค",
            choices: ["เป็นคลื่นที่มีทิศทางไม่แน่นอน", "สามารถเดินทางผ่านตัวกลางได", "จำเป็นต้องอาศัยตัวกลางในการเดินทาง", "ความถี่สูงกว่าที่หูมนุษย์จะสามารถได้ยิน"],
            answer: "เป็นคลื่นที่มีทิศทางไม่แน่นอน"
        },
        {
            question: "เมื่อตรวจจับวัตถุด้วยเซนเซอร์ TCRT5000 หากวัตถุอยู่ใกล้จะมีแสงสะท้อนกลับมาอย่างไร",
            choices: ["แสงสะท้อนกลับมามากกว่าวัตถุที่อยู่ไกล", "แสงสะท้อนกลับมาน้อยกว่าวัตถุที่อยู่ไกล", "แสงสะท้อนกลับมาน้อยเท่ากับวัตถุที่อยู่ไกล", "ไม่มีแสงสะท้อนเลย"],
            answer: "แสงสะท้อนกลับมามากกว่าวัตถุที่อยู่ไกล"
        },
        {
            question: "การใช้เซนเซอร์ TCRT5000 กับ Arduino ให้เอาต์พุตแบบอะนาล็อกซึ่งอ่านค่าได้เป็นตัวเลขเท่าใด",
            choices: ["0 - 128", "0 - 256", "0 - 512", "0 - 1023"],
            answer: "0 - 1023"
        },
        {
            question: "เซนเซอร์ F249 เมื่อมีวัตถุมาบังที่เซนเซอร์เอาต์พุตจะเป็นค่าใด ",
            choices: ["ค่า 0", "ค่า 1", "ค่า 0000", "ค่า 0001"],
            answer: "ค่า 1"
        },
        {
            question: "เซนเซอร์ F249 ไม่ สามารถนำไปประยุกต์ใช้ในงานใด",
            choices: ["การนับจำนวน", "การปรับค่าเสียงเพลง", "การทำเครื่องรับเหรียญ", "การนับรอบการหมุนของมอเตอร"],
            answer: "การปรับค่าเสียงเพลง"
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
        $("#question-container").append(question);
    }

    // Store user answers in local storage
    $("#quiz-form").submit(function (event) {
        event.preventDefault();
        var userAnswers = {};
        for (var i = 0; i < questions.length; i++) {
            var selectedChoice = $("input[name='q" + i + "']:checked");
            if (selectedChoice.length > 0) {
                userAnswers["q" + i] = selectedChoice.val();
            }
        }
        localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
        window.location.href = "/result";
    });
});