// App.js
import "./App.css";
import logo from "./assets/logo.png";
import award from "./assets/1.png";
import rcv_awd from "./assets/2.png";
import pumps from "./assets/3.png";
import call from "./assets/call.png";
import fb from "./assets/fbb.png";
import web from "./assets/web.png";
function App() {
  return (
    <div className="container">
      <img src={logo} alt="" className="logo" />
      <div className="flex-container">
        <div className="left-side">
          <img src={award} alt="" />
        </div>
        <div className="right-side">
          <h2>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h2>
          <h5>
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <br />
              <li>
                {" "}
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
          </h5>
          <img src={rcv_awd} alt="" />
          <h5>
            {" "}
            Government of India has awarded the "National Energy Conservation
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </h5>
        </div>
      </div>
      <h5 className="text-center">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </h5>
      <img src={pumps} alt="" className="pumps-image" />
      <h5 className="text-center">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </h5>
      <hr />
      <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
      <h5>
        CHEMICALS | PROCESS POWER WATER | WASTE WATER OILS | GAS PHARMA SUGARS |
        DISTILLERIES PAPER | PULP MARINE | DEFENCE METAL | MINING FOOD |
        BEVERAGE PETROCHEMICAL | REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING
        AGRICULTURE | RESIDENTIAL
      </h5>
      <div className="bottom-nav">
        <a href="tel:18002001234" className="left">
          <img className="bottom-logo" src={call} alt="" />
          Call us at 1800-200-1234
        </a>
        <a className="middle" href="https://www.facebook.com/cripumps">
          <img className="bottom-logo" src={fb} alt="" />
          Connect at Facebook
        </a>
        <a className="right" href="https://www.crigroups.com/">
          <img className="bottom-logo" src={web} alt="" />
          website
        </a>
      </div>
    </div>
  );
}

export default App;
