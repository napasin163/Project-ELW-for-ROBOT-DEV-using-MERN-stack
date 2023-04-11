import './HCSR04.css'
import { Outlet, Link } from "react-router-dom";
import Highlight from 'react-highlight'


const Joystick = () => {
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
                        <h1 class="h2 blackText bold2">Adapter PS2 Joystick PlayStation and Wireless PS2 Joystick</h1>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052628002112012338/JoyStick.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="400" height="500" ></img>
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1095346629818724382/Picture1-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="300" height="400" ></img>
                    </div>
                    <div class="h2 px-4 pb-2 blackText">
                        <h2 class="bold2">รายละเอียด</h2>
                    </div>
                    <div class="px-5 blackText">
                        <b>Adapter PS2 Joystick PlayStation </b>
                        <p>คืออุปกรณ์ที่ช่วยให้สามารถเชื่อมต่อและใช้งานจอยสำหรับเครื่องเล่นเกม PlayStation 2 กับคอมพิวเตอร์หรืออุปกรณ์อื่นที่มีพอร์ต USB ได้ โดยทั่วไปแล้ว Adapter จะประกอบด้วยสายสัญญาณที่เชื่อมต่อกับพอร์ตจอยของ PlayStation 2 และสาย USB ที่เชื่อมต่อกับคอมพิวเตอร์หรืออุปกรณ์อื่น นอกจากนี้ Adapter ยังมีส่วนควบคุมต่างๆ เพื่อช่วยให้การใช้งานจอย PlayStation 2 บนเครื่องอื่นๆ เป็นไปได้ง่ายขึ้น ซึ่งทำให้คุณสามารถเล่นเกมด้วยจอย PlayStation 2 บนคอมพิวเตอร์หรืออุปกรณ์อื่นได้อย่างสะดวกสบายมากยิ่งขึ้น</p>
                        <br></br>
                        <b>Wireless PS2 Joystick </b>
                        <p>คือ เครื่องควบคุมเกมที่ใช้งานได้กับเครื่องเล่นเกม PlayStation 2 แบบไร้สาย โดยปกติจะมีรูปแบบคล้ายกับ Joystick แบบที่ต้องเชื่อมต่อสายกับเครื่อง PlayStation 2 แต่ Wireless PS2 Joystick จะใช้วิธีการเชื่อมต่อแบบไร้สายผ่านสัญญาณวิทยุหรือระบบอื่น ๆ เช่น Bluetooth หรือระบบสัญญาณ RF ซึ่งช่วยให้ผู้เล่นสามารถควบคุมการเล่นเกมได้โดยไม่ต้องมีสายขัดขวาง หรือจำกัดอยู่ในระยะการเชื่อมต่อที่กำหนดของสายต่อ</p>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="embed-responsive embed-responsive-16by9 ms-5">
                        <iframe width="1100" height="700" src="https://www.youtube.com/embed/ggYmI9Jj3oY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
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
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1095345554579525833/Adapter_PS2_Joystick_PlayStation-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="800" height="700" ></img>
                    </div>
                    <div class="px-5 blackText">
                    <b>การใช้งาน Adapter PS2 Joystick PlayStation ทำได้ง่ายๆ ดังนี้</b>
                    <p>1.	ต่ออุปกรณ์ Adapter PS2 Joystick PlayStation เข้ากับพอร์ต USB ของคอมพิวเตอร์หรือเครื่องเล่น DVD/Blu-ray ที่ไม่มีพอร์ตสำหรับเชื่อมต่อแบบ Analog.</p>
                    <p>2.	นำจอยสติ๊ก PS2 เชื่อมต่อกับ Adapter PS2 Joystick PlayStation โดยเสียบปลั๊กเข้าในพอร์ตที่เป็น Digital.</p>
                    <p>3.	รอให้คอมพิวเตอร์หรือเครื่องเล่น DVD/Blu-ray ตรวจสอบและติดตั้งไดรเวอร์สำหรับอุปกรณ์ Adapter PS2 Joystick PlayStation (หากมี) และกำหนดค่าต่างๆ ตามความต้องการ.</p>
                    <p>4.	เมื่อติดตั้งและกำหนดค่าเสร็จสมบูรณ์แล้ว จอยสติ๊ก PS2 จะสามารถใช้งานได้บนคอมพิวเตอร์หรือเครื่องเล่น DVD/Blu-ray ที่ไม่มีพอร์ตสำหรับเชื่อมต่อแบบ Analog ได้เลย</p>
                    
                    <br></br>
                    <b>การใช้งาน Wireless PS2 Joystick ทำได้ง่ายๆ ดังนี้</b>
                    <p>1.   ปิดอุปกรณ์ Wireless PS2 Joystick และตั้งค่ารับสัญญาณตามคู่มือการใช้งาน โดยทำการกดปุ่มโหมดเปิดเพื่อเชื่อมต่อและกำหนดช่องสัญญาณไว้สำหรับเครื่อง PS2.</p>
                    <p>2.	เปิดเครื่อง PS2 และเสียบรับสัญญาณของอุปกรณ์ Wireless PS2 Joystick ลงในพอร์ตที่กำหนดไว้ โดยรับสัญญาณเป็นแบบ Plug and Play หรือต้องกดปุ่ม Sync เพื่อเชื่อมต่อกับอุปกรณ์ตัวอื่น ๆ ที่ต้องการใช้งาน.</p>
                    <p>3.	รอให้รับสัญญาณจากอุปกรณ์ Wireless PS2 Joystick และเริ่มใช้งานได้ทันที โดยสามารถใช้งานกับเกมทั่วไปบนเครื่อง PS2 ได้เลย โดยไม่ต้องกำหนดการตั้งค่าใด ๆ เพิ่มเติม.</p>
                    <p>4.	เมื่อใช้งานเสร็จสิ้น ปิดเครื่อง PS2 และปิดอุปกรณ์ Wireless PS2 Joystick เพื่อประหยัดแบตเตอรี่และป้องกันการสูญเสียสัญญาณ.</p>
                    <br></br>
                    </div>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รูปภาพประกอบ</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/837757981549396049/1053045605108297849/LINE_ALBUM___6.jpg" class="img-fluid rounded-3 mb-4" alt="555" width="800" height="700" ></img>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">จำลองการต่อวงจร</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://i.imgur.com/k0Dmq9Y.gif" class="img-fluid rounded-3 mb-4 ps-5" alt="555" width="1100" height="900" ></img>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">โค้ดตัวอย่าง</h2>
                    </div>
                    <div class="d-flex justify-content-center ">
                        <Highlight language="c++">
                            {`#include <PS2X_lib.h>  //for v1.6
PS2X ps2x; 
int error = 0; 
byte type = 0;
byte vibrate = 0;
void setup(){
 Serial.begin(57600);
 error = ps2x.config_gamepad(12,10,11,13, true, true);   //เสียบสายสัญญาณใส่พอร์ตดิจิตอลที่ 12-10-11-13 เทียบกับสัญญาณ clock, command, attention or cs, data
 if(error == 0)
   Serial.println("Found Controller configured successfully."); //พบคอนโทรลเลอร์ที่กำหนดค่าสำเร็จแล้ว
  else if(error == 1)
   Serial.println("No controller found check wiring."); 
  else if(error == 2)
   Serial.println("Controller found but not accepting commands. "); 
  else if(error == 3)
   Serial.println("Controller refusing to enter Pressures mode may not support it. "); 
   type = ps2x.readType(); 
     switch(type) {
       case 0:
        Serial.println("Unknown Controller type");
       break;
       case 1:
        Serial.println("DualShock Controller Found");
       break;
       case 2:
         Serial.println("GuitarHero Controller Found");
       break;
     }
}
void loop(){
 
 if(error == 1) //skip loop if no controller found
  return; 
 if(type == 2){ //Guitar Hero Controller
   ps2x.read_gamepad();          //read controller 
    if(ps2x.Button(PSB_START))                   //will be TRUE as long as button is pressed
         Serial.println("START1");
    if(ps2x.Button(PSB_SELECT))
         Serial.println("SELECT1");
 }
 else { //DualShock Controller
    ps2x.read_gamepad(false, vibrate);          //read controller and set large motor to spin at 'vibrate' speed
////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if(ps2x.Button(PSB_START))          //กดปุ่ม START
         Serial.println("START");
    if(ps2x.Button(PSB_SELECT))         //กดปุ่ม SELECT
         Serial.println("SELECT"); 
////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if(ps2x.Button(PSB_PAD_UP)) {       //กดปุ่มเดินหน้า
       Serial.println("Up");
      }
    if(ps2x.Button(PSB_PAD_RIGHT)){     //กดปุ่มขวา
       Serial.println("Right");
      }
    if(ps2x.Button(PSB_PAD_LEFT)){      //กดปุ่มซ้าย
       Serial.println("LEFT");
      }
    if(ps2x.Button(PSB_PAD_DOWN)){      //กดปุ่มถอยหลัง
       Serial.println("DOWN");
      }   
////////////////////////////////////////////////////////////////////////////////////////////////////////////
     vibrate = ps2x.Analog(PSAB_BLUE);        //this will set the large motor vibrate speed based on how hard you press the blue (X) button
////////////////////////////////////////////////////////////////////////////////////////////////////////////    
  // ButtonPressed  ทำงานเมื่อกดปุ่ม
  // ButtonReleased  ทำงานเมื่อปล่อยปุ่ม
  // NewButtonState ทำงาน 2 ครัง สถานะกดและปล่อยปุ่ม
                                  
    if(ps2x.ButtonPressed(PSB_L3))          //กดปุ่มL3 1 ครั้งเมื่อกดปุ่ม
         Serial.println("L3");
    if(ps2x.ButtonPressed(PSB_R3))          //กดปุ่มR3 1 ครั้งเมื่อกดปุ่ม
         Serial.println("R3");
    if(ps2x.ButtonPressed(PSB_L1))          //กดปุ่มL1 1 ครั้งเมื่อกดปุ่ม
         Serial.println("L1");
    if(ps2x.ButtonPressed(PSB_L2))          //กดปุ่มL2 1 ครั้งเมื่อกดปุ่ม
         Serial.println("L2"); 
    if(ps2x.ButtonPressed(PSB_R1))          //กดปุ่มR1 1 ครั้งเมื่อกดปุ่ม
         Serial.println("R1");
    if(ps2x.ButtonPressed(PSB_R2))          //กดปุ่มR2 1 ครั้งเมื่อกดปุ่ม
         Serial.println("R2"); 
////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if(ps2x.Button(PSB_GREEN))          //กดปุ่มสามเหลี่ยม
         Serial.println("Triangle");       
    if(ps2x.Button(PSB_RED))            //กดปุ่มวงกลม
         Serial.println("Circle");    
    if(ps2x.Button(PSB_PINK))           //กดปุ่มสี่เหลี่ยม
         Serial.println("Squared");     
    if(ps2x.Button(PSB_BLUE))           //กดปุ่มx
         Serial.println("cross");      
     if(ps2x.Button(PSB_L1) && ps2x.Button(PSB_R1)) // กดปุ่ม L1 และ R1 สามารถใช้ได้ร่วมกับโหมดจอยอนาล็อก
    {
        Serial.print("Stick Values:");
        Serial.print(ps2x.Analog(PSS_LY), DEC); //Left stick, Y axis. Other options: LX, RY, RX  
        Serial.print(",");
        Serial.print(ps2x.Analog(PSS_LX), DEC); 
        Serial.print(",");
        Serial.print(ps2x.Analog(PSS_RY), DEC); 
        Serial.print(",");
        Serial.println(ps2x.Analog(PSS_RX), DEC); 
    } 
 }
 delay(50);
     
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

export default Joystick;