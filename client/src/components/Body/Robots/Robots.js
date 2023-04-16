import { Outlet, Link } from "react-router-dom";
import Highlight from 'react-highlight'

const Robots = () => {
    return (
        <body>
            <main>
                <div class="px-4 pt-5 my-5 text-center">
                    <h1 class="display-4 fw-bold blackText">Robots</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4 blackText">เครื่องยนต์ชนิดหนึ่งที่มีลักษณะโครงสร้างและรูปร่างแตกต่างกันไปตามวัตถุประสงค์ หุ่นยนต์ในแต่ละประเภทจะมีหน้าที่การทำงานในด้านต่าง ๆ ตามการควบคุมโดยตรงของมนุษย์ หรืออาจมีการตั้งค่าให้หุ่นยนต์สามารถตัดสินใจได้เองในระดับใดระดับหนึ่ง การควบคุมระบบต่าง ๆ ในการสั่งงานระหว่างหุ่นยนต์และมนุษย์ สามารถทำได้โดยทางอ้อมและอัตโนมัติ โดยทั่วไปหุ่นยนต์ถูกสร้างขึ้นเพื่อสำหรับงานที่มีความยากลำบากหรืออันตรายเช่น งานสำรวจในพื้นที่บริเวณแคบ งานสำรวจในบริเวณที่เกิดภัยพิบัติ หรืองานสำรวจบนผิวของดวงจันทร์หรือดาวเคราะห์ต่าง ๆ ปัจจุบันเทคโนโลยีของหุ่นยนต์เจริญก้าวหน้าอย่างรวดเร็ว หุ่นยนต์เริ่มเข้ามามีบทบาทกับชีวิตของมนุษย์ในหลากหลายด้าน เช่น ด้านอุตสาหกรรมการผลิต ด้านการแพทย์ ด้านงานสำรวจทั้งในโลกเราและงานสำรวจในอวกาศ หรือด้านการบันเทิง เช่น หุ่นยนต์ที่ถูกสร้างขึ้นเพื่อเป็นเครื่องเล่นของมนุษย์ ปัจจุบันนี้ได้มีการพัฒนาให้หุ่นยนต์นั้นมีลักษณะที่คล้ายมนุษย์มากขึ้นเพื่อผลทางจิตวิทยาในการอาศัยอยู่ร่วมกันกับมนุษย์ในชีวิตประจำวัน</p>

                    </div>
                    <button type="button" class="btn btn-success btn-lg px-4 me-sm-3 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Datasheet
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Datasheet</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src="https://cdn.discordapp.com/attachments/768084656465117227/1090816877481169016/86D26C5E-69EF-404B-811F-4262175D61FE-removebg-preview.png" alt="datasheet" width="100%" height="100%"></img>
                                </div>
                                <h3>จะมีการต่ออุปกรณ์ภายนอกเข้ากับ บอร์ดไมโครคอนซิลเลอร์ ดังนี้ </h3>
                                <h4>Drive Motor L298N </h4>
                                <p>ใช้สำหรับควบคุมและขับเคลื่อนมอเตอร์ โดยมีการต่อไฟเลี้ยงของมอเตอร์จากช่อง Vin ของไมโครคอนโทรลเลอร์ 
                                  และมีช่องควบคุมมอเตอร์ 4 ช่องคือ NI1 = D8, NI2 = D9, NI3 = D12, และ NI4 = D13 สามารถสั่งให้หุ่นยนต์เดินหน้าหรือถอยหลังได้ 
                                  และกำหนดความเร็วของมอเตอร์ผ่านช่อง ENA = D~10  , FNR = D~11  โดยตั้งค่าได้ด้วยตัวควบคุมความเร็ว (PWM) ที่มีอยู่ในช่อง ENA และช่อง ENB </p>
                                  <br></br>
                                <h4>Sensor Infrared TCRT5000 </h4>
                                <p>ใช้สำหรับตรวจจับความเข้มของแสงอินฟราเรดที่สะท้อนกลับมาจากพื้นหรือวัตถุ โดยใช้เซ็นเซอร์ทั้งหมด 2 ตัว ที่ต้องการไฟเลี้ยง 5V จากบอร์ดไมโครคอนโทรลเลอร์ 
                                  และใช้ช่องสัญญาณเพื่ออ่านค่าจากเซ็นเซอร์ โดยอ่านค่าได้โดยเซ็นเซอร์ข้างซ้าย = ขา D2 และ เซ็นเซอร์ข้างขวา = D3 ในบอร์ดไมโครคอนโทรลเลอร์</p>
                                  <br></br>
                                <h4>Button switch module </h4>
                                <p>ใช้สำหรับตรวจจับสัญญาณจากปุ่มกด และเมื่อมีการกดปุ่มจะส่งสัญญาณไปยังไมโครคอนโทรลเลอร์ที่ต้องการไฟเลี้ยง 
                                  ซึ่งโมดูลจะใช้ไฟเลี้ยง 5V จากบอร์ดไมโครคอนโทรลเลอร์ จะต่อขาสัญญาณของโมดูลเข้ากับขา D7 ในบอร์ดไมโครคอนโทรลเลอร์ </p>
                                  <br></br>
                                <h4>Passive buzzer module </h4>
                                <p>ใช้สำหรับส่งเสียงแจ้งเตือนโดยการสร้างเสียงจากการส่งกระแสไฟฟ้าไปยังตัว buzzer โดย ขาสัญญาณต่อเข้ากับ ขา D4 ในบอร์ดไมโครคอนโทรลเลอร์ต้องการไฟเลี้ยง 
                                  ซึ่งโมดูลจะใช้ไฟเลี้ยง 5V จากบอร์ดไมโครคอนโทรลเลอร์ </p>
                                  <br></br>
                                <h4>Ultrasonic Senser Module HC-SR04 </h4>
                                <p>ใช้สำหรับตรวจจับระยะทางโดยส่งสัญญาณ Ultrasonic ไปยังตัวเซ็นเซอร์ และรับสัญญาณที่ถูกส่งกลับมา โดยใช้ขา Trig เพื่อส่งสัญญาณ Ultrasonic 
                                  และขา Echo เพื่อรับสัญญาณที่ถูกส่งกลับมา ขาสัญญาณ Trig ต่อเข้ากับขา D4 และขาสัญญาณ Echo ต่อเข้ากับขา D5 ในบอร์ดไมโครคอนโทรลเลอร์ 
                                  โมดูลจะใช้ไฟเลี้ยง 5V จากบอร์ดไมโครคอนโทรลเลอร์ </p>
                                  <br></br>
                                <h4>Servo motor MG90S </h4>
                                <p>มีการเชื่อมต่อกับไมโครคอนโทรลเลอร์ด้วยสาย 3 เส้น ซึ่งประกอบด้วย ขา GND ขาไฟเลี้ยง 5V และ ขาสัญญาณ โดยในที่นี้ 
                                  ขาสัญญาณจะต้องเชื่อมต่อกับขา PWM บนบอร์ดไมโครคอนโทรลเลอร์ ซึ่งในที่นี้จะใช้ขา A0 ในบอร์ดไมโครคอนโทรลเลอร์ เป็นขาสัญญาณของ Servo motor MG90S </p>
                                  
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary btn-lg px-4 me-sm-3" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="overflow-hidden xd">
                        <div class="container px-5">
                            <img src="https://cdn.discordapp.com/attachments/768084656465117227/1090816852743176202/Robot.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt=" 123" width="900" height="500" loading="lazy"></img>
                        </div>
                    </div>
                    <br></br>

                    <hr class="featurette-divider"></hr>
                </div>

                <div class="px-5 pt-0 my-5 position-sticky">
                    <div class="d-flex">
                        <h1 class="h2 blackText bold2">หุ่นยนต์ติดตามเส้นตรวจจับสิ่งกีดขวาง Part 1</h1>
                    </div>
                    <div class="justify-content-center py-4 text-center">
                        <iframe width="1000" height="700" src="https://www.youtube.com/embed/6JDDWG3XG6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
                    </div>
                    <div class="d-flex h2 px-4 blackText">
                        <h2 class="bold2">รายละเอียด</h2>
                    </div>
                    <div class="px-5 blackText">
                        <p>
                        การใช้โมดูล L298N เพื่อควบคุมการเคลื่อนที่ของมอเตอร์ DC ต้องมีการเชื่อมต่อโมดูล L298N กับไมโครคอนโทรลเลอร์และมอเตอร์ DC โดยใช้ขาต่อของโมดูล L298N ต่างๆ ให้ถูกต้อง
                        </p>
                        <p>
                      ขาต่อ L298N แต่ละตัวจะมีหน้าที่ต่างกัน โดยขา IN1 และ IN2 ใช้สั่งควบคุมมอเตอร์ตัวที่ 1 และขา IN3 และ IN4 ใช้สั่งควบคุมมอเตอร์ตัวที่ 2 และขา ENA และ ENB ใช้ควบคุมความเร็วของมอเตอร์ตัวที่ 1 และ 2
                        </p>
                        <p>
                        การควบคุมการเคลื่อนที่ของมอเตอร์ DC จะต้องใช้สัญญาณไฟฟ้าต่อเข้ากับตัวโมเตอร์ 
                        (เคลื่อนที่ไปข้างหน้า),(เคลื่อนที่ถอยหลัง) และ (หยุด)
                        </p>
                        <p>
                        การควบคุมการเคลื่อนที่ของมอเตอร์ DC ด้วยโมดูล L298N สามารถทำได้โดยการเชื่อมต่อไว้กับไมโครคอนโทรลเลอร์และมอเตอร์ DC 
                        แล้วควบคุมการเคลื่อนที่ผ่านโปรแกรม โดยการสั่งคำสั่งในโปรแกรมให้ส่งสัญญาณไฟฟ้าเพื่อควบคุมการเคลื่อนที่ของมอเตอร์ DC โดยใช้ขาต่อของโมดูล L298N ตามที่ได้กล่าวไปแล้ว
                        </p>
                    </div>
                    <br></br>
                    <hr class="featurette-divider"></hr>
                    <div class="h2 px-4 blackText d-flex pb-3">
                        <h2 class="bold2">โค้ดตัวอย่าง Part 1 (robot_M.ino)</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <Highlight language="c++">
                            {`// Motor A
#define IN2PinA  8
#define IN1PinA  9
#define speedPinA  10 //   เพื่อให้ PWM สามารถควบคุมความเร็วมอเตอร์ A
// Motor B
#define IN4PinB  13
#define IN3PinB  12
#define speedPinB  11 //   เพื่อให้ PWM สามารถควบคุมความเร็วมอเตอร์ B
////////////////////////////////////////////////////////////////////////
// Button
#define button 7
////////////////////////////////////////////////////////////////////////
void setup() {
  Serial.begin(9600);
  //////////////กำหนดขาเพื่อใช้ในการควบคุมการทำงานของ  Motor ผ่านทาง L298N////////////////////////
  pinMode(IN2PinA, OUTPUT);
  pinMode(IN1PinA, OUTPUT);
  pinMode(speedPinA, OUTPUT);
  pinMode(IN4PinB, OUTPUT);
  pinMode(IN3PinB, OUTPUT);
  pinMode(speedPinB, OUTPUT);
  ////////////////////////////////////////////////////////////////////////
  pinMode(button, INPUT); //กำหนดขา button เป็น input
}
void loop() {
  if (digitalRead(button) == 0) {
    /////////////////////////////////เขียนโปรแกม///////////////////////////////////////////////
    Forward(100, 110);
    delay(1000);
    Stop();
    Right(100);
    delay(800);
    Stop();
    Backward(100);
    delay(500);
    Stop();
    Left(100);
    delay(800);
    Stop();

    //////////////////////////////////////////////////////////////////////////////////////////
  }
  else {
    Stop();
  }

}`}
                        </Highlight>
                    </div>
                    <div class="h2 px-4 blackText d-flex pb-3">
                        <h2 class="bold2">โค้ดตัวอย่าง Part 1 (motor.ino)</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <Highlight language="c++">
                            {`void Forward(int SpeedA, int SpeedB) {
  // Motor A
  analogWrite(speedPinA, SpeedA); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, HIGH);
  digitalWrite(IN1PinA, LOW);
  // Motor B
  analogWrite(speedPinB, SpeedB); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, HIGH);
  digitalWrite(IN3PinB, LOW);
}
void Backward(int Speed) {
  // Motor A
  analogWrite(speedPinA, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, LOW);
  digitalWrite(IN1PinA, HIGH);
  // Motor B
  analogWrite(speedPinB, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, LOW);
  digitalWrite(IN3PinB, HIGH);
}
void Right(int Speed) {
  // Motor A
  analogWrite(speedPinA, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, HIGH);
  digitalWrite(IN1PinA, LOW);
  // Motor B
  analogWrite(speedPinB, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, LOW);
  digitalWrite(IN3PinB, HIGH);
}
void Left(int Speed) {
  // Motor A
  analogWrite(speedPinA, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, LOW);
  digitalWrite(IN1PinA, HIGH);
  // Motor B
  analogWrite(speedPinB, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, HIGH);
  digitalWrite(IN3PinB, LOW);
}
void Stop() {
  // Motor A
  analogWrite(speedPinA, 255); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, HIGH);
  digitalWrite(IN1PinA, HIGH);
  // Motor B
  analogWrite(speedPinB, 255); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, HIGH);
  digitalWrite(IN3PinB, HIGH);
}
`}
                        </Highlight>
                    </div>
                    <hr class="featurette-divider"></hr>
                    <div class="d-flex">
                        <h1 class="h2 blackText bold2">หุ่นยนต์ติดตามเส้นตรวจจับสิ่งกีดขวาง Part 2</h1>
                    </div>
                    <div class="justify-content-center py-4 text-center">
                        <iframe width="1000" height="700" src="https://www.youtube.com/embed/r1kanN0DOVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
                    </div>
                    <div class="d-flex h2 px-4 blackText">
                        <h2 class="bold2">รายละเอียด</h2>
                    </div>
                    <div class="px-5 blackText">
                      <p>
                      เพื่อให้หุ่นยนต์เดินไปเจอเส้นสีดำได้ จะต้องใช้เซ็นเซอร์อินฟราเรด TCRT5000 หรือเซ็นเซอร์ไลน์เพื่ออ่านค่าสีของพื้นผิว โดยหากเซ็นเซอร์อ่านเส้นสีดำ หุ่นยนต์จะต้องหยุดเดิน                
                      </p>
                      <p>
                      การทำงานของ TCRT5000 คือ เมื่อมีแสงสะท้อนกลับมาจากพื้นผิวที่เราวางเซ็นเซอร์ไว้ จะมีกระแสไฟฟ้าไหลผ่านตามความสว่างที่เซ็นเซอร์ได้รับ เมื่อพื้นผิวเป็นสีดำ แสงที่สะท้อนกลับจะน้อยลง 
                      จึงทำให้กระแสไฟฟ้าที่ไหลผ่านเซ็นเซอร์ลดลง ดังนั้นจึงสามารถใช้ค่าความสว่างที่ได้รับจาก TCRT5000 เพื่อตรวจจับเส้นสีดำบนพื้นผิวได้
                      </p>
                      <p>
                      ในการควบคุมหุ่นยนต์ให้เดินตามเส้นสีดำ จะต้องเชื่อมต่อเซ็นเซอร์ TCRT5000 เข้ากับไมโครคอนโทรลเลอร์ และอ่านค่าที่เซ็นเซอร์ได้จากพื้นผิว หากค่าความสว่างที่ได้รับเท่ากับหรือน้อยกว่าค่าที่กำหนด 
                      หุ่นยนต์จะหยุดเดิน โดยทำการสั่งให้มอเตอร์หยุดหมุนด้วยการสั่งให้ค่า PWM ของ ENA และ ENB เป็นค่า 0 ซึ่งจะทำให้มอเตอร์หยุดหมุนได้
                      </p>

                    </div>
                    <br></br>
                    <hr class="featurette-divider"></hr>

                    <div class="h2 px-4 blackText d-flex pb-3">
                        <h2 class="bold2">โค้ดตัวอย่าง Part 2 (robot_L.ino)</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <Highlight language="c++">
                            {`// Motor A
#define IN2PinA  8
#define IN1PinA  9
#define speedPinA  10 //   เพื่อให้ PWM สามารถควบคุมความเร็วมอเตอร์ A
// Motor B
#define IN4PinB  13
#define IN3PinB  12
#define speedPinB  11 //   เพื่อให้ PWM สามารถควบคุมความเร็วมอเตอร์ B
////////////////////////////////////////////////////////////////////////
// Sensor
#define Sensor_IR1 2
#define Sensor_IR2 3
////////////////////////////////////////////////////////////////////////
// Buzzer
#define Buzzer 4
////////////////////////////////////////////////////////////////////////
// Button
#define button 7
////////////////////////////////////////////////////////////////////////
void setup() {
  Serial.begin(9600);
  //////////////กำหนดขาเพื่อใช้ในการควบคุมการทำงานของ  Motor ผ่านทาง L298N//////////////////////
  pinMode(IN2PinA, OUTPUT);
  pinMode(IN1PinA, OUTPUT);
  pinMode(speedPinA, OUTPUT);
  pinMode(IN4PinB, OUTPUT);
  pinMode(IN3PinB, OUTPUT);
  pinMode(speedPinB, OUTPUT);
  ////////////////////////////////////////////////////////////////////////
  pinMode(Sensor_IR1, INPUT);
  pinMode(Sensor_IR2, INPUT);
  ////////////////////////////////////////////////////////////////////////
  pinMode(Buzzer, OUTPUT);
  ////////////////////////////////////////////////////////////////////////
  pinMode(button, INPUT); //กำหนดขา button เป็น input
}
void loop() {
  if (digitalRead(button) == 0) {
    /////////////////////////////////เขียนโปรแกม///////////////////////////////////////////////


    Turn_right();


    //////////////////////////////////////////////////////////////////////////////////////////
  }
  else {
    Stop();
  }

}
`}
                        </Highlight>
                    </div>
                    <div class="h2 px-4 blackText d-flex pb-3">
                        <h2 class="bold2">โค้ดตัวอย่าง Part 2 (FX.ino เเละ motor.ino)</h2>
                    </div>

                    <div class="d-flex justify-content-center">
                        <div class="d-flex justify-content-center px-5">
                            <Highlight language="c++">
                                {`void Buz(int TIME) {
  tone(Buzzer, 1000);
  delay(TIME);
  noTone(Buzzer);
}
void Move_line() {
  while (1) {
    Forward(100,100);
    if (digitalRead(Sensor_IR1) == 1) {
      Stop();
      break;
    }
  }
}
void Turn_left() {
  Left(100);
  delay(200);
  while (1) {
    Left(100);
    if (digitalRead(Sensor_IR1) == 1) {
      Stop();
      break;
    }
  }
}
void Turn_right() {
  Right(100);
  delay(200);
  while (1) {
    Right(100);
    if (digitalRead(Sensor_IR2) == 1) {
      Stop();
      break;
    }
  }
}

`}
                            </Highlight>
                        </div>
                        <div class="d-flex justify-content-center px-5">
                            <Highlight language="c++">
                                {`void Forward(int SpeedA, int SpeedB) {
  // Motor A
  analogWrite(speedPinA, SpeedA); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, HIGH);
  digitalWrite(IN1PinA, LOW);
  // Motor B
  analogWrite(speedPinB, SpeedB); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, HIGH);
  digitalWrite(IN3PinB, LOW);
}
void Backward(int Speed) {
  // Motor A
  analogWrite(speedPinA, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, LOW);
  digitalWrite(IN1PinA, HIGH);
  // Motor B
  analogWrite(speedPinB, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, LOW);
  digitalWrite(IN3PinB, HIGH);
}
void Right(int Speed) {
  // Motor A
  analogWrite(speedPinA, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, HIGH);
  digitalWrite(IN1PinA, LOW);
  // Motor B
  analogWrite(speedPinB, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, LOW);
  digitalWrite(IN3PinB, HIGH);
}
void Left(int Speed) {
  // Motor A
  analogWrite(speedPinA, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, LOW);
  digitalWrite(IN1PinA, HIGH);
  // Motor B
  analogWrite(speedPinB, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, HIGH);
  digitalWrite(IN3PinB, LOW);
}
void Stop() {
  // Motor A
  analogWrite(speedPinA, 255); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, HIGH);
  digitalWrite(IN1PinA, HIGH);
  // Motor B
  analogWrite(speedPinB, 255); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, HIGH);
  digitalWrite(IN3PinB, HIGH);
}

`}
                            </Highlight>
                        </div>
                    </div>

                    <hr class="featurette-divider"></hr>

                    <div class="d-flex">
                        <h1 class="h2 blackText bold2">หุ่นยนต์ติดตามเส้นตรวจจับสิ่งกีดขวาง Part 3</h1>
                    </div>
                    <div class="justify-content-center py-4 text-center">
                        <iframe width="1000" height="700" src="https://www.youtube.com/embed/_-K4jZADs0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
                    </div>
                    <div class="d-flex h2 px-4 blackText">
                        <h2 class="bold2">รายละเอียด</h2>
                    </div>
                    <div class="px-5 blackText">
                        <p>การสั่งงานหุ่นยนต์ให้เดินตามเส้นโดยใช้เซ็นเซอร์ TCRT5000 เป็นกระบวนการที่มีขั้นตอนการทำงานคือ ถ้าเซ็นเซอร์ข้างใดข้างหนึ่งตรวจจับเส้นสีดำบนพื้นผิวด้วยเซ็นเซอร์ TCRT5000
                           แล้วส่งค่าไปยังไมโครคอนโทรลเลอร์เพื่อตรวจสอบว่าหุ่นยนต์อยู่บนเส้นสีดำหรือไม่ หากอยู่บนเส้นสีดำ ไมโครคอนโทรลเลอร์จะสั่งให้หุ่นยนต์ เซ็ตค่าตัวหุ่นยนต์ให้เซ็นเซอร์อยู่ระหว่างกลางเส้นสีดำ 
                           และถ้าเซนเซอร์ทั้ง 2 ดวงเจอสีขาว ก็จะให้เดินหน้าต่อไปเรื่อย ๆ กระบวนการนี้เรียกว่าการติดตามเส้น (Line Following) ซึ่งเป็นกระบวนการพื้นฐานของหุ่นยนต์เดินตามเส้น
                            การสั่งงานหุ่นยนต์ให้เดินตามเส้นต้องใช้ความรู้ในการเขียนโปรแกรมเพื่อควบคุมการทำงานของไมโครคอนโทรลเลอร์ และการใช้เซ็นเซอร์ TCRT5000 เพื่อตรวจจับเส้นสีดำบนพื้น</p>
                    </div>
                    <br></br>
                    <hr class="featurette-divider"></hr>
                    <div class="h2 px-4 blackText d-flex pb-3">
                        <h2 class="bold2">โค้ดตัวอย่าง Part 3 (robot_T.ino)</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <Highlight language="c++">
                            {`// Motor A
#define IN2PinA  8
#define IN1PinA  9
#define speedPinA  10 //   เพื่อให้ PWM สามารถควบคุมความเร็วมอเตอร์ A
// Motor B
#define IN4PinB  13
#define IN3PinB  12
#define speedPinB  11 //   เพื่อให้ PWM สามารถควบคุมความเร็วมอเตอร์ B
////////////////////////////////////////////////////////////////////////
// Sensor
#define Sensor_IR1 2
#define Sensor_IR2 3
////////////////////////////////////////////////////////////////////////
// Buzzer
#define Buzzer 4
////////////////////////////////////////////////////////////////////////
// Button
#define button 7
////////////////////////////////////////////////////////////////////////
void setup() {
  Serial.begin(9600);
  //////////////กำหนดขาเพื่อใช้ในการควบคุมการทำงานของ  Motor ผ่านทาง L298N//////////////////////////////////////////////////
  pinMode(IN2PinA, OUTPUT);
  pinMode(IN1PinA, OUTPUT);
  pinMode(speedPinA, OUTPUT);
  pinMode(IN4PinB, OUTPUT);
  pinMode(IN3PinB, OUTPUT);
  pinMode(speedPinB, OUTPUT);
  ////////////////////////////////////////////////////////////////////////
  pinMode(Sensor_IR1, INPUT);
  pinMode(Sensor_IR2, INPUT);
  ////////////////////////////////////////////////////////////////////////
  pinMode(Buzzer, OUTPUT);
  ////////////////////////////////////////////////////////////////////////
  pinMode(button, INPUT); //กำหนดขา button เป็น input
  ////////////////////////////////////////////////////////////////////////
}
void loop() {
  if (digitalRead(button) == 0) {
    /////////////////////////////////เขียนโปรแกม///////////////////////////////////////////////
    Line_T();
    Line_T();


    //////////////////////////////////////////////////////////////////////////////////////////
  }
  else {
    Stop();
  }

}

`}
                        </Highlight>
                    </div>
                    <div class="h2 px-4 blackText d-flex pb-3">
                        <h2 class="bold2">โค้ดตัวอย่าง Part 3 (motor.ino)</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <Highlight language="c++">
                            {`void Forward(int SpeedA, int SpeedB) {
  // Motor A
  analogWrite(speedPinA, SpeedA); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, HIGH);
  digitalWrite(IN1PinA, LOW);
  // Motor B
  analogWrite(speedPinB, SpeedB); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, HIGH);
  digitalWrite(IN3PinB, LOW);
}
void Backward(int Speed) {
  // Motor A
  analogWrite(speedPinA, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, LOW);
  digitalWrite(IN1PinA, HIGH);
  // Motor B
  analogWrite(speedPinB, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, LOW);
  digitalWrite(IN3PinB, HIGH);
}
void Right(int Speed) {
  // Motor A
  analogWrite(speedPinA, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, HIGH);
  digitalWrite(IN1PinA, LOW);
  // Motor B
  analogWrite(speedPinB, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, LOW);
  digitalWrite(IN3PinB, HIGH);
}
void Left(int Speed) {
  // Motor A
  analogWrite(speedPinA, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, LOW);
  digitalWrite(IN1PinA, HIGH);
  // Motor B
  analogWrite(speedPinB, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, HIGH);
  digitalWrite(IN3PinB, LOW);
}
void Stop() {
  // Motor A
  analogWrite(speedPinA, 255); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, HIGH);
  digitalWrite(IN1PinA, HIGH);
  // Motor B
  analogWrite(speedPinB, 255); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, HIGH);
  digitalWrite(IN3PinB, HIGH);
}
`}
                        </Highlight>
                    </div>
                    <div class="h2 px-4 blackText d-flex pb-3">
                        <h2 class="bold2">โค้ดตัวอย่าง Part 3 (FX.ino เเละ Tracker.ino)</h2>
                    </div>

                    <div class="d-flex justify-content-center">
                        <div class="d-flex justify-content-center px-5">
                            <Highlight language="c++">
                                {`void Buz(int TIME) {
  tone(Buzzer, 1000);
  delay(TIME);
  noTone(Buzzer);
}
void Move_line() {
  while (1) {
    Forward(100,100);
    if (digitalRead(Sensor_IR1) == 1) {
      Stop();
      break;
    }
  }
}
void Turn_left() {
  Left(100);
  delay(200);
  while (1) {
    Left(100);
    if (digitalRead(Sensor_IR1) == 1) {
      Stop();
      break;
    }
  }
}
void Turn_right() {
  Right(100);
  delay(200);
  while (1) {
    Right(100);
    if (digitalRead(Sensor_IR2) == 1) {
      Stop();
      break;
    }
  }
}

`}
                            </Highlight>
                        </div>
                        <div class="d-flex justify-content-center px-5">
                            <Highlight language="c++">
                                {`void Line_T() {
  while (1) {
    if (digitalRead(Sensor_IR1) == 0 && digitalRead(Sensor_IR2) == 0 ) {
      Forward(100, 110);
    }
    else if (digitalRead(Sensor_IR1) == 0 && digitalRead(Sensor_IR2) == 1) {
      Right(200);
    }
    else if (digitalRead(Sensor_IR1) == 1 && digitalRead(Sensor_IR2) == 0) {
      Left(200);
    }
    else if (digitalRead(Sensor_IR1) == 1 && digitalRead(Sensor_IR2) == 1) {
      
      Forward(125,130);
      delay(400);
      Stop();
      Buz(200);
      break;
    }
  }
}


`}
                            </Highlight>
                        </div>
                    </div>

                    <hr class="featurette-divider"></hr>


                    <div class="d-flex">
                        <h1 class="h2 blackText bold2">หุ่นยนต์ติดตามเส้นตรวจจับสิ่งกีดขวาง Part 4</h1>
                    </div>
                    <div class="justify-content-center py-4 text-center">
                        <iframe width="1000" height="700" src="https://www.youtube.com/embed/NlVXCPUHQ8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
                    </div>
                    <div class="d-flex h2 px-4 blackText">
                        <h2 class="bold2">รายละเอียด</h2>
                    </div>
                    <div class="px-5 blackText">
                        <p>การสั่งงานให้หุ่นยนต์เดินตามเส้น จนกว่าจะเจอวัตถุข้างหน้าโดยใช้เซ็นเซอร์อัลตราโซนิค (Ultrasonic Sensor Module HC-SR04) ในการเช็ค 
                          มีขั้นตอนการทำงานคล้ายกับการติดตามเส้น โดยหุ่นยนต์จะเคลื่อนที่ไปตามเส้นทางโดยใช้เซ็นเซอร์ TCRT5000 เพื่อตรวจจับเส้นสีดำบนพื้นผิว และหากพบวัตถุข้างหน้าหุ่นยนต์ 
                          โปรแกรมจะสั่งให้หุ่นยนต์หยุดการเดินหรือหันทิศทางไปยังทิศทางอื่น</p>
                    </div>
                    <br></br>
                    <hr class="featurette-divider"></hr>
                    <div class="h2 px-4 blackText d-flex pb-3">
                        <h2 class="bold2">โค้ดตัวอย่าง Part 4 (robot_U.ino)</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <Highlight language="c++">
                            {`// Motor A
#define IN2PinA  8
#define IN1PinA  9
#define speedPinA  10 //   เพื่อให้ PWM สามารถควบคุมความเร็วมอเตอร์ A
// Motor B
#define IN4PinB  13
#define IN3PinB  12
#define speedPinB  11 //   เพื่อให้ PWM สามารถควบคุมความเร็วมอเตอร์ B
////////////////////////////////////////////////////////////////////////
// Sensor
#define Sensor_IR1 2
#define Sensor_IR2 3
////////////////////////////////////////////////////////////////////////
// Buzzer
#define Buzzer 4
////////////////////////////////////////////////////////////////////////
// Ultra Sonic
#define Trig 5 // กำหนด Pin 9 = Trig 
#define Echo 6 // กำหนด Pin  10 = Echo
////////////////////////////////////////////////////////////////////////
// Button
#define button 7
////////////////////////////////////////////////////////////////////////
void setup() {
  Serial.begin(9600);
  //////////////กำหนดขาเพื่อใช้ในการควบคุมการทำงานของ  Motor ผ่านทาง L298N//////////////////////////////////////////////////
  pinMode(IN2PinA, OUTPUT);
  pinMode(IN1PinA, OUTPUT);
  pinMode(speedPinA, OUTPUT);
  pinMode(IN4PinB, OUTPUT);
  pinMode(IN3PinB, OUTPUT);
  pinMode(speedPinB, OUTPUT);
  ////////////////////////////////////////////////////////////////////////
  pinMode(Sensor_IR1, INPUT);
  pinMode(Sensor_IR2, INPUT);
  ////////////////////////////////////////////////////////////////////////
  pinMode(Trig, OUTPUT); //กำหนดขา Trig เป็น output
  pinMode(Echo, INPUT); // กำหนดขา Echo เป็น input
  ////////////////////////////////////////////////////////////////////////
  pinMode(Buzzer, OUTPUT);
  ////////////////////////////////////////////////////////////////////////
  pinMode(button, INPUT); //กำหนดขา button เป็น input
  ////////////////////////////////////////////////////////////////////////
}
void loop() {
  if (digitalRead(button) == 0) {
    /////////////////////////////////เขียนโปรแกม///////////////////////////////////////////////
    Line_U();

    //////////////////////////////////////////////////////////////////////////////////////////
  }
  else {
    Stop();
  }

}
`}
                        </Highlight>
                    </div>
                    <div class="h2 px-4 blackText d-flex pb-3">
                        <h2 class="bold2">โค้ดตัวอย่าง Part 4 (motor.ino)</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <Highlight language="c++">
                            {`void Forward(int SpeedA, int SpeedB) {
  // Motor A
  analogWrite(speedPinA, SpeedA); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, HIGH);
  digitalWrite(IN1PinA, LOW);
  // Motor B
  analogWrite(speedPinB, SpeedB); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, HIGH);
  digitalWrite(IN3PinB, LOW);
}
void Backward(int Speed) {
  // Motor A
  analogWrite(speedPinA, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, LOW);
  digitalWrite(IN1PinA, HIGH);
  // Motor B
  analogWrite(speedPinB, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, LOW);
  digitalWrite(IN3PinB, HIGH);
}
void Right(int Speed) {
  // Motor A
  analogWrite(speedPinA, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, HIGH);
  digitalWrite(IN1PinA, LOW);
  // Motor B
  analogWrite(speedPinB, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, LOW);
  digitalWrite(IN3PinB, HIGH);
}
void Left(int Speed) {
  // Motor A
  analogWrite(speedPinA, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, LOW);
  digitalWrite(IN1PinA, HIGH);
  // Motor B
  analogWrite(speedPinB, Speed); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, HIGH);
  digitalWrite(IN3PinB, LOW);
}
void Stop() {
  // Motor A
  analogWrite(speedPinA, 255); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ A
  digitalWrite(IN2PinA, HIGH);
  digitalWrite(IN1PinA, HIGH);
  // Motor B
  analogWrite(speedPinB, 255); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ควบคุมความเร็วมอเตอร์ B
  digitalWrite(IN4PinB, HIGH);
  digitalWrite(IN3PinB, HIGH);
}

`}
                        </Highlight>
                    </div>
                    <div class="h2 px-4 blackText d-flex pb-3">
                        <h2 class="bold2">โค้ดตัวอย่าง Part 4 (FX.ino เเละ Tracker.ino)</h2>
                    </div>

                    <div class="d-flex justify-content-center">
                        <div class="d-flex justify-content-center px-5">
                            <Highlight language="c++">
                                {`void Buz(int TIME) {
  tone(Buzzer, 1000);
  delay(500);
  noTone(Buzzer);
}
void Move_line() {
  while (1) {
    Forward(100,100);
    if (digitalRead(Sensor_IR1) == 1) {
      Stop();
      break;
    }
  }
}
void Turn_left() {
  Left(100);
  delay(200);
  while (1) {
    Left(100);
    if (digitalRead(Sensor_IR1) == 1) {
      Stop();
      break;
    }
  }
}
void Turn_right() {
  Right(100);
  delay(200);
  while (1) {
    Right(100);
    if (digitalRead(Sensor_IR2) == 1) {
      Stop();
      break;
    }
  }
}

`}
                            </Highlight>
                        </div>
                        <div class="d-flex justify-content-center px-5">
                            <Highlight language="c++">
                                {`void Line_T() {
  while (1) {
    if (digitalRead(Sensor_IR1) == 0 && digitalRead(Sensor_IR2) == 0 ) {
      Forward(100, 110);
    }
    else if (digitalRead(Sensor_IR1) == 0 && digitalRead(Sensor_IR2) == 1) {
      Right(200);
    }
    else if (digitalRead(Sensor_IR1) == 1 && digitalRead(Sensor_IR2) == 0) {
      Left(200);
    }
    else if (digitalRead(Sensor_IR1) == 1 && digitalRead(Sensor_IR2) == 1) {
      
      Forward(125, 130);
      delay(400);
      Stop();
      Buz(100);
      break;
    }
  }
}
void Line_U() {
  float duration;
  float distance;
  while (1) {
    digitalWrite(Trig, LOW); // เคลียร์ค่าขา trig ป้องกันกรณีสถานะค้างเก่าค้างอยู่
    delayMicroseconds(5);    // 5 ไมโครวินาที
    digitalWrite(Trig, HIGH); // ให้ขา Trig ส่งคลื่นออกไป
    delayMicroseconds(10);    //10 ไมโครวินาที
    digitalWrite(Trig, LOW);  // ให้ขา Trig ปิดการส่งคลื่นออกไป
    duration = pulseIn(Echo, HIGH); // จับเวลาจนกว่าจะมีคลื่นเสียงมากระทบ Echo โดยคำสั่ง pulseIn
    distance = (duration * 0.034) / 2; // คำนวณหาระยะตามสูตรข้างต้น
    
    if (digitalRead(Sensor_IR1) == 0 && digitalRead(Sensor_IR2) == 0 ) {
      Forward(100, 110);
    }
    else if (digitalRead(Sensor_IR1) == 0 && digitalRead(Sensor_IR2) == 1) {
      Right(200);
    }
    else if (digitalRead(Sensor_IR1) == 1 && digitalRead(Sensor_IR2) == 0) {
      Left(200);
    }
    if (distance < 7 ) {
      
      Stop();
      Buz(100);
      break;
    }
  }
}

`}
                            </Highlight>
                        </div>
                    </div>

                    <hr class="featurette-divider"></hr>

                    <div class="d-flex h2 px-4 blackText">
                        <h2 class="bold2">รูปภาพประกอบ</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891600860827750/LINE_ALBUM__230330_2.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">โครงสร้างของหุ่นยนต์</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891601376710736/LINE_ALBUM__230330_4.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">ยึดมอเตอร์ ล้อ และโมดูลลำโพงเข้ากับโครงของหุ่นยนต์</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891611023605770/LINE_ALBUM__230330_7.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">ยึดล้อหน้าทั้ง 2 ข้างเข้ากับโครงของหุ่นยนต์</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891611262689280/LINE_ALBUM__230330_8.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">ติดตั้งบูชรองน็อตสำหรับยึดโครงด้านบนของหุ่นยนต์กับฐาน</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891611493380096/LINE_ALBUM__230330_9.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">ติดตั้งบูชรองน็อตสำหรับลองบอร์ด</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891611715665920/LINE_ALBUM__230330_10.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">ติดตั้งบอร์ดไมโครคอนเทเลอร์</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891611929583626/LINE_ALBUM__230330_11.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">ติดตั้งบอร์ด Drive Motor L298N</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891612147691550/LINE_ALBUM__230330_12.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">ติดตั้งบอร์ด Button switch module</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891612390948934/LINE_ALBUM__230330_13.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">ยึดServo motor กับโครง</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891618816643082/LINE_ALBUM__230330_14.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">ติดตั้งบอร์ด Ultrasonic Senser Module HC-SR04</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891619181539348/LINE_ALBUM__230330_15.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">ต่อสายหุ่ยยนต์</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891619462561842/Robot.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">หุ่นยนต์ติดตามเส้นตรวจจับสิ่งกีดขวาง</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <hr class="featurette-divider"></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">จำลองการต่อวงจร</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://i.imgur.com/CyOeEh8.gif" class="img-fluid rounded-3 mb-4 ps-5" alt="555" width="1100" height="900" ></img>
                    </div>
                    <br></br>
                    <hr class="featurette-divider"></hr>
                    <footer class="container">
                        <p class="float-end"><a href="#">Back to top</a></p>
                        <p>&copy; 2022 KMITL. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
                    </footer>
                </div>
            </main>
        </body>
    );
}

export default Robots;