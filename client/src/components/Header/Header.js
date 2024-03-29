import './Header.css';
import { Outlet, Link } from 'react-router-dom';
import Logout from '../Imports/Logout';
import { logoutAction } from '../../container/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const TopHeader = () => {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutAction());
    };

    const [navbarOpen, setNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <body>
            <nav class="navbar navbar-expand-lg BgColorBlue sticky-top">
                <div class="container">
                    <Link to="/" class="navbar-brand">
                        <img
                            src="https://cdn.discordapp.com/attachments/1034796504126341230/1034796561185644554/ELW_2-removebg-preview.png"
                            alt="ELW"
                            width="50"
                            height="50"
                        ></img>
                    </Link>
                    <button class="navbar-toggler" type="button" onClick={toggleNavbar}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`}>
                        <ul class="navbar-nav mx-auto me-2 mb-2 mb-lg-0 bt-center">
                            <li class="nav-item dropdown">
                                <Link
                                    to=" "
                                    class="nav-link buttonNav buttonNavBlue dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    Ardino
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link to="/arduino" class="dropdown-item">More info</Link></li>
                                    <li><Link to="/hcsr04" class="dropdown-item ">Sensor &raquo;</Link>
                                        <ul class="dropdown-menu submenu">
                                            <li><Link to="/hcsr04" class="dropdown-item ">Ultrasonic Sensor HC-SR04</Link></li>
                                            <li><Link to="/tcrt" class="dropdown-item ">Reflective Sensor (TCRT5000)</Link></li>
                                            <li><Link to="/f249" class="dropdown-item ">F249 Counter Module Motor Speed Sensor</Link></li>
                                            <li><Link to="/e18" class="dropdown-item ">Infrared photoelectric switch Sensor E18-D80NK</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/servoM" class="dropdown-item ">Servo &raquo;</Link>
                                        <ul class="dropdown-menu submenu">
                                            <li><Link to="/servoM" class="dropdown-item ">Servo G90s</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/buzzer" class="dropdown-item ">Module &raquo;</Link>
                                        <ul class="dropdown-menu submenu">
                                            <li><Link to="/buzzer" class="dropdown-item">Passive buzzer module</Link></li>
                                            <li><Link to="/button" class="dropdown-item">Button switch module</Link></li>
                                            <li><Link to="/joystick" class="dropdown-item">Adapter PS2 Joystick PlayStation</Link></li>
                                            <li><Link to="/relay" class="dropdown-item">Relay Module 5V 2Channel</Link></li>
                                            <li><Link to="/lcd" class="dropdown-item">Interface 12C 16x2 LCD</Link></li>
                                            <li><Link to="/oled" class="dropdown-item">OLED 128x64</Link></li>
                                            <li><Link to="/motor" class="dropdown-item">L298N Motor Driver</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* Micro:Bit */}
                            <li class="nav-item dropdown">
                                <Link
                                    to="/microbit"
                                    class="nav-link buttonNav buttonNavGreen dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    Micro:Bit
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link to="microbit" class="dropdown-item">More info</Link></li>
                                    <li><Link to="/hcsr04MB" class="dropdown-item ">Sensor &raquo;</Link>
                                        <ul class="dropdown-menu submenu">
                                            <li><Link to="/hcsr04MB" class="dropdown-item ">Ultrasonic Sensor HC-SR04</Link></li>
                                            <li><Link to="/tcrtMB" class="dropdown-item ">Reflective Sensor (TCRT5000)</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/servoMB" class="dropdown-item ">Motor/Servo &raquo;</Link>
                                        <ul class="dropdown-menu submenu">
                                            <li><Link to="/servoMB" class="dropdown-item ">Servo G90s</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/buzzerMB" class="dropdown-item ">Module &raquo;</Link>
                                        <ul class="dropdown-menu submenu">
                                            <li><Link to="/buzzerMB" class="dropdown-item">Passive buzzer module</Link></li>
                                            <li><Link to="/relayMB" class="dropdown-item">Relay Module 5V 2Channel</Link></li>
                                            <li><Link to="/lcdMB" class="dropdown-item">Interface 12C 16x2 LCD</Link></li>
                                            <li><Link to="/oledMB" class="dropdown-item">OLED 128x64</Link></li>
                                            <li><Link to="/motorMB" class="dropdown-item">L298N Motor Driver</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* Robot */}
                            <li class="nav-item">
                                <Link to="/robots" class="nav-link buttonNav buttonNavYellow">
                                    Robot
                                </Link>
                            </li>
                            {/* Game */}
                            <li class="nav-item">
                                <a
                                    href="https://napasin163.itch.io/elw-game"
                                    class="nav-link buttonNav buttonNavPurple"
                                >
                                    Game
                                </a>
                            </li>
                            {/* Quiz */}
                            <li class="nav-item">
                                <a href="/quiz" class="nav-link buttonNav buttonNavRed">
                                    Quiz
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="/loginpage"
                                    class="btn btn-outline-success text-light nav-item"
                                    type="submit"
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Logout onLogout={logout}></Logout>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </body>
    );
};

export default TopHeader;
