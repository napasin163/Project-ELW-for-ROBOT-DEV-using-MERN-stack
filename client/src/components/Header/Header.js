import './Header.css'
import { Outlet, Link } from "react-router-dom";

const TopHeader = () => {
    return (
        <body>
            <nav class="navbar navbar-expand-lg BgColorBlue">
                <div class="container">
                    <Link to="blogs" class= "navbar-nav"> 
                    <div>
                        <span class="">
                        <img src= "https://cdn.discordapp.com/attachments/1034796504126341230/1034796561185644554/ELW_2-removebg-preview.png" alt ="ELW" width="50"  height="50"></img>
                        </span>
                    </div>
                    </Link>
                    <div class="d-flex justify-content-evenly bt-center" >
                        <ul class="navbar-nav me-2 mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <Link to="/blogs" class="nav-link buttonNavBlue dropdown-toggle" data-bs-toggle="dropdown">Ardino</Link>
                                <ul class ="dropdown-menu">
                                    <li><Link to="/blogs" class="dropdown-item ">Sensor &raquo;</Link>
                                        <ul class="dropdown-menu submenu"> 
                                            <li><Link to="/blogs" class="dropdown-item ">Sensor1</Link></li>
                                            <li><Link to="/blogs" class="dropdown-item ">Sensor2</Link></li>
                                            <li><Link to="/blogs" class="dropdown-item ">Sensor3</Link></li>
                                            <li><Link to="/blogs" class="dropdown-item ">Sensor4</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/blogs" class="dropdown-item ">Motor/Servo &raquo;</Link>
                                        <ul class="dropdown-menu submenu"> 
                                            <li><Link to="/blogs" class="dropdown-item ">Motor/Servo 1</Link></li>
                                            <li><Link to="/blogs" class="dropdown-item ">Motor/Servo 2</Link></li>
                                            <li><Link to="/blogs" class="dropdown-item ">Motor/Servo 3</Link></li>
                                            <li><Link to="/blogs" class="dropdown-item ">Motor/Servo 4</Link></li>
                                        </ul>
                                    </li>   
                                    <li><Link to="/blogs" class="dropdown-item ">Module &raquo;</Link>
                                        <ul class="dropdown-menu submenu"> 
                                            <li><Link to="/blogs" class="dropdown-item ">Module 1</Link></li>
                                            <li><Link to="/blogs" class="dropdown-item ">Module 2</Link></li>
                                            <li><Link to="/blogs" class="dropdown-item ">Module 3</Link></li>
                                            <li><Link to="/blogs" class="dropdown-item ">Module 4</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link to="/blogs" class="nav-link buttonNavGreen dropdown-toggle" data-bs-toggle="dropdown">Micro:Bit</Link>
                                <ul class ="dropdown-menu">
                                    <li><Link to="/blogs" class="dropdown-item ">Sensor &raquo;</Link>
                                        <ul class="dropdown-menu submenu"> 
                                            <li><Link to="/blogs" class="dropdown-item ">Sensor1</Link></li>
                                            <li><Link to="/blogs" class="dropdown-item ">Sensor2</Link></li>
                                            <li><Link to="/blogs" class="dropdown-item ">Sensor3</Link></li>
                                            <li><Link to="/blogs" class="dropdown-item ">Sensor4</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/blogs" class="dropdown-item ">Motor/Servo &raquo;</Link>
                                        <ul class="dropdown-menu submenu"> 
                                            <li><Link to="/blogs" class="dropdown-item ">Motor/Servo 1</Link></li>
                                            <li><Link to="/blogs" class="dropdown-item ">Motor/Servo 2</Link></li>
                                            <li><Link to="/blogs" class="dropdown-item ">Motor/Servo 3</Link></li>
                                            <li><Link to="/blogs" class="dropdown-item ">Motor/Servo 4</Link></li>
                                        </ul>
                                    </li>   
                                    <li><Link to="/blogs" class="dropdown-item ">Module &raquo;</Link>
                                        <ul class="dropdown-menu submenu"> 
                                            <li><Link to="/blogs" class="dropdown-item ">Module 1</Link></li>
                                            <li><Link to="/blogs" class="dropdown-item ">Module 2</Link></li>
                                            <li><Link to="/blogs" class="dropdown-item ">Module 3</Link></li>
                                            <li><Link to="/blogs" class="dropdown-item ">Module 4</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link to="/blogs" class="nav-link buttonNavYellow">Robots</Link>
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


/*<header class="d-flex justify-content-center py-3">
<ul class="nav nav-pills">
<li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
<li class="nav-item"><a href="#" class="nav-link">Features</a></li>
<li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
<li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
<li class="nav-item"><a href="#" class="nav-link">About</a></li>
</ul>
</header>*/