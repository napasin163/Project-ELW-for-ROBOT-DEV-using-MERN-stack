import { Outlet, Link } from "react-router-dom";
import Highlight from 'react-highlight'

const Robots = () => {
    return (
        <body>
            <main>
                <div class="px-4 pt-5 my-5 text-center">
                    <h1 class="display-4 fw-bold blackText">Robots</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4 blackText">เครื่องยนต์ชนิดหนึ่งที่มีลักษณะโครงสร้างและรูปร่างแตกต่างกันไปตามวัตถุประสงค์ หุ่นยนต์ในแต่ละประเภทจะมีหน้าที่การทำงานในด้านต่าง ๆ ตามการควบคุมโดยตรงของมนุษย์ หรืออาจมีการตั้งค่าให้หุ่นยนต์สามารถตัดสินใจได้เองในระดับใดระดับหนึ่ง การควบคุมระบบต่าง ๆ ในการสั่งงานระหว่างหุ่นยนต์และมนุษย์ สามารถทำได้โดยทางอ้อมและอัตโนมัติ โดยทั่วไปหุ่นยนต์ถูกสร้างขึ้นเพื่อสำหรับงานที่มีความยากลำบากหรืออันตรายเช่น งานสำรวจในพื้นที่บริเวณแคบ งานสำรวจในบริเวณที่เกิดภัยพิบัติ หรืองานสำรวจบนผิวของดวงจันทร์หรือดาวเคราะห์ต่าง ๆ ปัจจุบันเทคโนโลยีของหุ่นยนต์เจริญก้าวหน้าอย่างรวดเร็ว หุ่นยนต์เริ่มเข้ามามีบทบาทกับชีวิตของมนุษย์ในหลากหลายด้าน เช่น ด้านอุตสาหกรรมการผลิต ด้านการแพทย์ ด้านงานสำรวจทั้งในโลกเราและงานสำรวจในอวกาศ หรือด้านการบันเทิง เช่น หุ่นยนต์ที่ถูกสร้างขึ้นเพื่อเป็นเครื่องเล่นของมนุษย์ ปัจจุบันนี้ได้มีการพัฒนาให้หุ่นยนต์นั้นมีลักษณะที่คล้ายมนุษย์มากขึ้นเพื่อผลทางจิตวิทยาในการอาศัยอยู่ร่วมกันกับมนุษย์ในชีวิตประจำวัน</p>

                    </div>

                    <div class="overflow-hidden xd">
                        <div class="container px-5">
                            <img src="https://cdn.discordapp.com/attachments/768084656465117227/1090816852743176202/Robot.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt=" 123" width="900" height="500" loading="lazy"></img>
                        </div>
                    </div>
                    <br></br>

                    <hr class="featurette-divider"></hr>
                </div>

                <div class="px-5 pt-0 my-5 text-center position-sticky">
                    <div class="d-flex justify-content-right flex-wrap flex-md-nowrap align-items-center">
                        <h1 class="h2 blackText bold2">หุ่นยนต์ติดตามเส้นตรวจจับสิ่งกีดขวาง</h1>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1042777068141805658/png-transparent-ultrasonic-transducer-proximity-sensor-sensor-ultrasonico-electronics-others-electronics-measurement-sound-removebg-preview.png" class="img-fluid rounded-3 mb-4" alt=" 123" width="400" height="500" ></img>
                    </div>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รายละเอียด</h2>
                    </div>
                    <div class="px-5 blackText">
                        <p>HC-SR04 เป็นโมดูลอัลตร้าโซนิคเป็นอุปกรณ์เซ็นเซอร์ใช้วัดระยะทางของวัตถุกับตัวเซ็นเซอร์ โดยไม่ต้องมีการสัมผัสกับตำแหน่งที่ต้องการวัด วัดได้ตั้งแต่ 2 cm ถึง 400 cm รองรับแรงดันไฟ 3.3-5V อาศัยการทำงานของคลื่นเสียง โดยส่งสัญญาณอัลตร้าโซนิคความถี่ 40kHz (40,000Hz) ซึ่งจัดอยู่ในย่าน Ultrasonic (ความถี่สูงกว่าที่หูมนุษย์จะสามารถได้ยิน) ไปที่วัตถุที่ต้องการวัดและรับสัญญาณที่สะท้อนกลับมา พร้อมทั้งจับเวลาเพื่อนำมาใช้ในการคำนวณ โมดูลตัวนี้เป็นโมดูลยอดนิยมอีกตัวที่นำไปใช้ในโปรเจคหาระยะห่างของวัตถุ หรือใช้ในโครงงานหุ่นยนต์ต่างๆ ใช้งานง่าย ราคาถูก มีไลบรารี่สำหรับต่อกับ Arduino ได้โดยตรง เพื่อแสดงระยะทางได้ทันที </p>
                    </div>
                    <br></br>
                    <hr class="featurette-divider"></hr>
                    <div class="embed-responsive embed-responsive-16by9 ms-5 ">
                        <iframe width="1400" height="700" src="https://www.youtube.com/embed/Pyv0oIdmp5Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
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
                    <hr class="featurette-divider"></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">ข้อมูลการใช้งาน</h2>
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
                    <hr class="featurette-divider"></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">รูปภาพประกอบ</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/768084656465117227/1043224938179477524/LINE_ALBUM__221119.jpg" class="img-fluid rounded-3 mb-4" alt="555" width="800" height="700" ></img>
                    </div>
                    <br></br>
                    <hr class="featurette-divider"></hr>
                    <div class="h2 px-4 blackText">
                        <h2 class="bold2">จำลองการต่อวงจร</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src="https://i.imgur.com/uc3lhRG.gif" class="img-fluid rounded-3 mb-4 ps-5" alt="555" width="1100" height="900" ></img>
                    </div>
                    <br></br>
                    <hr class="featurette-divider"></hr>
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
                </div>
            </main>
        </body>
    );
}

export default Robots;