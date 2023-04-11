import './HCSR04.css'
import { Outlet, Link } from "react-router-dom";
import Highlight from 'react-highlight'


const OLED = () => {
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
                        <h1 class="h2 blackText bold2">OLED 128x64</h1>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052628000937627688/OLED.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="400" height="500" ></img>
                    </div>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รายละเอียด</h2>
                    </div>
                    <div class="px-5 blackText">
                        <p>OLED 128x64 คือโมดูลหน้าจอแสดงผลที่ใช้เทคโนโลยี OLED (Organic Light Emitting Diode) ในการแสดงผล โดยมีขนาดหน้าจอขนาด 128x64 คือมีความละเอียดแบบกริด (pixel) ขนาด 128 แถวและ 64 คอลัมน์ สามารถแสดงผลภาพและข้อความได้อย่างชัดเจน สดใส และสว่างได้โดยไม่ต้องใช้แสงหลังเต่า (backlight) OLED 128x64 มีขนาดเล็กและสามารถใช้งานได้ง่าย โดยมีการเชื่อมต่อผ่านขา I2C หรือ SPI ซึ่งช่วยให้การเขียนโปรแกรมและการควบคุมแสดงผลได้ง่ายขึ้น โดยมักจะนำไปใช้ในการแสดงผลข้อมูลต่าง ๆ ในอุปกรณ์ต่าง ๆ เช่น นาฬิกาอัจฉริยะ โทรศัพท์มือถือ อุปกรณ์การติดตั้งในรถยนต์</p>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="embed-responsive embed-responsive-16by9 ms-5">
                        <iframe width="1100" height="700" src="https://www.youtube.com/embed/_h-oLC673nQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
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
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1053053583911821372/OLED_128x64-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="800" height="700" ></img>
                    </div>
                    <div class="px-5 blackText">
                    <b>ข้อมูลการใช้งานของ OLED 128x64 มีดังนี้: </b>
                    <p>1.	การเชื่อมต่อ OLED 128x64 มี 4 ขา ได้แก่ VCC, GND, SDA และ SCL โดยที่ขา VCC ต่อกับแหล่งจ่ายไฟ 3.3V หรือ 5V ของ Microcontroller และ GND ต่อกับแหล่งจ่ายไฟ GND ของ Microcontroller ส่วน SDA และ SCL จะต้องเชื่อมต่อกับขาพอร์ต I2C หรือ SPI ของ Microcontroller</p>
                    <p>2.	การใช้งาน OLED 128x64 จะต้องมีการติดตั้งไลบรารีก่อน ซึ่งไลบรารีที่ใช้กันอย่างแพร่หลายคือ Adafruit_SSD1306 โดยสามารถติดตั้งได้ผ่าน Library Manager ของ Arduino IDE</p>
                    <br></br>
                    </div>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รูปภาพประกอบ</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/837757981549396049/1053045604030349342/LINE_ALBUM___2.jpg" class="img-fluid rounded-3 mb-4" alt="555" width="800" height="700" ></img>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">จำลองการต่อวงจร</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://i.imgur.com/kj8ujw4.gif" class="img-fluid rounded-3 mb-4 ps-5" alt="555" width="1100" height="900" ></img>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">โค้ดตัวอย่าง</h2>
                    </div>
                    <div class="d-flex justify-content-center ">
                        <Highlight language="c++">
                            {`#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#define SCREEN_WIDTH 128 // pixel ความกว้าง
#define SCREEN_HEIGHT 64 // pixel ความสูง 
// กำหนดขาต่อ I2C กับจอ OLED
#define OLED_RESET     -1 //ขา reset เป็น -1 ถ้าใช้ร่วมกับขา Arduino reset
Adafruit_SSD1306 OLED(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);
void setup() {
  Serial.begin(9600);
  if (!OLED.begin(SSD1306_SWITCHCAPVCC, 0x3C)) { // สั่งให้จอ OLED เริ่มทำงานที่ Address 0x3C
    Serial.println("SSD1306 allocation failed");
  } else {
    Serial.println("Ardino OLED Start Work !!!");
  }
}
void loop() { 
  OLED.clearDisplay();             // ลบภาพในหน้าจอทั้งหมด
  OLED.setTextColor(WHITE, BLACK); //กำหนดข้อความสีขาว ฉากหลังสีดำ
  OLED.setCursor(30,0);            // กำหนดตำแหน่ง x,y ที่จะแสดงผล
  OLED.setTextSize(3);             // กำหนดขนาดตัวอักษร
  OLED.println("OLED");            // แสดงผลข้อความ 
  
  OLED.setTextColor(BLACK, WHITE); //กำหนดข้อความสีดำ ฉากหลังสีขาว
  OLED.setCursor(22, 25);          // กำหนดตำแหน่ง x,y ที่จะแสดงผล
  OLED.setTextSize(2);             // กำหนดขนาดตัวอักษร
  OLED.println("welcome");         // แสดงผลข้อความ 
  
  OLED.setTextColor(WHITE, BLACK); //กำหนดข้อความสีขาว ฉากหลังสีดำ
  OLED.setCursor(0, 45);           // กำหนดตำแหน่ง x,y ที่จะแสดงผล
  OLED.setTextSize(2);             // กำหนดขนาดตัวอักษร
  OLED.println("ArduinoUno");      // แสดงผลข้อความ 
  OLED.display();                  // สั่งให้จอแสดงผล
  delay(500);
}`}
                        </Highlight>
                    </div>
                    <br></br>
                </div>
            </main>
            <script src="sidebars.js"></script>
        </body>
    );
}

export default OLED;