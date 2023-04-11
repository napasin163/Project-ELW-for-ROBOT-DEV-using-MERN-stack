import './HCSR04.css'
import { Outlet, Link } from "react-router-dom";
import Highlight from 'react-highlight'


const Motor = () => {
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
                                    <li><Link to="/Motor" class="link-dark d-inline-flex text-decoration-none rounded">Interface 12C 16x2 Motor</Link></li>
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
                        <h1 class="h2 blackText bold2">L298N Motor Driver</h1>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1090807010737532999/e7hrfe-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="400" height="500" ></img>
                    </div>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รายละเอียด</h2>
                    </div>
                    <div class="px-5 blackText">
                        <p>Motor Driver Module (L298N) เป็นโมดูลที่ใช้สำหรับควบคุมการทำงานของมอเตอร์ โดยมีการเชื่อมต่อกับไมโครคอนโทรเลอร์หรือบอร์ดไมโครคอนโทรเลอร์ เพื่อทำการสั่งงานการทำงานของมอเตอร์ได้ โดยมีความสามารถในการควบคุมแรงดันได้สูงสุด 2 ช่อง ทำให้เหมาะสำหรับการนำมาใช้ในการสร้างโมดูลรถยนต์ที่ใช้การควบคุมมอเตอร์ได้ง่าย ๆ และสะดวก หรือการสร้างหุ่นยนต์ และโมดูลอื่น ๆ ที่ใช้มอเตอร์ในการทำงาน โมดูล Motor Driver Module (L298N) มีส่วนประกอบหลัก ประกอบไปด้วย ตัวจ่ายไฟ (power supply) ที่รองรับการเชื่อมต่อแบบ DC และสามารถใช้แรงดันไฟฟ้าได้สูงสุด 46V โดยมีความสามารถในการควบคุมกระแสได้สูงสุดถึง 2A ต่อช่อง และมีส่วนประกอบอื่น ๆ เช่น วงจร Relay และวงจร Logic ที่ช่วยให้การควบคุมมอเตอร์ได้ง่ายขึ้น โดยเฉพาะในการสลับสัญญาณกลับและสลับสัญญาณหน้าของมอเตอร์ ทำให้มีประสิทธิภาพในการทำงานที่แม่นยำและมีประสิทธิภาพสูง </p>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="embed-responsive embed-responsive-16by9 ms-5">
                        <iframe width="1100" height="700" src="https://www.youtube.com/embed/AAH-kdJxFTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
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
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1090805237830393866/Drive_motor-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="800" height="700" ></img>
                    </div>
                    <div class="px-5 blackText">
                        <p>การใช้งาน Motor Driver Module (L298N) จะต้องเชื่อมต่อกับบอร์ด Arduino และมอเตอร์ด้วยสายไฟฟ้า โดยมีขั้วเชื่อมต่อ 5V และ GND สำหรับจ่ายไฟเข้ามาในโมดูล และมีขั้วเชื่อมต่อ IN1, IN2, IN3 และ IN4 สำหรับควบคุมการทำงานของมอเตอร์ และมีขั้วเชื่อมต่อ OUT1, OUT2, OUT3 และ OUT4 สำหรับส่งสัญญาณไฟฟ้าไปยังมอเตอร์ </p>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">จำลองการต่อวงจร</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://i.imgur.com/0KAVPw0.gif" class="img-fluid rounded-3 mb-4 ps-5" alt="555" width="1100" height="900" ></img>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">โค้ดตัวอย่าง</h2>
                    </div>
                    <div class="d-flex justify-content-center ">
                        <Highlight language="c++">
                            {`    // Motor A
    #define dir1PinA  2
    #define dir2PinA  3
    #define speedPinA  4 //   เพื่อให้ PWM สามารถควบคุมความเร็วมอเตอร์ 
    void setup()
        {
    Serial.begin(9600);
    //กำหนด ขา เพื่อใช้ในการควบคุมการทำงานของ  Motor ผ่านทาง L298N
    pinMode(dir1PinA,OUTPUT);
    pinMode(dir2PinA,OUTPUT);
    pinMode(speedPinA,OUTPUT);
    }
    void loop()
         {
    // Motor A
    analogWrite(speedPinA, 255); //ตั้งค่าความเร็ว PWM ผ่านตัวแปร ค่าต่ำลง มอเตอร์จะหมุนช้าลง
    digitalWrite(dir1PinA, HIGH);
    digitalWrite(dir2PinA, LOW);

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

export default Motor;