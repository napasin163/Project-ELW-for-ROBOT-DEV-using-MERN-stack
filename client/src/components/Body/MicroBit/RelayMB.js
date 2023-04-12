import { Outlet, Link } from "react-router-dom";
import Highlight from 'react-highlight'

const RelayMB = () => {
    return (
        <body>
            <main class="d-flex flex-nowrap">
                <div class="flex-shrink-0 p-3 bg-white stylexd">
                    <Link to="/microbit" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom ">
                        <svg class="bi pe-none me-2" width="30" height="24"></svg>
                        <span class="fs-5 fw-semibold">Micro:Bit</span>
                    </Link>
                    <ul class="list-unstyled ps-0">
                    <li class="mb-1">
                            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                Sensor
                            </button>
                            <div class="collapse show" id="home-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="/hcsr04MB" class="link-dark d-inline-flex text-decoration-none rounded">Ultrasonic Sensor HC-SR04</Link></li>
                                    <li><Link to="/tcrtMB" class="link-dark d-inline-flex text-decoration-none rounded">Reflective Sensor (TCRT5000)</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li class="mb-1">
                            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                Motor
                            </button>
                            <div class="collapse show" id="dashboard-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="/servoMB" class="link-dark d-inline-flex text-decoration-none rounded">Servo G90s</Link></li>                                </ul>
                            </div>
                        </li>
                        <li class="mb-1">
                            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                Modules
                            </button>
                            <div class="collapse show" id="orders-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="/buzzerMB" class="link-dark d-inline-flex text-decoration-none rounded">Passive buzzer module</Link></li>
                                    <li><Link to="/relayMB" class="link-dark d-inline-flex text-decoration-none rounded">Relay Module 5V 2Channel</Link></li>
                                    <li><Link to="/lcdMB" class="link-dark d-inline-flex text-decoration-none rounded">Interface 12C 16x2 LCD</Link></li>
                                    <li><Link to="/oledMB" class="link-dark d-inline-flex text-decoration-none rounded">OLED 128x64</Link></li>
                                    <li><Link to="/motorMB" class="dropdown-item">L298N Motor Driver</Link></li>
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
                        <h1 class="h2 blackText bold2">Relay Module 2 ช่อง 5V</h1>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/837757981549396049/1053045455354855545/Relay_module-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="300" height="500" ></img>
                    </div>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รายละเอียด</h2>
                    </div>
                    <div class="px-5 blackText">
                        <p>Relay module 5V 2 channel คืออุปกรณ์ที่ใช้สำหรับควบคุมการเปิด-ปิดวงจรไฟฟ้า โดยมีความสามารถในการควบคุมไฟฟ้าได้สูงสุด 2 ช่อง ซึ่งแต่ละช่องจะมีเกตเปอร์นำไฟฟ้าแยกออกจากกันได้ ในแต่ละช่องจะมีขั้วสัญญาณเข้า (Input) และขั้วสัญญาณออก (Output) ที่ใช้ในการเชื่อมต่อกับวงจรไฟฟ้าที่ต้องการควบคุม สามารถนำไปใช้ควบคุมการเปิด-ปิดอุปกรณ์ต่างๆ เช่น ไฟห้อง, พัดลม, ประตูอัตโนมัติ หรือเครื่องจักรอุตสาหกรรม โดยอุปกรณ์นี้มีการควบคุมด้วยสัญญาณไฟฟ้าจากไมโครคอนโทรเลอร์หรือบอร์ดคอมพิวเตอร์ ที่สามารถใช้งานได้ง่ายผ่านพอร์ต GPIO หรือบางรุ่นอาจมีการเชื่อมต่อผ่าน USB ซึ่งจะทำให้ง่ายต่อการนำไปใช้งานในการควบคุมต่างๆ ในงานอุตสาหกรรมหรือการใช้งานในบ้านได้ง่ายขึ้น อุปกรณ์ Relay module 5V 2 channel นั้นมีความน่าเชื่อถือสูงและใช้งานได้ง่าย โดยไม่ต้องใช้วิธีการเขียนโค้ดคอมพิวเตอร์ขั้นสูงมากนักในการใช้งาน</p>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="embed-responsive embed-responsive-16by9 ms-5">
                        <iframe width="1100" height="700" src="https://www.youtube.com/embed/oU3tw-prZ5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
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
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1095700219850653717/Relay-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="800" height="700" ></img>
                    </div>
                    <div class="px-5 blackText">
                    <p>การใช้งาน relay module จะต้องเชื่อมต่อกับอุปกรณ์อื่น ๆ เพื่อควบคุมการเปิด-ปิด โดยมีขั้วสัญญาณเข้า (input) และขั้วไฟฟ้าออก (output) ที่มีการต่อไฟฟ้าผ่าน relay ในตัวโมดูล เมื่อเชื่อมต่อแล้ว ในการควบคุมการเปิด-ปิด relay module สามารถใช้คำสั่ง digitalWrite() หรือ digitalRead() ได้เช่นเดียวกับการควบคุมอุปกรณ์แบบอื่น ๆ ในบอร์ด Arduino </p>
                    </div>
                    <hr></hr>
                    <br></br>
                    <div class="h2 px-4 blackText">
                        <h2  class="bold2">จำลองการต่อวงจร</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://i.imgur.com/XjcbVa4.gif" class="img-fluid rounded-3 mb-4 ps-5" alt="555" width="1100" height="900" ></img>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">โค้ดตัวอย่าง</h2>
                    </div>
                    <div class="d-flex justify-content-center ">
                    <img src="https://cdn.discordapp.com/attachments/768084656465117227/1095700220102332437/Relay.jpg" class="img-fluid rounded-3 mb-4" alt=" 123" width="700" height="700" ></img>
                    </div>
                </div>
            </main>
            <script src="sidebars.js"></script>
        </body>


    );
}
export default RelayMB;