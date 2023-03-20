import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopHeader from "./components/Header/Header";
import MainPage from "./components/Body/Main";
import Arduino from "./components/Body/Arduino/ArduinoTest";
import MicroBit from "./components/Body/MicroBit/MicroBit";
import Robots from "./components/Body/Robots/Robots";
import HCSR04 from "./components/Body/Arduino/HCSR04";
import Buzzer from "./components/Body/Arduino/Buzzer";
import Servo from "./components/Body/Arduino/Servo";
import DC from "./components/Body/Arduino/DC";
import E18 from "./components/Body/Arduino/E18";
import F249 from "./components/Body/Arduino/F249";
import Joystick from "./components/Body/Arduino/Joy";
import LCD from "./components/Body/Arduino/LCD";
import OLED from "./components/Body/Arduino/OLED";
import Relay from "./components/Body/Arduino/Relay";
import Rotary from "./components/Body/Arduino/Rotary";
import Tcrt from "./components/Body/Arduino/Tcrt5000";
import Button from "./components/Body/Arduino/Button";
import APDS from "./components/Body/Arduino/Apds-9960";
import LoginPage from "./components/Login/LoginPage";
import Register from "./components/Login/Register";
import Quiz from "./components/Body/quiz/quiz";
import Result from "./components/Body/quiz/result";

const App = () =>{
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopHeader />}> 
          <Route index element={<MainPage />} />
          <Route path="servoM" element={<Servo />} />
          <Route path="hcsr04" element={<HCSR04 />} />
          <Route path="buzzer" element={<Buzzer />} />
          <Route path="dc" element={<DC />} />
          <Route path="e18" element={<E18 />} />
          <Route path="f249" element={<F249 />} />
          <Route path="joystick" element={<Joystick />} />
          <Route path="lcd" element={<LCD />} />
          <Route path="oled" element={<OLED />} />
          <Route path="relay" element={<Relay />} />
          <Route path="rotary" element={<Rotary />} />
          <Route path="tcrt" element={<Tcrt />} />
          <Route path="button" element={<Button />} />
          <Route path="apds" element={<APDS />} />
          <Route path="arduino" element={<Arduino />} />
          <Route path="microbit" element={<MicroBit />} />
          <Route path="robots" element={<Robots />} />
          <Route path="loginpage" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
