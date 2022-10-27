import './Arduino.css'
import { Outlet, Link } from "react-router-dom";
const Arduino = () => {
    return (
        <body>
            <main>
                <div class="px-4 pt-5 my-5 text-center border-bottom">
                    <h1 class="display-4 fw-bold blackText">Arduino</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4 blackText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                            <Link to="/sidebararduino" class="btn btn-success btn-lg px-4 me-sm-3"> Learn more!</Link>
                        </div>
                    </div>
                    <div class="overflow-hidden xd">
                        <div class="container px-5">
                            <img src="https://cdn.discordapp.com/attachments/1034796504126341230/1035145144929886228/wp2163572-arduino-wallpapers.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt=" 123" width="900" height="500" loading="lazy"></img>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    );
}


export default Arduino;