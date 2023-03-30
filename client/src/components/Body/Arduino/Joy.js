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
                                Servo/Motor
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
                        <h1 class="h2 blackText bold2">Adapter PS2 Joystick PlayStation</h1>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052628002112012338/JoyStick.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="400" height="500" ></img>
                    </div>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รายละเอียด</h2>
                    </div>
                    <div class="px-5 blackText">
                        <p>สำหรับแปลงหัวจอย Joystick Playstation PS2 Controller For Robot Control Wireless และ Joystick Playstation PS2 Controller For Robot แบบมีสาย ให้เป็นขาสำหรับ Arduino ใช้ได้ทั้งจอย PS2 แบบมีสาย และแบบไร้สาย</p>
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
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1053040145332441138/Adapter_PS2_Joystick_PlayStation-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="800" height="700" ></img>
                    </div>
                    <p>ตัวอย่างการต่อกับบอร์ด Arduino Uno</p>
                    <p>VCC - 5V</p>
                    <p>DAT - 12</p>
                    <p>CMD - 11</p>
                    <p>CLK - 13</p>
                    <p>ATT - 10</p>
                    <p>GND – GND</p>
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
                        <img src="https://i.imgur.com/uc3lhRG.gif" class="img-fluid rounded-3 mb-4 ps-5" alt="555" width="1100" height="900" ></img>
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
                </div>
            </main>
            <script src="sidebars.js"></script>
        </body>
    );
}

export default Joystick;