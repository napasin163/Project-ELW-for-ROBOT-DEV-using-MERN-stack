import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopHeader from "./components/Header/Header";
import MainPage from "./components/Body/Main";
import Arduino from "./components/Body/Arduino/ArduinoTest";
import MicroBit from "./components/Body/MicroBit/MicroBit";
import Robots from "./components/Body/Robots/Robots";
import HCSR04 from "./components/Body/Arduino/HCSR04";
import Buzzer from "./components/Body/Arduino/Buzzer";
import Servo from "./components/Body/Arduino/Servo";
import E18 from "./components/Body/Arduino/E18";
import F249 from "./components/Body/Arduino/F249";
import Joystick from "./components/Body/Arduino/Joy";
import LCD from "./components/Body/Arduino/LCD";
import OLED from "./components/Body/Arduino/OLED";
import Relay from "./components/Body/Arduino/Relay";
import Tcrt from "./components/Body/Arduino/Tcrt5000";
import Button from "./components/Body/Arduino/Button";
import LoginPage from "./components/Login/LoginPage";
import Register from "./components/Login/Register";
import Quiz from "./components/Body/quiz/quiz";
import Result from "./components/Body/quiz/result";
import Motor from "./components/Body/Arduino/Motor";
import HCSR04MB from "./components/Body/MicroBit/HCSR04MB";
import BuzzerMB from "./components/Body/MicroBit/BuzzerMB";
import LCDMB from "./components/Body/MicroBit/LCDMB";
import MotorMB from "./components/Body/MicroBit/MotorMB";
import OLEDMB from "./components/Body/MicroBit/OLEDMB";
import RelayMB from "./components/Body/MicroBit/RelayMB";
import ServoMB from "./components/Body/MicroBit/ServoMB";
import TcrtMB from "./components/Body/MicroBit/TcrtMB";
import Quiz2 from "./components/Body/Arduino/testScript";
import SecondQuiz from "./components/Body/quiz/second-quiz";
import SecondResult from "./components/Body/quiz/resultSecond";
import ThirdQuiz from "./components/Body/quiz/third-quiz";
import ThirdResult from "./components/Body/quiz/resultThird";
import Congrats from "./components/Body/quiz/congrats";

const App = () =>{
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopHeader />}> 
          <Route index element={<MainPage />} />
          <Route path="servoM" element={<Servo />} />
          <Route path="hcsr04" element={<HCSR04 />} />
          <Route path="buzzer" element={<Buzzer />} />
          <Route path="e18" element={<E18 />} />
          <Route path="f249" element={<F249 />} />
          <Route path="joystick" element={<Joystick />} />
          <Route path="lcd" element={<LCD />} />
          <Route path="oled" element={<OLED />} />
          <Route path="relay" element={<Relay />} />
          <Route path="tcrt" element={<Tcrt />} />
          <Route path="button" element={<Button />} />
          <Route path="arduino" element={<Arduino />} />
          <Route path="microbit" element={<MicroBit />} />
          <Route path="robots" element={<Robots />} />
          <Route path="loginpage" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="result" element={<Result />} />
          <Route path="motor" element={<Motor />} />
          <Route path="hcsr04MB" element={<HCSR04MB />} />
          <Route path="buzzerMB" element={<BuzzerMB />} />
          <Route path="lcdMB" element={<LCDMB />} />
          <Route path="motorMB" element={<MotorMB />} />
          <Route path="oledMB" element={<OLEDMB />} />
          <Route path="relayMB" element={<RelayMB />} />
          <Route path="servoMB" element={<ServoMB />} />
          <Route path="tcrtMB" element={<TcrtMB />} />
          <Route path="quiz2" element={<Quiz2 />} />
          <Route path="secondquiz" element={<SecondQuiz />} />
          <Route path="secondresult" element={<SecondResult />} />
          <Route path="thirdquiz" element={<ThirdQuiz />} />
          <Route path="thirdresult" element={<ThirdResult />} />
          <Route path="congrats" element={<Congrats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
