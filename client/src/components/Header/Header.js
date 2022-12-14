import './Header.css'
import { Outlet, Link } from "react-router-dom";

const TopHeader = () => {
    return (
        <body>
            <nav class="navbar navbar-expand-lg BgColorBlue sticky-top">
                <div class="container">
                    <Link to="/" class="navbar-nav">
                        <div>
                            <span class="">
                                <img src="https://cdn.discordapp.com/attachments/1034796504126341230/1034796561185644554/ELW_2-removebg-preview.png" alt="ELW" width="50" height="50"></img>
                            </span>
                        </div>
                    </Link>
                    <div class="d-flex justify-content-evenly bt-center" >
                        <ul class="navbar-nav me-2 mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <Link to=" " class="nav-link buttonNavBlue dropdown-toggle" data-bs-toggle="dropdown">Ardino</Link>
                                <ul class="dropdown-menu">
                                    <li><Link to="/arduino" class="dropdown-item">More info</Link></li>
                                    <li><Link to="/hcsr04" class="dropdown-item ">Sensor &raquo;</Link>
                                        <ul class="dropdown-menu submenu">
                                            <li><Link to="/hcsr04" class="dropdown-item ">Ultrasonic Sensor HC-SR04</Link></li>
                                            <li><Link to="/hcsr04" class="dropdown-item ">Reflective Sensor (TCRT5000)</Link></li>
                                            <li><Link to="/hcsr04" class="dropdown-item ">GY-9960 Infrared RGB Gesture Sensor (APDS-9960)</Link></li>
                                            <li><Link to="/hcsr04" class="dropdown-item ">F249 Counter Module Motor Speed Sensor</Link></li>
                                            <li><Link to="/hcsr04" class="dropdown-item ">Infrared photoelectric switch Sensor E18-D80NK</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/hcsr04" class="dropdown-item ">Motor/Servo &raquo;</Link>
                                        <ul class="dropdown-menu submenu">
                                            <li><Link to="/servoM" class="dropdown-item ">Servo G90s</Link></li>
                                            <li><Link to="/hcsr04" class="dropdown-item ">DC Gear Motor</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/hcsr04" class="dropdown-item ">Module &raquo;</Link>
                                        <ul class="dropdown-menu submenu">
                                            <li><Link to="/buzzer" class="dropdown-item">Passive buzzer module</Link></li>
                                            <li><Link to="/hcsr04" class="dropdown-item">Button switch module</Link></li>
                                            <li><Link to="/hcsr04" class="dropdown-item">Rotary Encoder Module</Link></li>
                                            <li><Link to="/hcsr04" class="dropdown-item">Adapter PS2 Joystick PlayStation</Link></li>
                                            <li><Link to="/hcsr04" class="dropdown-item">Relay Module 5V 2Channel</Link></li>
                                            <li><Link to="/hcsr04" class="dropdown-item">Interface 12C 16x2 LCD</Link></li>
                                            <li><Link to="/hcsr04" class="dropdown-item">OLED 128x64</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link to="/microbit" class="nav-link buttonNavGreen dropdown-toggle" data-bs-toggle="dropdown">Micro:Bit</Link>
                                <ul class="dropdown-menu">
                                    <li><Link to="microbit" class="dropdown-item">More info</Link></li>
                                    <li><Link to="/blogs" class="dropdown-item ">Sensor &raquo;</Link>
                                        <ul class="dropdown-menu submenu">
                                            <li><Link to="/hcsr04" class="dropdown-item ">Ultrasonic Sensor HC-SR04</Link></li>
                                            <li><Link to="/hcsr04" class="dropdown-item ">Reflective Sensor (TCRT5000)</Link></li>
                                            <li><Link to="/hcsr04" class="dropdown-item ">F249 Counter Module Motor Speed Sensor</Link></li>
                                            <li><Link to="/hcsr04" class="dropdown-item ">Infrared photoelectric switch Sensor E18-D80NK</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/blogs" class="dropdown-item ">Motor/Servo &raquo;</Link>
                                        <ul class="dropdown-menu submenu">
                                            <li><Link to="/servoM" class="dropdown-item ">Servo G90s</Link></li>
                                            <li><Link to="/hcsr04" class="dropdown-item ">DC Gear Motor</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/blogs" class="dropdown-item ">Module &raquo;</Link>
                                        <ul class="dropdown-menu submenu">
                                            <li><Link to="/hcsr04" class="dropdown-item">Passive buzzer module</Link></li>
                                            <li><Link to="/hcsr04" class="dropdown-item">Button switch module</Link></li>
                                            <li><Link to="/hcsr04" class="dropdown-item">Rotary Encoder Module</Link></li>
                                            <li><Link to="/hcsr04" class="dropdown-item">Relay Module 5V 2Channel</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link to=" " class="nav-link buttonNavYellow dropdown-toggle" data-bs-toggle="dropdown">Robot</Link>
                                <ul class="dropdown-menu">
                                    <li><Link to="robots" class="dropdown-item">More info</Link></li>
                                    <li><Link to="/robots" class="dropdown-item ">Robot1</Link></li>
                                    <li><Link to="/robots" class="dropdown-item ">Robot2</Link></li>
                                    <li><Link to="/robots" class="dropdown-item ">Robot3</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </body>
    );
}

export default TopHeader;
