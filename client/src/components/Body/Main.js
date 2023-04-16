import './Main.css'
import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {

    const user = useSelector(state => state.isLoggedIn);
    const history = useNavigate()

    const route =() =>{
        const token = localStorage.getItem('x-access-token')
        return token ? true: false
    }

    useEffect(() => {
        if(!route()){
            history('/loginpage')

        }
    }, [route,history])

    return (
        <body>
            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="bd-placeholder-img opacity" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <img src="https://cdn.discordapp.com/attachments/1034796504126341230/1035145144929886228/wp2163572-arduino-wallpapers.jpg" alt="test" width="100%" height="100%"></img>
                        </div>

                        <div class="container">
                            <div class="carousel-caption text-start whiteText">
                                <h1 class="bold">Arduino</h1>
                                <p class="bold">เรียนรู้การต่อวงจรเเละเขียนโค้ดควบคุมอุปกรณ์อิเล็กทรอนิกส์ใช้งานร่วมกับบอร์ด Aruino</p>
                                <p><a class="btn btn-lg btn-primary" href="/arduino">เรียนรู้เพิ่มเติม</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="bd-placeholder-img opacity" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <img src="https://cdn.discordapp.com/attachments/1034796504126341230/1052562383383572530/e67dc4a161d4c68d9092b26a78fbf456.jpg" alt="test" width="100%" height="100%"></img>
                        </div>

                        <div class="container">
                            <div class="carousel-caption whiteText">
                                <h1 class="bold">Micro:Bit</h1>
                                <p class="bold">เรียนรู้การต่อวงจรเเละเขียนโค้ดควบคุมอุปกรณ์อิเล็กทรอนิกส์ใช้งานร่วมกับบอร์ด Micro:Bit</p>
                                <p><a class="btn btn-lg btn-primary" href="/microbit">เรียนรู้เพิ่มเติม</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="bd-placeholder-img opacity" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <img src="https://cdn.discordapp.com/attachments/1034796504126341230/1052582308370198558/asian-kid-boy-plugging-energy-signalado-robot-car_143683-4862.jpg" alt="test" width="100%" height="100%"></img>
                        </div>
                        <div class="container">
                            <div class="carousel-caption text-end whiteText">
                                <h1 class="bold">Robot</h1>
                                <p class="bold">เรียนรู้การสร้างหุ่นยนต์จากการนำอุปกรณ์อิเล็กทรอนิกส์มาประยุกต์</p>
                                <p><a class="btn btn-lg btn-primary" href="/robots">เรียนรู้เพิ่มเติม</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div class="container marketing d-flex">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="bd-placeholder-img rounded-circle img-fluid"  xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <img src="https://cdn.discordapp.com/attachments/1034796504126341230/1052588599138324530/party.png" alt="test" width="30%" height="30%"></img>
                            <text x="50%" y="50%" fill="#777" dy=".3em"></text>
                        </div>

                        <h2 class="fw-normal pt-2">Fun</h2>
                        <p></p>
                    </div>
                    <div class="col-lg-4">
                        <div class="bd-placeholder-img rounded-circle img-fluid"  xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <img src="https://cdn.discordapp.com/attachments/1034796504126341230/1052588599461290134/thought.png" alt="test" width="30%" height="30%"></img>
                            <text x="50%" y="50%" fill="#777" dy=".3em"></text>
                        </div>

                        <h2 class="fw-normal pt-2">Knowledge</h2>
                        <p></p>
                    </div>
                    <div class="col-lg-4">
                        <div class="bd-placeholder-img rounded-circle img-fluid"  xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <img src="https://cdn.discordapp.com/attachments/1034796504126341230/1052588598794399834/light-bulb.png" alt="test" width="30%" height="30%"></img>
                            <text x="50%" y="50%" fill="#777" dy=".3em"></text>
                        </div>

                        <h2 class="fw-normal pt-2">Creativity</h2>
                        <p></p>
                    </div>
                </div>
            </div>

            <div className='flex'>
                <div class="featurette between">
                    <div class="col-md-6 marginLeft">
                        <h2 class="featurette-heading fw-normal lh-2 blackText">Arduino <span class="text-muted BlueText">Uno R3</span></h2>
                        <p class="lead">เป็นบอร์ดไมโครคอนโทรเลอร์ตระกูล AVR ที่มีการพัฒนาแบบ Open Source ที่มีการเปิดเผยข้อมูลทั้งด้าน Hardware และ Software ตัว บอร์ด Arduino ถูกออกแบบมาให้ใช้งานได้ง่าย ดังนั้นจึงเหมาะสำหรับผู้เริ่มต้นศึกษา ทั้งนี้ผู้ใช้งานยังสามารถดัดแปลง เพิ่มเติม พัฒนาต่อยอดทั้งตัวบอร์ด หรือโปรแกรมต่อได้</p>
                        <p><a class="btn btn-primary" href="/arduino">เรียนรู้เพิ่มเติม &raquo;</a></p>
                    </div>
                    <div class="col-md-5">
                        <div class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="800" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 800x500" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <img src="https://cdn.discordapp.com/attachments/1034796504126341230/1052596373620531250/CA001-removebg-preview.png" class="img-fluid" alt="Responsive image"></img>
                            <text x="50%" y="50%" fill="#aaa" dy=".3em"></text>
                        </div>

                    </div>
                </div>
            </div>


            <hr class="featurette-divider"></hr>

            <div className='flex'>
                <div class="featurette between">
                    <div class="col-md-5 order-md-3 marginLeft">
                        <h2 class="featurette-heading fw-normal lh-1 blackText">Micro: <span class="text-muted GreenText">Bit</span></h2>
                        <p class="lead">บอร์ดไมโครคอนโทรลเลอร์เพื่อการศึกษาที่เริ่มโครงการโดยสถานีโทรทัศน์ BBC จากประเทศอังกฤษ  ผลิตโดย element14  โดยในโครงการได้จัดทำบอร์ด micro:bit ขึ้นมาแจกให้กับนักเรียนในประเทศอังกฤษจำนวน 1 ล้านบอร์ด บอร์ดไมโครคอนโทรลเลอร์ที่มีจุดเด่นด้านการเขียนโปรแกรมที่ง่ายโดยใช้ภาษาบล็อก แล้วแปลงออกมาเป็นภาษา JavaScript หรือ Python ตัวบอร์ดมาพร้อมกับชิปไมโครคอนโทรลเลอร์ที่มีบลูทูธในตัว มีเซ็นเซอร์วัดความเอียง (Accelerometer) และเซ็นเซอร์แม่เหล็กโลก หรือเข็มทิศ (Magnetometer) มีหลอด LED 25 ดวง แสดงผลแบบ Dot matrix และสวิตซ์กดติดปล่อยดับ 3 ตัว</p>
                        <p><a class="btn btn-primary" href="/microbit">เรียนรู้เพิ่มเติม &raquo;</a></p>
                    </div>
                    <div class="col-md-5 order-md-1 marginLeft">
                        <div class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="800" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 800x500" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <img src="https://cdn.discordapp.com/attachments/1034796504126341230/1052596374023188490/microbit-programmable-computer-removebg-preview.png" class="img-fluid" alt="Responsive image"></img>
                            <text x="50%" y="50%" fill="#aaa" dy=".3em"></text>
                        </div>

                    </div>
                </div>
            </div>

            <hr class="featurette-divider"></hr>

            <div className='flex'>
                <div class="featurette between">
                    <div class="col-md-6 marginLeft">
                        <h2 class="featurette-heading fw-normal lh-1 blackText">Robot <span class="text-muted YellowText">and more</span></h2>
                        <p class="lead">หุ่นยนต์ คือเครื่องยนต์ชนิดหนึ่งที่มีลักษณะโครงสร้างและรูปร่างแตกต่างกันไปตามวัตถุประสงค์ หุ่นยนต์ในแต่ละประเภทจะมีหน้าที่การทำงานในด้านต่าง ๆ ตามการควบคุมโดยตรงของมนุษย์ หรืออาจมีการตั้งค่าให้หุ่นยนต์สามารถตัดสินใจได้เองในระดับใดระดับหนึ่ง โดยในบทเรียนนี้จะสร้างหุ่นยนต์โดยใช้อุปกรณ์ที่ได้เรียนรู้ไป</p>
                        <p><a class="btn btn-primary" href="/robots">เรียนรู้เพิ่มเติม &raquo;</a></p>
                    </div>
                    <div class="col-md-5">
                        <div class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="800" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 800x500" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <img src="https://cdn.discordapp.com/attachments/1034796504126341230/1052596373142392903/micro-maqueen-microbit-robot-platform-26368-77-B-removebg-preview.png" class="img-fluid" alt="Responsive image"></img>
                            <text x="50%" y="50%" fill="#aaa" dy=".3em"></text>
                        </div>

                    </div>
                </div>
            </div>

            <hr class="featurette-divider"></hr>

            <footer class="container pb-5">
                <p class="float-end"><a href="#">Back to top</a></p>
                <p>&copy; 2022 KMITL. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
            </footer>
        </body>

    );
}


export default MainPage;