import './HCSR04.css'
import { Outlet, Link } from "react-router-dom";
import Highlight from 'react-highlight'


const Button = () => {
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
                        <h1 class="h2 blackText bold2">Button switch module</h1>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/837757981549396049/1053043001213059173/Bontton-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="300" height="400" ></img>
                    </div>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รายละเอียด</h2>
                    </div>
                    <div class="px-5 blackText">
                        <p>Button switch module เป็นโมดูลอิเล็กทรอนิกส์ที่ใช้สำหรับตรวจจับสถานะการกดปุ่ม (button) เป็นปุ่มกดลักษณะกดติดปล่อยดับ แบบ pull up เมื่อยังไม่กดสวิตช์ให้สัญญาณ 1 เมื่อกดสวิตช์ให้สัญญาณ 0 โดยมีโครงสร้างพื้นฐานประกอบด้วยสองส่วนหลัก คือปุ่มกด (button) และเรซิสเตอร์ (resistor) ภายในโมดูลจะมีขา (pin) ทั้งหมดสามขา คือ VCC, GND, และ Signal โดยสามารถเชื่อมต่อกับบอร์ดพัฒนาโปรแกรม เพื่อใช้งานได้ตามต้องการ โดยเมื่อปุ่มถูกกด เรซิสเตอร์จะเปลี่ยนค่าความต้านทานภายใน ซึ่งจะทำให้สัญญาณ Signal เปลี่ยนแปลง และส่งสัญญาณไปยังบอร์ดพัฒนาโปรแกรม เพื่อรับรู้สถานะการกดปุ่ม (button) และดำเนินการตามโปรแกรมที่ได้เขียนไว้ โมดูล Button switch เป็นอุปกรณ์ที่ใช้งานได้ง่ายและเหมาะสำหรับการนำมาใช้ในการควบคุมอุปกรณ์ต่างๆ เช่น การเปิดปิดไฟ หรือเปิดปิดเครื่องใช้ไฟฟ้าอื่นๆ ตามที่ผู้ใช้ต้องการ </p>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="embed-responsive embed-responsive-16by9 ms-5">
                        <iframe width="1100" height="700" src="https://www.youtube.com/embed/zHif0Dwbhe0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
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
                        <img src="https://cdn.discordapp.com/attachments/837757981549396049/1053043001628303440/Button-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="800" height="700" ></img>
                    </div>
                    <div class="px-5 blackText">
                        <p>การใช้งาน Button switch module จะต้องเชื่อมต่อกับพอร์ตของไมโครคอนโทรลเลอร์หรือคอมพิวเตอร์ที่มีความสามารถรับเอาต์พุตสัญญาณเข้ามาได้ โดยมีขาสายสองเส้น คือขา GND (อักษรย่อของ Ground) และขา Signal ซึ่งจะต้องเชื่อมต่อกับพอร์ตที่ต้องการใช้งาน เมื่อทำการเชื่อมต่อแล้ว ในการอ่านสถานะของ Button switch module จะต้องใช้คำสั่งอ่านข้อมูลจากพอร์ตของไมโครคอนโทรลเลอร์ โดยอ่านค่า digital input ที่เชื่อมต่อกับขา Signal ของ Button switch module ในบอร์ด Arduino สามารถอ่านค่า digital input ได้</p>
                        <br></br>
                    </div>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รูปภาพประกอบ</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/837757981549396049/1052946288573947975/IMG_25651215_192145.jpg" class="img-fluid rounded-3 mb-4" alt="555" width="800" height="700" ></img>
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
                            {`#define Button1 8 // กำหนด Pin 8 = Button1 
void setup() {  
 pinMode(Button1, INPUT); //กำหนดขา Button1 เป็น input
 Serial.begin(9600); // เริ่ม Serial เพื่อใช้ Serial Monitor
}
void loop(){
 if (digitalRead(Button1)== 0 ){ //ถ้ากดปุ่ม
  Serial.println("ถูกกดปุ่ม"); //ให้แสดงสถานะ Serial Monitor ว่า ถูกกดปุ่ม
  }
  else{ //ถ้าไม่กดปุ่ม
    Serial.println("ไม่ถูกกดปุ่ม "); //ให้แสดงสถานะ Serial Monitor ว่า ไม่ถูกกดปุ่ม
  }
 delay(500);// หน่วงเวลา 500ms
}`}
                        </Highlight>
                    </div>
                </div>
            </main>
            <script src="sidebars.js"></script>
        </body>
    );
}

export default Button;