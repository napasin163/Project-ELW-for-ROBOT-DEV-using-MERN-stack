import './HCSR04.css'
import { Outlet, Link } from "react-router-dom";
import Highlight from 'react-highlight'


const E18 = () => {
    return (
        <body>
            <main class="d-flex flex-nowrap">
                <div class="flex-shrink-0 p-3 bg-white stylexd">
                    <Link to="/arduino" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom ">
                        <svg class="bi pe-none me-2" width="30" height="24"></svg>
                        <span class="fs-5 fw-semibold">Arduino</span>
                    </Link>
                    <ul class="list-unstyled ps-0">
                        <li class="mb-1">
                            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                Sensor
                            </button>
                            <div class="collapse show" id="home-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="/hcsr04" class="link-dark d-inline-flex text-decoration-none rounded">Ultrasonic Sensor HC-SR04</Link></li>
                                    <li><Link to="/tcrt" class="link-dark d-inline-flex text-decoration-none rounded">Reflective Sensor (TCRT5000)</Link></li>
                                    <li><Link to="/apds" class="link-dark d-inline-flex text-decoration-none rounded">GY-9960 Infrared RGB Gesture Sensor (APDS-9960)</Link></li>
                                    <li><Link to="/f249" class="link-dark d-inline-flex text-decoration-none rounded">F249 Counter Module Motor Speed Sensor</Link></li>
                                    <li><Link to="/e18" class="link-dark d-inline-flex text-decoration-none rounded">Infrared photoelectric switch Sensor E18-D80NK</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li class="mb-1">
                            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                Servo/Motor
                            </button>
                            <div class="collapse show" id="dashboard-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="/servoM" class="link-dark d-inline-flex text-decoration-none rounded">Servo G90s</Link></li>
                                    <li><Link to="/dc" class="link-dark d-inline-flex text-decoration-none rounded">DC Gear Motor</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li class="mb-1">
                            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                Modules
                            </button>
                            <div class="collapse show" id="orders-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="/buzzer" class="link-dark d-inline-flex text-decoration-none rounded">Passive buzzer module</Link></li>
                                    <li><Link to="/button" class="link-dark d-inline-flex text-decoration-none rounded">Button switch module</Link></li>
                                    <li><Link to="/rotary" class="link-dark d-inline-flex text-decoration-none rounded">Rotary Encoder Module</Link></li>
                                    <li><Link to="/joystick" class="link-dark d-inline-flex text-decoration-none rounded">Adapter PS2 Joystick PlayStation</Link></li>
                                    <li><Link to="/relay" class="link-dark d-inline-flex text-decoration-none rounded">Relay Module 5V 2Channel</Link></li>
                                    <li><Link to="/lcd" class="link-dark d-inline-flex text-decoration-none rounded">Interface 12C 16x2 LCD</Link></li>
                                    <li><Link to="/oled" class="link-dark d-inline-flex text-decoration-none rounded">OLED 128x64</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li class="border-top my-3"></li>
                        <li class="mb-1">
                            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                Contact us
                            </button>
                            <div class="collapse" id="account-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a class="link-dark d-inline-flex text-decoration-none rounded">Napasin Singburi</a></li>
                                    <li><a class="link-dark d-inline-flex text-decoration-none rounded">Bancha Phuangphikul</a></li>
                                    <li><a class="link-dark d-inline-flex text-decoration-none rounded">Sarunchana Srichanta</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="col-md-9 ms-lg-9 col-lg-9 px-md-4 position-sticky">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2 blackText bold2">Infrared photoelectric switch Sensor E18-D80NK</h1>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/837757981549396049/1053047913053429821/Infrared_photoelectric_switch_Sensor_E18-D80NK-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="400" height="500" ></img>
                    </div>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รายละเอียด</h2>
                    </div>
                    <div class="px-5 blackText">
                        <p>เป็นเซนเซอร์ตรวจจับวัตถุที่ใช้หลักการสะท้อนของคลื่นอินฟาเรด หากมีวัตถุขวางจะมีการสะท้อนกลับมาเพื่อใช้แทนสวิตช์เซนเซอร์ว่าขณะนี้มีสิ่งกีดขวาง หรือวัตถุอยู่หน้าเซนเซอร์หรือไม่ สามารถกำหนดระยะในการทำงานได้โดยปรับค่าที่ Potentiometer ตรวจจับวัตถุได้ในช่วง  3-80 cm 
                            โดยใช้ไฟเลี้ยง 5v จาก Arduino ได้ทันที ซึ่งให้ค่าออกมาเป็นสัญญาณ on-off โดย off คือ มีสิ่งกีดขวาง, on คือ ไม่มีสิ่งกีดขวาง สามารถนำไปใช้งานกับหุ่นยนต์หลบสิ่งกีดขวางหรืองาน automation เช่น ไลน์การผลิตต่างๆ เป็นต้น </p>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="embed-responsive embed-responsive-16by9 ms-5">
                        <iframe width="1100" height="700" src="https://www.youtube.com/embed/Pyv0oIdmp5Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">ข้อมูลการใช้งาน</h2>
                    </div>
                    <br></br>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/837757981549396049/1053047912722092124/E18-D80NK_Infrared-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="800" height="700" ></img>
                    </div>
                    <p>การต่อใช้งานกับ Arduino</p>
                    <p>5V - SVDC (สายสีน้ำตาล) </p>
                    <p>GND - GND (สายสีน้ำเงิน) </p>
                    <p>A0 - OUT (สายสีดำ)</p>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รูปภาพประกอบ</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/837757981549396049/1053045604252659752/LINE_ALBUM___3.jpg" class="img-fluid rounded-3 mb-4" alt="555" width="800" height="700" ></img>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">จำลองการต่อวงจร</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://i.imgur.com/uc3lhRG.gif" class="img-fluid rounded-3 mb-4 ps-5" alt="555" width="1100" height="900" ></img>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">โค้ดตัวอย่าง</h2>
                    </div>
                    <div class="d-flex justify-content-center ">
                        <Highlight language="c++">
                            {`int led = 13;                // the pin that the LED is atteched to
int sensor = 2;              // the pin that the sensor is atteched to
int state = HIGH;             // by default, no motion detected
int val = 0;                 // variable to store the sensor status (value)
void setup() {
  pinMode(led, OUTPUT);      // initalize LED as an output
  pinMode(sensor, INPUT);    // initialize sensor as an input
  Serial.begin(115200);        // initialize serial
}
void loop(){
  val = digitalRead(sensor);   // read sensor value
  if (val == LOW) {           // check if the sensor is LOW 
    digitalWrite(led, LOW);   // turn LED OFF
    delay(100);                // delay 100 milliseconds 
    if (state == HIGH) {
      Serial.println(" Warning Detect "); 
      Serial.println(""); 
      state = LOW;       // update variable state to C
    }
  } 
  else {
      digitalWrite(led, HIGH); // turn LED ON
      delay(200);             // delay 200 milliseconds 
      if (state == LOW){
        Serial.println("Clear OK");
        Serial.println("");
        state = HIGH;       // update variable state to HIGH
    }
  }
}`}
                        </Highlight>
                    </div>
                </div>
            </main>
            <script src="sidebars.js"></script>
        </body>
    );
}

export default E18;