import './HCSR04.css'
import { Outlet, Link } from "react-router-dom";
import Highlight from 'react-highlight'

const Servo = () => {
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
                        <h1 class="h2 blackText bold2">Servo G90s</h1>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1043260993985314836/Mini-Servo-Motor-SG91R-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="400" height="500" ></img>
                    </div>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รายละเอียด</h2>
                    </div>
                    <div class="px-5 blackText">
                        <p>เซอร์โวมอเตอร์ (Servo Motor) เป็นการรวมมอเตอร์ไฟฟ้ากระแสตรง (DC Motor) เข้ากับวงจรควบคุม โดยความแตกต่างที่สำคัญของเซอร์โวมอเตอร์กับมอเตอร์แบบอื่น ๆ คือเซอร์โวมอเตอร์จะรู้ตำแหน่งที่ตัวเองอยู่ และสั่งเปลี่ยนตำแหน่งโดยการเปลี่ยนองศาได้ MG90S เป็นเซอร์โวมอเตอร์เฟืองเหล็ก สามารถหมุน 180 องศา ไปกลับได้ ขนาดเล็กแข็งแรง น้ำหนัก 13.4 g ทอร์ก 2.2 kg-cm ที่แรงดัน 6 V ความเร็วในการหมุน 0.08 sec/60degree (6v) ใช้ไฟเลี้ยง 4.8V - 6V ควบคุมการทำงานด้วยสัญญาณ PWM สามารถสั่งงานผ่านไมโครคอนโทรลเลอร์ เพื่อควบคุมตำแหน่งได้ง่าย เหมาะสำหรับหุ่นยนต์ขนาดเล็ก ทำมือจับของหุ่นยนต์ นิยมใช้งานในเครื่องบินบังคับ เรือบังคับ โดยใช้กำหนดทิศทางของหางเสือเป็นองศา
                            <p>เซอร์โวมอเตอร์ประกอบด้วย 4 ส่วนหลัก คือ มอเตอร์กระแสตรง (DC Motor) ชุดเฟืองทดรอบ (Gear system) วอลุ่ม (Potentiometer หรือ VR) และวงจรควบคุม (Control Electronics)</p>
                            <p>หลักการทำงานของเซอร์โวมอเตอร์เริ่มที่วงจรควบคุม เมื่อวงจรควบคุมได้รับข้อมูลองศาที่ต้องการมาแล้ว วงจรควบคุมจะคำนวณว่ามอเตอร์จะต้องหมุนในทิศทางตามเข็มนาฬิกา หรือทวนเข็มนาฬิกา เพื่อให้ไปสู่องศาที่ต้องการได้ เมื่อมอเตอร์เริ่มหมุน ตัววอลุ่มที่ติดอยู่กับชุดเฟืองมอเตอร์จะตรวจสอบตำแหน่งที่มอเตอร์หมุนไป โดยหากวอลุ่มตรวจพบว่าตำแหน่งที่มอเตอร์หมุนเริ่มใกล้กับองศาที่ผู้ใช้กำหนด วงจรส่วนควบคุมจะเริ่มสั่งให้มอเตอร์หมุนช้าลงเพื่อให้หมุนเข้าใกล้องศาที่กำหนดได้มากที่สุด เมื่อมอเตอร์หมุนได้ตำแหน่งองศาที่ถูกต้องแล้ว วงจรส่วนควบคุมจะตรวจสอบตำแหน่งของมอเตอร์เป็นระยะ ๆ โดยอ่านค่าจากวอลุ่ม หากตรวจพบว่าตำแหน่งผิดเพี้ยนไปจากค่าที่ตั้งไว้ (อันอาจเกิดจากผู้ใช้เอามือไปหมุนเล่น หรือภาระส่งผลให้ตำแหน่งเคลื่อน) วงจรควบคุมก็จะสั่งให้มอเตอร์หมุนกลับมาให้ได้ตำแหน่งเป็นระยะ ๆ</p>
                        </p>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="embed-responsive embed-responsive-16by9 ms-5">
                        <iframe width="1100" height="700" src="https://www.youtube.com/embed/ey3t1XgBc-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
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
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1043260993578475643/Servo-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="800" height="700" ></img>
                    </div>
                    <div class="px-5 blackText">
                    <b>การใช้งาน Servo motor 90s มีขั้นตอนดังนี้</b>
                    <p>1.	ต่อสายไฟ: ต่อสายไฟสัญญาณ (Signal Pin) กับขาควบคุม (Control Pin) ของ Servo motor 90s และต่อสายไฟไฟจากแหล่งจ่ายไฟ (Power Supply) เข้ากับขาอานาล็อก (Analog Pin) และขาไฟ VCC ของ Servo motor 90s</p>
                    <p>2.	กำหนดค่า: กำหนดค่าการทำงานของ Servo motor 90s ด้วยโปรแกรมที่ใช้ในการควบคุม โดยกำหนดค่าองศาที่ต้องการให้มอเตอร์หมุนไปยังแต่ละสถานะ</p>
                    <p>3.	สั่งงาน: สั่งงาน Servo motor 90s โดยส่งสัญญาณ PWM ไปยังขาควบคุม (Control Pin) ของมอเตอร์ และมอเตอร์จะหมุนไปยังมุมที่กำหนดไว้ในโปรแกรม</p>
                    <br></br>
                    </div>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รูปภาพประกอบ</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/837757981549396049/1052946289039527987/IMG_25651215_191811.jpg" class="img-fluid rounded-3 mb-4" alt="555" width="800" height="700" ></img>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">จำลองการต่อวงจร</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://i.imgur.com/QnEVTSc.gif" class="img-fluid rounded-3 mb-4 ps-5" alt="555" width="1100" height="900" ></img>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">โค้ดตัวอย่าง</h2>
                    </div>
                    <div class="d-flex justify-content-center ">
                        <Highlight language="c++">
                            {`#include <Servo.h>
Servo myservo; //ประกาศตัวแปรแทน Servo

void setup(){
  myservo.attach(9); // กำหนดขา 9 ควบคุม Servo
}

void loop(){
  myservo.write(0); // สั่งให้ Servo หมุนไปองศาที่ 0
  delay(1000); // หน่วงเวลา 1000ms
  myservo.write(90); // สั่งให้ Servo หมุนไปองศาที่ 90
  delay(1000); // หน่วงเวลา 1000ms
  myservo.write(180); // สั่งให้ Servo หมุนไปองศาที่ 180
  delay(1000); // หน่วงเวลา 1000ms
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
export default Servo;