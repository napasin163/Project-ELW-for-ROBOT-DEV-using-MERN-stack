import './HCSR04.css'
import { Outlet, Link } from "react-router-dom";
import Highlight from 'react-highlight'

const Buzzer = () => {
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
                        <h1 class="h2 blackText bold2">Passive buzzer module</h1>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1043252975725973535/Picture1-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="400" height="500" ></img>
                    </div>
                    <div class="h2 px-4 blackText ">
                        <h2 class="bold2">รายละเอียด</h2>
                    </div>
                    <div class="px-5 blackText">
                        <p>โมดูลเสียง Passive Buzzer Module 3.3-5V ทำงานแบบ Active Low สามารถสร้างเสียงได้ง่าย โดยการต่อขา I/O ของ Passive Buzzer กับขา I/O ของ Arduino หรือไมโครคอนโทรลเลอร์ได้โดยตรง และต่อกับขา VCC ของ Passive Buzzer กับไฟเลี้ยง 3.3-5VDC และขา GND กับ GND ในการสั่งให้ Passive Buzzer มีเสียง ทำได้โดยการส่งสัญญาณค่าต่างๆ เพื่อสร้างโทนเสียงที่แตกต่างกัน</p>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="embed-responsive embed-responsive-16by9 ms-5">
                        <iframe width="1100" height="700" src="https://www.youtube.com/embed/QewsHubmv8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
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
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1043252975340101713/Buzzer-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="800" height="700" ></img>
                    </div>
                    <p>การต่อเพื่อใช้งานทำได้โดยต่อ PIN ดังนี้ </p>
                    <p>Buzzer - Arduino</p>
                    <p>Vcc - 3.3V หรือ 5V</p>
                    <p>I/O – 8</p>
                    <p>Gnd - Gnd</p>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รูปภาพประกอบ</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/837757981549396049/1052946288343273522/IMG_25651215_192547.jpg" class="img-fluid rounded-3 mb-4" alt="555" width="800" height="700" ></img>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">จำลองการต่อวงจร</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://i.imgur.com/u8Ijk9a.gif" class="img-fluid rounded-3 mb-4 ps-5" alt="555" width="1100" height="900" ></img>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">โค้ดตัวอย่างที่ 1</h2>
                    </div>
                    <div class="d-flex justify-content-center ">
                        <Highlight language="c++">
                            {`#define BUZZER 8 // กำหนด Pin 8 = BUZZER 
void setup() {
  pinMode(BUZZER, OUTPUT); //กำหนดขา BUZZER เป็น output
}

void loop() {

  digitalWrite(BUZZER, LOW);  // สั่งปิด BUZZER 
  delay(500);                 // หน่วงเวลา 500ms
  digitalWrite(BUZZER, HIGH); // สั่งเปิด BUZZER 
  delay(500);                 // หน่วงเวลา 500ms
}
`}
                        </Highlight>
                    </div>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">โค้ดตัวอย่างที่ 2</h2>
                    </div>
                    <div class="d-flex justify-content-center ">
                        <Highlight language="c++">
                            {`#define BUZZER 8 // กำหนด Pin 8 = BUZZER 
void setup() {
  pinMode(BUZZER, OUTPUT); //กำหนดขา BUZZER เป็น output
}

void loop() {
  tone(BUZZER, 100,);  // ให้ BUZZERมีเสียงด้วยความถี่ = 100
  delay(500);                 // หน่วงเวลา 500ms       
  tone(BUZZER, 1000,); // ให้ BUZZERมีเสียงด้วยความถี่ = 1000
  delay(500);                 // หน่วงเวลา 500ms       

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
export default Buzzer;