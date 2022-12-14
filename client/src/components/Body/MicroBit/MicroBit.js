import '../Arduino/Arduino.css'
import './MicroBit.css'
const MicroBit = () => {
    return (
        <body>
            <main>
                <div class="px-4 pt-5 my-5 text-center border-bottom">
                    <h1 class="display-4 fw-bold blackText">Micro:Bit</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4 blackText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                            <a href="https://makecode.microbit.org/" class="btn btn-success btn-lg px-4 me-sm-3"> Learn more!</a>

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
                                            <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052652213840924782/microbit-overview-2-2.png" alt="datasheet" width="100%" height="100%"></img>
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
                            <img src="https://cdn.discordapp.com/attachments/1034796504126341230/1052652486932058182/microbit.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt=" 123" width="900" height="500" loading="lazy"></img>
                        </div>
                    </div>
                    <br></br>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4 blackText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                            <a href="/hcsr04" class="btn btn-success btn-lg px-4 me-sm-3"> Learn more!</a>
                        </div>
                    </div>

                    <hr class="featurette-divider"></hr>

                    <div class="row row-cols-1 row-cols-md-2 px-5 g-4">
                        <div class="col">
                            <div class="card shadow-lg">
                                <img src="https://cdn.discordapp.com/attachments/1034796504126341230/1052652888775725116/p04sjkmy.jpg" width="600" height="460" class="card-img-top" alt="bruh2"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Coding</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-lg">
                                <img src="https://cdn.discordapp.com/attachments/1034796504126341230/1052652888415010916/4ad80bf7c26e25a5b5da07a548559c1c.png" width="934" height="460" class="card-img-top" alt="bruh"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Circuit</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052620712520712242/TCRT5000.png" width="100" height="380" class="card-img-top" alt="TCRT5000"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Reflective Sensor (TCRT5000)</h5>
                                    <p class="card-text">This is a short card.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052621304236343326/GY-9960.png" height="380" class="card-img-top" alt="GY-9960"></img>
                                <div class="card-body">
                                    <h5 class="card-title">GY-9960 Infrared RGB Gesture Sensor (APDS-9960)</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052621305859538944/Infrared_photoelectric_switch_Sensor_E18-D80NK.png" class="card-img-top" alt="E18-D80NK"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Infrared photoelectric switch Sensor E18-D80NK</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1043260993985314836/Mini-Servo-Motor-SG91R-removebg-preview.png" height="470" class="card-img-top" alt="SG91R"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Servo G90s</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052623020335845417/DC_gear.png" class="card-img-top" alt="DC GEAR"></img>
                                <div class="card-body">
                                    <h5 class="card-title">DC Gear Motor</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div><div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1043252975725973535/Picture1-removebg-preview.png" class="card-img-top" alt="buzzer"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Passive buzzer module</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052624411729084476/Bontton.png" height="470" class="card-img-top" alt="Button"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Button switch module</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052624657414631454/Rotary_Encoder_Module_HW-040.png" class="card-img-top" alt="potentiometer"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Rotary Encoder Module</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://cdn.discordapp.com/attachments/768084656465117227/1052628002414018570/Relay_module.png" height="470" class="card-img-top" alt="relay"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Relay Module 5V 2Channel</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                </div>
                <footer class="container pb-5">
                    <p class="float-end"><a href="#">Back to top</a></p>
                    <p>&copy; 2022 KMITL. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
                </footer>
            </main>
        </body>
    );
}


export default MicroBit;