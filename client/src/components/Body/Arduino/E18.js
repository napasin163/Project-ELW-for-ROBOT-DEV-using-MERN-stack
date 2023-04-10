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
                                    <li><Link to="/f249" class="link-dark d-inline-flex text-decoration-none rounded">F249 Counter Module Motor Speed Sensor</Link></li>
                                    <li><Link to="/e18" class="link-dark d-inline-flex text-decoration-none rounded">Infrared photoelectric switch Sensor E18-D80NK</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li class="mb-1">
                            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                Servo
                            </button>
                            <div class="collapse show" id="dashboard-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="/servoM" class="link-dark d-inline-flex text-decoration-none rounded">Servo G90s</Link></li>                                </ul>
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
                                    <li><Link to="/joystick" class="link-dark d-inline-flex text-decoration-none rounded">Adapter PS2 Joystick PlayStation</Link></li>
                                    <li><Link to="/relay" class="link-dark d-inline-flex text-decoration-none rounded">Relay Module 5V 2Channel</Link></li>
                                    <li><Link to="/lcd" class="link-dark d-inline-flex text-decoration-none rounded">Interface 12C 16x2 LCD</Link></li>
                                    <li><Link to="/oled" class="link-dark d-inline-flex text-decoration-none rounded">OLED 128x64</Link></li>
                                    <li><Link to="/motor" class="dropdown-item">L298N Motor Driver</Link></li>
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
                        <p>เป็นเซนเซอร์ตรวจจับวัตถุที่ใช้หลักการสะท้อนของคลื่นอินฟาเรด หากมีวัตถุขวางจะมีการสะท้อนกลับมาว่าขณะนี้มีสิ่งกีดขวาง หรือวัตถุอยู่หน้าเซนเซอร์หรือไม่ สามารถกำหนดระยะในการทำงานได้โดยปรับค่าที่ Potentiometer ตรวจจับวัตถุได้ในช่วง  3-80 เซนติเมตร โดยใช้ไฟเลี้ยง 5 โวลต์ จาก Arduino ได้ทันที ซึ่งให้ค่าออกมาเป็นสัญญาณ on-off โดย off คือ มีสิ่งกีดขวางและ on คือ ไม่มีสิ่งกีดขวาง สามารถนำไปใช้งานในหลายแวดวง เช่น การตรวจจับวัตถุบนลูกบอลและลูกปิงปอง ตรวจจับวัตถุในระบบทางกล สามารถนำไปใช้งานกับหุ่นยนต์หลบสิ่งกีดขวาง รวมถึงการป้องกันการชนกันของรถยนต์และระบบอัตโนมัติในโรงงานและอุตสาหกรรมอื่นๆ โดยเซ็นเซอร์นี้มีระยะการตรวจจับไกลถึง 80 เซนติเมตร</p>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="embed-responsive embed-responsive-16by9 ms-5">
                        <iframe width="1100" height="700" src="https://www.youtube.com/embed/ePZWdC1XMOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
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
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1094943979415543838/E18-D80NK_Infrared-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="800" height="700" ></img>
                    </div>
                    <div class="px-5 blackText">
                    <b>Infrared photoelectric switch Sensor E18-D80NK เป็นอุปกรณ์ที่ใช้งานง่ายและมีความแม่นยำสูง โดยมีขั้วเชื่อมต่อ 3 ขั้ว ได้แก่ VCC, GND และ OUT ซึ่งมีหน้าที่ดังนี้</b>
                    <p>1.	VCC (Voltage supply): ขั้วนี้เชื่อมต่อกับแหล่งจ่ายไฟเพื่อให้เซ็นเซอร์ทำงานได้</p>
                    <p>2.	GND (Ground): ขั้วนี้เชื่อมต่อกับสายลงดินหรืออุปกรณ์ที่อยู่ในระบบต่อไป</p>
                    <p>3.	OUT (Output): เมื่อตรวจจับวัตถุที่ผ่านขบวนแสงอินฟราเรดแล้ว จะมีสัญญาณออกมาที่ขั้วนี้ ซึ่งเป็นสัญญาณดิจิตอลที่มีสถานะเป็น High (1) หรือ Low (0) ขึ้นอยู่กับวัตถุที่ถูกตรวจจับว่าอยู่หรือไม่อยู่ในช่วงระยะที่กำหนด</p>
                    <br></br>
                    <b>การติดตั้งและใช้งาน:</b>
                    <p>1.	เชื่อมต่อขั้ว VCC และ GND ของเซ็นเซอร์กับแหล่งจ่ายไฟที่มีแรงดันไฟเท่ากัน</p>
                    <p>2.	เชื่อมต่อขั้ว OUT ของเซ็นเซอร์กับขั้วอินพุทของไมโครคอนโทรเลอร์หรือเบอร์เพื่อรับสัญญาณ</p>
                    <p>3.	ปรับขั้วปรับระยะตรวจจับได้ตามต้องการ</p>
                    <p>4.	นำวัตถุที่ต้องการตรวจจับผ่านขบวนแสงอินฟราเรด และดูสถานะของสัญญาณที่เชื่อมต่อกับขั้ว OUT เพื่อตรวจสอบการทำงานของเซ็นเซอร์</p>
                    <br></br>
                    </div>

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
                            {`int sensor = 2;              // กำหนดตัวแปร sensor เท่ากับ 2
int state = HIGH;             // กำหนดตัวแปร state เท่ากับ HIGH
int val = 0;                 // กำหนดตัวแปร val เท่ากับ 0
void setup() {
  pinMode(sensor, INPUT);    // กำหนดขา sensor เป็น input
  Serial.begin(9600);        // initialize serial
}
void loop(){
  val = digitalRead(sensor);   // อ่านค่า sensor
  if (val == LOW) {           // check if the sensor is LOW 
    if (state == HIGH) {
      Serial.println("Warning Detect "); 
      state = LOW;       // update variable state to C
    }
  } 
  else {
      if (state == LOW){
        Serial.println("Clear OK");
        state = HIGH;       // update variable state to HIGH
    }
  }
}
`}
                        </Highlight>
                    </div>
                </div>
            </main>
            <script src="sidebars.js"></script>
        </body>
    );
}

export default E18;