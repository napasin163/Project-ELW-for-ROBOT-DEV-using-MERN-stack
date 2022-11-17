import './SideBarArduino.css'
import { Outlet, Link } from "react-router-dom";

const SideBarArduino = () => {
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
                                    <li><Link to=" " class="link-dark d-inline-flex text-decoration-none rounded">Ultrasonic Sensor HC-SR04</Link></li>
                                    <li><Link to=" " class="link-dark d-inline-flex text-decoration-none rounded">Reflective Sensor (TCRT5000)</Link></li>
                                    <li><Link to=" " class="link-dark d-inline-flex text-decoration-none rounded">GY-9960 Infrared RGB Gesture Sensor (APDS-9960)</Link></li>
                                    <li><Link to=" " class="link-dark d-inline-flex text-decoration-none rounded">F249 Counter Module Motor Speed Sensor</Link></li>
                                    <li><Link to=" " class="link-dark d-inline-flex text-decoration-none rounded">Infrared photoelectric switch Sensor E18-D80NK</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li class="mb-1">
                            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                Servo/Motor
                            </button>
                            <div class="collapse show" id="dashboard-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to=" " class="link-dark d-inline-flex text-decoration-none rounded">Servo SG90</Link></li>
                                    <li><Link to=" " class="link-dark d-inline-flex text-decoration-none rounded">DC Gear Motor</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li class="mb-1">
                            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                Modules
                            </button>
                            <div class="collapse show" id="orders-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to=" " class="link-dark d-inline-flex text-decoration-none rounded">Passive buzzer module</Link></li>
                                    <li><Link to=" " class="link-dark d-inline-flex text-decoration-none rounded">Button switch module</Link></li>
                                    <li><Link to=" " class="link-dark d-inline-flex text-decoration-none rounded">Resistance potentiometer module</Link></li>
                                    <li><Link to=" " class="link-dark d-inline-flex text-decoration-none rounded">Adapter PS2 Joystick PlayStation</Link></li>
                                    <li><Link to=" " class="link-dark d-inline-flex text-decoration-none rounded">Relay Module 5V 2Channel</Link></li>
                                    <li><Link to=" " class="link-dark d-inline-flex text-decoration-none rounded">Interface 12C 16x2 LCD</Link></li>
                                    <li><Link to=" " class="link-dark d-inline-flex text-decoration-none rounded">OLED 128x64</Link></li>
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
                        <h1 class="h2 blackText">Ultrasonic Sensor HC-SR04</h1>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1042777068141805658/png-transparent-ultrasonic-transducer-proximity-sensor-sensor-ultrasonico-electronics-others-electronics-measurement-sound-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="400" height="500" ></img>
                    </div>
                    <div class="h2 px-4 blackText">
                        <h2>รายละเอียด</h2>
                    </div>
                    <div class="px-5 blackText">
                        <p>HC-SR04 เป็นโมดูลอัลตร้าโซนิคเป็นอุปกรณ์เซ็นเซอร์ใช้วัดระยะทางของวัตถุกับตัวเซ็นเซอร์ โดยไม่ต้องมีการสัมผัสกับตำแหน่งที่ต้องการวัด วัดได้ตั้งแต่ 2 cm ถึง 400 cm รองรับแรงดันไฟ 3.3-5V อาศัยการทำงานของคลื่นเสียง โดยส่งสัญญาณอัลตร้าโซนิคความถี่ 40kHz (40,000Hz) ซึ่งจัดอยู่ในย่าน Ultrasonic (ความถี่สูงกว่าที่หูมนุษย์จะสามารถได้ยิน) ไปที่วัตถุที่ต้องการวัดและรับสัญญาณที่สะท้อนกลับมา พร้อมทั้งจับเวลาเพื่อนำมาใช้ในการคำนวณ โมดูลตัวนี้เป็นโมดูลยอดนิยมอีกตัวที่นำไปใช้ในโปรเจคหาระยะห่างของวัตถุ หรือใช้ในโครงงานหุ่นยนต์ต่างๆ ใช้งานง่าย ราคาถูก มีไลบรารี่สำหรับต่อกับ Arduino ได้โดยตรง เพื่อแสดงระยะทางได้ทันที </p>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="embed-responsive embed-responsive-16by9 ">
                        <iframe width="700" height="400" src="https://www.youtube.com/embed/IGLVMBTIAPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div class="h2 px-4 blackText">
                        <h2>ข้อมูลการใช้งาน</h2>
                    </div>
                    <br></br>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1042832455813566595/HC-SR04-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="800" height="700" ></img>
                    </div>
                    <p>การต่อเพื่อใช้งานทำได้โดยต่อ PIN ดังนี้ </p>
                    <p>PIN ที่ 1 -- 5V Supply</p>
                    <p>PIN ที่ 2 -- Trigger Pulse Input</p>
                    <p>PIN ที่ 3 -- Echo Pulse Output</p>
                    <p>PIN ที่ 4 –- GND</p>
                    <hr></hr>

                </div>

            </main>
            <script src="sidebars.js"></script>
        </body>


    );
}
export default SideBarArduino;