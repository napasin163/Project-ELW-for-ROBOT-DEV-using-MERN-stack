import './HCSR04.css'
import { Outlet, Link } from "react-router-dom";
import Highlight from 'react-highlight'


const Tcrt = () => {
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
                        <h1 class="h2 blackText bold2">Reflective Sensor (TCRT5000)</h1>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052620712520712242/TCRT5000.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="400" height="500" ></img>
                    </div>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รายละเอียด</h2>
                    </div>
                    <div class="px-5 blackText">
                        <p>Reflective Sensor เป็นเซนเซอร์ที่ใช้ตรวจจับวัตถุโดยใช้แสงอินฟาเรด โดยจะมี LED แบบอินฟาเรดยิงแสงอินฟาเรดออกไป และมีตัวรับแสงอินฟาเรดรับค่าแสงที่สะท้อนกลับมา เมื่อวัตถุอยู่ใกล้จะมีแสงสะท้อนกลับมามากกว่าวัตถุที่อยู่ไกล จึงสามารถนำมาเช็ควัตถุผ่าน หรือใช้ตรวจจับเส้นสีขาว/ดำได้ โดยเส้นขาวจะให้แสงสะท้อนกลับมากกว่าสีดำ ใช้ไฟ 3.3-5V  ให้เอาต์พุตออกมา 2 แบบ คือ แบบดิจิตอลสามารถปรับค่าที่ต้องการได้ เมื่อค่าที่อ่านได้ถึงระดับที่ต้องการก็จะส่งค่า 1 ออกมา ถ้ายังไม่ถึงระดับก็จะส่งค่า 0 ออกมา และอีกแบบคือเอาต์พุตแบบอะนาล็อก อ่านค่าได้เป็นตัวเลข 0-1023 TCRT5000 นั้นเป็นเซ็นเซอร์แบบไอน์ฟรูด (Infrared) ซึ่งมีความละเอียดสูง ใช้งานได้ง่ายและราคาไม่แพง และมักนิยมใช้งานในงานอุตสาหกรรม การสร้างโรบอต หรืองาน DIY (Do-It-Yourself) ต่างๆ ด้วยความสามารถในการตรวจจับระยะทางของวัตถุในระยะสั้นๆ ส่วนใหญ่มักจะใช้งานร่วมกับไมโครคอนโทรเลอร์ หรือบอร์ดพัฒนาอิเล็กทรอนิกส์</p>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="embed-responsive embed-responsive-16by9 ms-5">
                        <iframe width="1100" height="700" src="https://www.youtube.com/embed/2aqwHiLZkeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
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
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1053043310538788864/Reflective_Sensor__TCRT5000_-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="800" height="700" ></img>
                    </div>
                    <div class="px-5 blackText">
                        <b>การใช้งาน Reflective Sensor (TCRT5000) มีขั้นตอน ดังนี้</b>
                        <p>1. ต่อเซ็นเซอร์เข้ากับวงจร: ใช้สายไฟสองเส้นต่อเข้ากับขา Output และ GND ของเซ็นเซอร์ แล้วนำไปต่อเข้ากับวงจร</p>
                        <p>2. การตั้งค่าตัวเซ็นเซอร์: ต้องการตั้งค่าระยะห่างที่จะใช้ตรวจจับ สามารถปรับเปลี่ยนระยะห่างได้โดยการเลื่อนตัวเซ็นเซอร์ไปมาในระยะห่างที่ต้องการ</p>
                        <p>3. การทดสอบเซ็นเซอร์: ใช้วัตถุที่ต้องการทดสอบวางอยู่หน้าเซ็นเซอร์ แล้วอ่านค่าเซ็นเซอร์จาก output ของเซ็นเซอร์ เมื่อวัตถุอยู่หน้าเซ็นเซอร์ จะมีการส่งแสงกลับมาที่ตัวรับ ทำให้เกิดการเปลี่ยนแปลงของสัญญาณ output ของเซ็นเซอร์ ซึ่งสามารถนำไปใช้งานต่อได้ตามต้องการ</p>
                        <p>4. การนำไปใช้งาน: Reflective Sensor (TCRT5000) สามารถนำไปใช้ตรวจจับวัตถุหรือเคลื่อนไหวในหลายแวดวง เช่น ใช้ในหุ่นยนต์เพื่อตรวจจับสิ่งกีดขวาง ใช้ในเครื่องจักรอุตสาหกรรมเพื่อตรวจจับวัตถุที่เคลื่อนที่ หรือใช้ในการสร้างโปรเจคที่ต้องการตรวจจับวัตถุหรือความเคลื่อนไหวของวัตถุแบบไม่ต้องสัมผัสโดยตรง</p>
                        <br></br>
                    </div>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รูปภาพประกอบ</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1094924606575480902/LINE_ALBUM__230410.jpg" class="img-fluid rounded-3 mb-4" alt="555" width="800" height="700" ></img>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">จำลองการต่อวงจร</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://i.imgur.com/68IjiBN.gif" class="img-fluid rounded-3 mb-4 ps-5" alt="555" width="1100" height="900" ></img>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">โค้ดตัวอย่าง</h2>
                    </div>
                    <div class="d-flex justify-content-center ">
                        <Highlight language="c++">
                            {`int analogPin = A0; //ประกาศตัวแปร ให้ analogPin แทนขา analog ขาที่5
void setup() {
Serial.begin(9600);
}
void loop() {
int val = analogRead(analogPin); //อ่านค่าสัญญาณ analog A0 ที่ต่อกับ TCRT5000 
Serial.print("val = "); // พิมพ์ข้อมความส่งเข้าคอมพิวเตอร์ "val = "
Serial.println(val); // พิมพ์ค่าของตัวแปร val
delay(100);
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

export default Tcrt;