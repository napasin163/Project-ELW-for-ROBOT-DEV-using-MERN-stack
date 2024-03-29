import './HCSR04.css'
import { Outlet, Link } from "react-router-dom";
import Highlight from 'react-highlight'

const HCSR04 = () => {

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
                        <h1 class="h2 blackText bold2">Ultrasonic Sensor HC-SR04</h1>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1042777068141805658/png-transparent-ultrasonic-transducer-proximity-sensor-sensor-ultrasonico-electronics-others-electronics-measurement-sound-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="400" height="500" ></img>
                    </div>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รายละเอียด</h2>
                    </div>
                    <div class="px-5 blackText">
                        <p>Ultrasonic Sensor Module HC-SR04 เป็นโมดูลเซ็นเซอร์อัลตราโซนิค (Ultrasonic Sensor) ที่ใช้งานเพื่อวัดระยะทางของวัตถุกับตัวเซ็นเซอร์ โดยใช้คลื่นเสียง ultrasonic ความถี่ 40kHz (40,000Hz) ความถี่สูงกว่าเสียงที่มนุษย์ได้ยิน  โดยไม่ต้องมีการสัมผัสกับตำแหน่งที่ต้องการวัด วัดได้ตั้งแต่ 2 cm ถึง 400 cm รองรับแรงดันไฟ 3.3-5V  โมดูลนี้ประกอบด้วยตัวรับ-ส่งคลื่น ultrasonic และวงจรขยายสัญญาณเพื่อให้สามารถอ่านค่าระยะทางได้อย่างแม่นยำพร้อมทั้งจับเวลาเพื่อนำมาใช้ในการคำนวณ โดยมีขนาดเล็กและเป็นโมดูลที่ใช้ง่าย ราคาถูก สามารถนำไปใช้งานในหลายๆ แอพพลิเคชัน เช่น หุ่นยนต์เคลื่อนที่, อุปกรณ์ IoT, หรือการตรวจวัดระยะทางในงานอุตสาหกรรม โดยมักจะใช้กับไมโครคอนโทรเลอร์หรือบอร์ดพัฒนาอิเล็กทรอนิกส์</p>
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
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1042832455813566595/HC-SR04-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="800" height="700" ></img>
                    </div>
                    <div class="px-5 blackText">
                        <b>การใช้งาน Ultrasonic Sensor Module HC-SR04 สามารถทำได้โดยการต่อโมดูลเซ็นเซอร์กับไมโครคอนโทรเลอร์หรือบอร์ดพัฒนาอิเล็กทรอนิกส์ต่างๆ ดังนั้นจึงต้องมีการเชื่อมต่อขาต่างๆ ดังนี้</b>
                        <p>1. ต่อขา VCC ของโมดูลเซ็นเซอร์กับขาไฟบอร์ดพัฒนา</p>
                        <p>2. ต่อขา GND ของโมดูลเซ็นเซอร์กับขาอีกด้านของไฟบอร์ดพัฒนา</p>
                        <p>3. ต่อขา Trigger ของโมดูลเซ็นเซอร์กับขา Digital Output ของไฟบอร์ดพัฒนา</p>
                        <p>4. ต่อขา Echo ของโมดูลเซ็นเซอร์กับขา Digital Input ของไฟบอร์ดพัฒนา</p>
                        <br></br>
                    </div>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รูปภาพประกอบ</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1043224938179477524/LINE_ALBUM__221119.jpg" class="img-fluid rounded-3 mb-4" alt="555" width="800" height="700" ></img>
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
                            {`    #define Trig 9 // กำหนด Pin 9 = Trig 
    #define Echo 10  // กำหนด Pin  10 = Echo
    float duration ; // สำหรับเก็บค่าเวลาที่เสียงเดินทาง
    float distance ; // สำหรับเก็บค่าระยะทางที่คำนวณได้
    void setup() {  
    pinMode(Trig, OUTPUT); //กำหนดขา Trig เป็น output
    pinMode(Echo, INPUT); // กำหนดขา Echo เป็น input
    Serial.begin(9600); // เริ่ม Serial เพื่อใช้ Serial Monitor
    }
    void loop(){
    
    digitalWrite(Trig, LOW); // เคลียร์ค่าขา trig ป้องกันกรณีสถานะค้างเก่าค้างอยู่ 
    delayMicroseconds(5);    // 5 ไมโครวินาที
    
    digitalWrite(Trig, HIGH); // ให้ขา Trig ส่งคลื่นออกไป 
    delayMicroseconds(10);    //10 ไมโครวินาที
    digitalWrite(Trig, LOW);  // ให้ขา Trig ปิดการส่งคลื่นออกไป  
    
    duration = pulseIn(Echo, HIGH); // จับเวลาจนกว่าจะมีคลื่นเสียงมากระทบ Echo โดยคำสั่ง pulseIn
    distance = (duration*0.034)/2;  // คำนวณหาระยะตามสูตรข้างต้น

    // แสดงค่าทาง Serial Monitor
    Serial.print("Distance: ");
    Serial.print(distance);
    Serial.println(" cm ");
    }`}
                        </Highlight>
                    </div>
                    <br></br>
                </div>
            </main>
            <script src="testScript.js"></script>
        </body>


    );
}
export default HCSR04;