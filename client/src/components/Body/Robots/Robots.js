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
                                <p>Mollit deserunt ex ipsum esse non eu aute reprehenderit dolor pariatur amet enim. Occaecat Lorem duis dolor minim in quis. Deserunt minim culpa consectetur reprehenderit tempor voluptate quis.

                                    Eiusmod irure excepteur non qui proident sunt laborum culpa ad ad qui cillum duis esse. Commodo occaecat ex do elit et enim irure fugiat. Velit do eu ullamco elit proident do do laboris est eiusmod.

                                    Pariatur duis excepteur officia deserunt velit. Consequat aute dolore reprehenderit sint occaecat mollit voluptate aute aliqua veniam enim laborum et veniam. Officia in ea deserunt laboris culpa non fugiat Lorem ipsum pariatur laboris occaecat commodo consectetur. Excepteur cillum dolor pariatur consequat voluptate labore cupidatat cupidatat do fugiat pariatur minim excepteur. Consequat sunt anim est do anim. Enim cillum reprehenderit adipisicing labore Lorem Lorem eiusmod. Sint commodo velit anim veniam aute qui veniam.</p>
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
                        <p>Incididunt ipsum eiusmod proident aliqua sunt. Cupidatat consequat fugiat dolor qui eiusmod qui commodo enim ut id sit. Adipisicing officia eu veniam quis laborum. Ut in tempor nulla esse irure nulla deserunt voluptate labore proident enim dolor. Cillum Lorem aliqua consectetur consectetur enim eiusmod labore sint enim amet ad do.

                            Veniam consectetur culpa velit esse et dolor non fugiat qui ipsum nostrud laboris aliquip amet. Dolor pariatur eu id occaecat non ex amet ipsum ut commodo amet. Eu minim officia sit eiusmod nostrud qui mollit qui adipisicing et irure cupidatat labore occaecat.

                            Nisi labore nisi ipsum officia ut deserunt nulla. Id adipisicing tempor id magna consectetur enim ullamco commodo exercitation. Aliqua reprehenderit reprehenderit commodo fugiat ea ad voluptate dolore elit aute. Esse elit consectetur ex consequat irure fugiat. Proident do consequat enim cillum consectetur aute eiusmod irure ea deserunt eu aliqua.

                            Excepteur aliqua do elit excepteur eiusmod elit officia eu duis proident commodo. Eu quis velit dolore irure deserunt magna. Est ut anim ut do aliqua ea veniam aliquip laboris ullamco reprehenderit. Ex magna ad laborum adipisicing in qui ipsum.</p>
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
                        <p>Incididunt ipsum eiusmod proident aliqua sunt. Cupidatat consequat fugiat dolor qui eiusmod qui commodo enim ut id sit. Adipisicing officia eu veniam quis laborum. Ut in tempor nulla esse irure nulla deserunt voluptate labore proident enim dolor. Cillum Lorem aliqua consectetur consectetur enim eiusmod labore sint enim amet ad do.

                            Veniam consectetur culpa velit esse et dolor non fugiat qui ipsum nostrud laboris aliquip amet. Dolor pariatur eu id occaecat non ex amet ipsum ut commodo amet. Eu minim officia sit eiusmod nostrud qui mollit qui adipisicing et irure cupidatat labore occaecat.

                            Nisi labore nisi ipsum officia ut deserunt nulla. Id adipisicing tempor id magna consectetur enim ullamco commodo exercitation. Aliqua reprehenderit reprehenderit commodo fugiat ea ad voluptate dolore elit aute. Esse elit consectetur ex consequat irure fugiat. Proident do consequat enim cillum consectetur aute eiusmod irure ea deserunt eu aliqua.

                            Excepteur aliqua do elit excepteur eiusmod elit officia eu duis proident commodo. Eu quis velit dolore irure deserunt magna. Est ut anim ut do aliqua ea veniam aliquip laboris ullamco reprehenderit. Ex magna ad laborum adipisicing in qui ipsum.</p>
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
                        <p>Incididunt ipsum eiusmod proident aliqua sunt. Cupidatat consequat fugiat dolor qui eiusmod qui commodo enim ut id sit. Adipisicing officia eu veniam quis laborum. Ut in tempor nulla esse irure nulla deserunt voluptate labore proident enim dolor. Cillum Lorem aliqua consectetur consectetur enim eiusmod labore sint enim amet ad do.

                            Veniam consectetur culpa velit esse et dolor non fugiat qui ipsum nostrud laboris aliquip amet. Dolor pariatur eu id occaecat non ex amet ipsum ut commodo amet. Eu minim officia sit eiusmod nostrud qui mollit qui adipisicing et irure cupidatat labore occaecat.

                            Nisi labore nisi ipsum officia ut deserunt nulla. Id adipisicing tempor id magna consectetur enim ullamco commodo exercitation. Aliqua reprehenderit reprehenderit commodo fugiat ea ad voluptate dolore elit aute. Esse elit consectetur ex consequat irure fugiat. Proident do consequat enim cillum consectetur aute eiusmod irure ea deserunt eu aliqua.

                            Excepteur aliqua do elit excepteur eiusmod elit officia eu duis proident commodo. Eu quis velit dolore irure deserunt magna. Est ut anim ut do aliqua ea veniam aliquip laboris ullamco reprehenderit. Ex magna ad laborum adipisicing in qui ipsum.</p>
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
                        <p>Incididunt ipsum eiusmod proident aliqua sunt. Cupidatat consequat fugiat dolor qui eiusmod qui commodo enim ut id sit. Adipisicing officia eu veniam quis laborum. Ut in tempor nulla esse irure nulla deserunt voluptate labore proident enim dolor. Cillum Lorem aliqua consectetur consectetur enim eiusmod labore sint enim amet ad do.

                            Veniam consectetur culpa velit esse et dolor non fugiat qui ipsum nostrud laboris aliquip amet. Dolor pariatur eu id occaecat non ex amet ipsum ut commodo amet. Eu minim officia sit eiusmod nostrud qui mollit qui adipisicing et irure cupidatat labore occaecat.

                            Nisi labore nisi ipsum officia ut deserunt nulla. Id adipisicing tempor id magna consectetur enim ullamco commodo exercitation. Aliqua reprehenderit reprehenderit commodo fugiat ea ad voluptate dolore elit aute. Esse elit consectetur ex consequat irure fugiat. Proident do consequat enim cillum consectetur aute eiusmod irure ea deserunt eu aliqua.

                            Excepteur aliqua do elit excepteur eiusmod elit officia eu duis proident commodo. Eu quis velit dolore irure deserunt magna. Est ut anim ut do aliqua ea veniam aliquip laboris ullamco reprehenderit. Ex magna ad laborum adipisicing in qui ipsum.</p>
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
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891600147796020/LINE_ALBUM__230330_6.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891600395247667/LINE_ALBUM__230330_0.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891600860827750/LINE_ALBUM__230330_2.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891601376710736/LINE_ALBUM__230330_4.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891611023605770/LINE_ALBUM__230330_7.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891611262689280/LINE_ALBUM__230330_8.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891611493380096/LINE_ALBUM__230330_9.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891611715665920/LINE_ALBUM__230330_10.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891611929583626/LINE_ALBUM__230330_11.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891612147691550/LINE_ALBUM__230330_12.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891612390948934/LINE_ALBUM__230330_13.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891618816643082/LINE_ALBUM__230330_14.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891619181539348/LINE_ALBUM__230330_15.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="https://cdn.discordapp.com/attachments/768084656465117227/1090891619462561842/Robot.jpg" alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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