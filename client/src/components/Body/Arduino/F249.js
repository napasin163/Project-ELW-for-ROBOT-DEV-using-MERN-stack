import './HCSR04.css'
import { Outlet, Link } from "react-router-dom";
import Highlight from 'react-highlight'


const F249 = () => {
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
                        <h1 class="h2 blackText bold2">F249 Counter Module Motor Speed Sensor</h1>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052621305524011008/F249.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="400" height="500" ></img>
                    </div>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รายละเอียด</h2>
                    </div>
                    <div class="px-5 blackText">
                        <p>F249 Counter Module Motor Speed Sensor เป็นโมดูลที่ใช้วัดความเร็วรอบของมอเตอร์ หรือเครื่องจักรที่มีการหมุน โดยใช้เซ็นเซอร์ตรวจจับการเคลื่อนไหวของวัตถุเพื่อวัดความถี่ เมื่อมีวัตถุมาบังที่เซนเซอร์เอาต์พุตจะเป็น 1 เมื่อไม่มีสิ่งกีดขวางจะเป็น 0 จากนั้นแปลงค่าความถี่เป็นความเร็วรอบของมอเตอร์ และแสดงผลบนจอ LCD หรืออุปกรณ์แสดงผลอื่น ๆ ได้ตามที่ตั้งค่า โมดูลนี้สามารถใช้งานได้กับหลายประเภทของมอเตอร์ และมีความแม่นยำสูงในการวัดความเร็วรอบของมอเตอร์ โดยสามารถตั้งค่าค่าคงที่ให้กับโมดูลได้เพื่อให้เหมาะสมกับการใช้งานต่าง ๆ โดยใช้การเชื่อมต่อเข้ากับบอร์ดไมโครคอนโทรลเลอร์เพื่อใช้งานได้อย่างมีประสิทธิภาพและมีความสะดวกสบายในการใช้งาน นำไปประยุกต์ใช้ในงานได้หลากหลาย เช่น การนับรอบการหมุนของมอเตอร์ ทำเครื่องรับเหรียญ เป็นต้น พร้อมหลอดไฟ LED แสดงการทำงาน</p>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="embed-responsive embed-responsive-16by9 ms-5">
                        <iframe width="1100" height="700" src="https://www.youtube.com/embed/vm2926xTj_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
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
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1094941132858851378/32D88A6B-EC7A-47F1-A9F8-A0C2C923DDC6-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="800" height="700" ></img>
                    </div>
                    <div class="px-5 blackText">
                        <b>การใช้งาน F249 Counter Module Motor Speed Sensor มีขั้นตอนดังนี้</b>
                        <p>1. ติดตั้งโมดูล F249 ลงบนบอร์ดไมโครคอนโทรลเลอร์ โดยเชื่อมต่อขา OUT1 และ OUT2 ของโมดูลเข้ากับขา Digital Input ของบอร์ด และขา VCC และ GND ของโมดูลเข้ากับขา Power Supply ของบอร์ด</p>
                        <p>2. เชื่อมต่อเซ็นเซอร์ตรวจจับความเร็วรอบของมอเตอร์เข้ากับโมดูล โดยเซ็นเซอร์ TCRT5000 จะต้องถูกติดตั้งบนโครงสร้างที่สามารถจับเสามอเตอร์ได้อย่างแม่นยำ โดยปกติจะติดตั้งที่โครงสร้างแบบล้อหรือลูกกลิ้งเพื่อให้เซ็นเซอร์ตรวจจับการเคลื่อนไหวของเสามอเตอร์</p>
                        <p>3. ตั้งค่าโปรแกรมบนบอร์ด Arduino หรือไมโครคอนโทรลเลอร์อื่น ๆ เพื่ออ่านค่าความถี่ที่ถูกส่งออกจาก F249 Counter Module Motor Speed Sensor และแปลงเป็นความเร็วรอบของมอเตอร์ โดยการเขียนโปรแกรมนี้จะต้องระบุค่าคงที่ที่เกี่ยวข้องกับจำนวนช่องความถี่ของโมดูล และระยะเวลาที่ใช้ในการวัดความถี่เพื่อแปลงเป็นความเร็วรอบของมอเตอร์</p>
                        <p>4. นำผลลัพธ์การวัดความเร็วรอบของมอเตอร์ที่ได้มาแสดงผลบนจอ LCD หรืออุปกรณ์แสดงผลอื่น ๆ ได้ตามที่ต้องการ	</p>
                        <br></br>
                    </div>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">จำลองการต่อวงจร</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://i.imgur.com/BW9pu6G.gif" class="img-fluid rounded-3 mb-4 ps-5" alt="555" width="1100" height="900" ></img>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">โค้ดตัวอย่าง</h2>
                    </div>
                    <div class="d-flex justify-content-center ">
                        <Highlight language="c++">
                            {`// เพื่อให้มั่นใจว่า เซนเซอร์จะ นับ ทันที ทุกครั้ง 
//เราจะใช้การทำงานแบบ interrupt เพื่อให้ทำงานทันที ที่เซนเซอร์ตรวจจับได้

int sensor = 8;
void setup() {
  pinMode(sensor, INPUT);
  attachInterrupt(0, doCounter, FALLING); // ทำงานแบบ interrupt เบอร์ 0 ในนี้คือขา 8
  // เมื่อเกิดเหตุการณ์ แรงดันที่ขา 2 มีการเปลี่ยนแปลงจากสัญญาณสูงเป็นต่ำ ให้ทำในฟังก์ชั่น doCounter
  Serial.begin(9600);
}
boolean isCounter = false;
int count = 0;
void loop() {
  if (isCounter == true) {
    isCounter = false;
    Serial.println(count);
  }
}

void doCounter() { // เมื่อเซนเซอร์ตรวจจับวัตถุ
  isCounter = true;
  count++;
}
`}
                        </Highlight>
                    </div>
                    <br></br>
                </div>
            </main>
            <script src="sidebars.js"></script>
        </body>
    );
}

export default F249;