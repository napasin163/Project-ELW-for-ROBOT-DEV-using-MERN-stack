import './Header.css'
import { Outlet, Link } from "react-router-dom";

const TopHeader = () => {
    return (
        <body>
            <nav class="navbar navbar-expand-lg BgColorBlue">
                <div class="container">
                    <Link to="/blogs" class="nav-link TextELWColorWhite">ELW</Link>
                    <div class="d-flex justify-content-evenly bt-center" >
                        <ul class="navbar-nav me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/blogs" class="nav-link buttonNavBlue">Ardino</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/blogs" class="nav-link buttonNavGreen">Micro:Bit</Link>
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