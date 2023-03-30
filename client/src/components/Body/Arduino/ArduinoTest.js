import './Arduino.css'
import { Outlet, Link } from "react-router-dom";
const Arduino = () => {
    return (
        <body>
            <main>
                <div class="px-4 pt-5 my-5 text-center border-bottom">
                    <h1 class="display-4 fw-bold blackText">Arduino</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4 blackText">คำว่า Uno เป็นภาษาอิตาลี ซึ่งแปลว่าหนึ่ง เป็นบอร์ด Arduino รุ่นแรกที่ผลิตออกมา มีขนาดประมาณ 68.6×53.4 mm. เป็นบอร์ดมาตรฐานที่นิยมใช้งานมากที่สุด เนื่องจากเป็นขนาดที่เหมาะสาหรับการเริ่มต้นเรียนรู้ Arduino และมี Shields ให้เลือกใช้งานได้มากกว่าบอร์ด Arduino รุ่นอื่นๆ ที่ออกแบบมาเฉพาะมากกว่า โดยบอร์ด Arduino Uno ได้มีการพัฒนาเรื่อยมา ตั้งแต่ R2 R3 และรุ่นย่อยที่เปลี่ยนชิปไอซีเป็นแบบ SMD เป็นบอร์ด Arduino ที่ได้รับความนิยมมากที่สุด เนื่องจากราคาไม่แพง และส่วนใหญ่โปรเจคและ Library ต่างๆ ที่พัฒนาขึ้นมา Support จะอ้างอิงกับบอร์ดนี้เป็นหลัก และข้อดีอีกอย่างคือกรณีที่ MCU เสียผู้ใช้งานสามารถซื้อมาเปลี่ยนเองได้ง่าย Arduino Uno R3 มี MCU ที่เป็น Package DIP</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                            <a href="https://www.arduino.cc/" class="btn btn-success btn-lg px-4 me-sm-3"> Learn more!</a>

                            <button type="button" class="btn btn-success btn-lg px-4 me-sm-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Datasheet
                            </button>


                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-xl">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Datasheet</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <img src="https://cdn.discordapp.com/attachments/1034796504126341230/1052617768148676628/SRL-image-0.png" alt="datasheet" width="100%" height="100%"></img>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary btn-lg px-4 me-sm-3" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="overflow-hidden xd">
                        <div class="container px-5">
                            <img src="https://cdn.discordapp.com/attachments/1034796504126341230/1052556011090739295/4yair3.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt=" 123" width="900" height="500" loading="lazy"></img>
                        </div>
                    </div>
                    <br></br>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4 blackText">
                            คู่มือเเละขั้นตอนการใช้งานบอร์ด Arduino กับอุปกรณ์อิเล็กทรอนิกส์ต่างๆ สามารถกดเข้าไปที่ปุ่มด้านล่างเพื่อเรียนรู้เพิ่มเติมได้เลย !</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                            <a href="/hcsr04" class="btn btn-success btn-lg px-4 me-sm-3"> Learn more!</a>
                        </div>
                    </div>

                    <hr class="featurette-divider"></hr>

                    <div class="row row-cols-1 row-cols-md-2 px-5 g-4">
                        <div class="col">
                            <div class="card shadow-lg">
                                <img src="https://cdn.discordapp.com/attachments/1034796504126341230/1052603449704972368/arduino_logo_1200x630-01.png" width="600" height="460" class="card-img-top" alt="bruh2"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Coding</h5>
                                    <p class="card-text">เรียนรู้การเขียนโค้ดคำสั่งการใช้งานควบคุมอุปกรณ์อิเล็กทรอนิกส์เบื้องต้นผ่านโปรเเกรม Arduino IDE </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-lg">
                                <img src="https://cdn.discordapp.com/attachments/1034796504126341230/1052554812513849354/istockphoto-1216392018-612x612.jpg" width="934" height="460" class="card-img-top" alt="bruh"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Circuit</h5>
                                    <p class="card-text">เรียนรู้การต่อวงจรสำหรับอุปกรณ์อิเล็กทรอนิกส์กับบอร์ด Arduino พร้อมการจำลองเเละคลิปตัวอย่าง</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <hr class="featurette-divider"></hr>

                    <div class="row row-cols-1 row-cols-md-3 g-5 px-5">
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1042777068141805658/png-transparent-ultrasonic-transducer-proximity-sensor-sensor-ultrasonico-electronics-others-electronics-measurement-sound-removebg-preview.png" class="card-img-top" alt="ultrasonic"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Ultrasonic Sensor HC-SR04</h5>
                                    <p class="card-text">เซนเซอร์ตรวจจับระยะวัตถุ</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052620712520712242/TCRT5000.png" width="100" height="380" class="card-img-top" alt="TCRT5000"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Reflective Sensor (TCRT5000)</h5>
                                    <p class="card-text">เซนเซอร์ใช้แสงประเภทลำแสงสะท้อนกลับ</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052621305524011008/F249.png" class="card-img-top" alt="F249"></img>
                                <div class="card-body">
                                    <h5 class="card-title">F249 Counter Module Motor Speed Sensor</h5>
                                    <p class="card-text">เซนเซอร์นับจำนวน (กล้ามปู)</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052621305859538944/Infrared_photoelectric_switch_Sensor_E18-D80NK.png" class="card-img-top" alt="E18-D80NK"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Infrared photoelectric switch Sensor E18-D80NK</h5>
                                    <p class="card-text">เซนเซอร์ตรวจจับวัตถุ</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1043260993985314836/Mini-Servo-Motor-SG91R-removebg-preview.png" height="470" class="card-img-top" alt="SG91R"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Servo G90s</h5>
                                    <p class="card-text">เซอร์โว</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1043252975725973535/Picture1-removebg-preview.png" class="card-img-top" alt="buzzer"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Passive buzzer module</h5>
                                    <p class="card-text">โมดูลลำโพง</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052624411729084476/Bontton.png" height="470" class="card-img-top" alt="Button"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Button switch module</h5>
                                    <p class="card-text">โมดูลปุ่ม</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052628002112012338/JoyStick.png" class="card-img-top" alt="joystick"></img>
                                <div class="card-body">
                                    <br></br><br></br><br></br><br></br><br></br>
                                    <h5 class="card-title">Adapter PS2 Joystick PlayStation</h5>
                                    <p class="card-text">ขาขยายรีโมทจอยสติ๊ก</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052628002414018570/Relay_module.png" height="470" class="card-img-top" alt="relay"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Relay Module 5V 2Channel</h5>
                                    <p class="card-text">โมดูล รีเลย์</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052629356234674238/yvsnfv-removebg-preview.png" height="470" class="card-img-top" alt="lcd"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Interface 12C 16x2 LCD</h5>
                                    <p class="card-text">โมดูล จอLCD</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052628000937627688/OLED.png" height="470" class="card-img-top" alt="OLCD"></img>
                                <div class="card-body">
                                    <h5 class="card-title">OLED 128x64</h5>
                                    <p class="card-text">โมดูล จอOLED</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1090807010737532999/e7hrfe-removebg-preview.png" height="470" class="card-img-top" alt="relay"></img>
                                <div class="card-body">
                                    <h5 class="card-title">L298N Motor Driver</h5>
                                    <p class="card-text">โมดูล มอเตอร์ไดร์ฟ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <br></br>
                </div>
                <hr class="featurette-divider"></hr>
                <footer class="container pb-5">
                    <p class="float-end"><a href="#">Back to top</a></p>
                    <p>&copy; 2022 KMITL. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
                </footer>
            </main>
        </body>
    );
}


export default Arduino;