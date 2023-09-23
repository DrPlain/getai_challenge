import { Link } from "react-router-dom";
import Curve from "../assets/images/Vector_4.png";
import WhiteStar from "../assets/images/starwhite.png";
import Chain from "../assets/images/chain.png";
import OrangeStar from "../assets/images/orangestar.png";
import SmallStar from "../assets/images/starsmall.png";
import ManOnGlasses from "../assets/images/man_wearing_glassess.png";
import Globe from "../assets/images/globe.png";
import Flare from "../assets/images/purple_flare.png";
import Bulb from "../assets/images/bulb.png";

export default function Showcase() {
  return (
    <section className="text-white h-full">
      <div>
        <div
          className="bg-right bg-cover"
          style={{ backgroundImage: `url(${Flare})` }}
        >
          <p className="pt-4 text-center md:text-end md:pr-8 italic font-montserrat">
            Igniting a Revolution in HR Innovation
          </p>
          <div className="flex justify-center md:justify-end ml-[200px] md:mr-[40px]">
            <img src={Curve} alt="curve line" width={116} />
          </div>
          <span className="flex justify-end mr-24 pt-3">
            <img src={SmallStar} alt="white star" width={8} />
          </span>
          <span className="flex justify-center py-2 mr-40">
            <img src={WhiteStar} alt="white star" width={10} />
          </span>
          <div className="md:flex items-center justify-between w-5/6 mx-auto md:gap-x-0 lg:gap-x-60">
            <div>
              <span className="flex justify-end md:justify-start mr-[90px] md:ml-[200px] mb-[-20px]">
                <img src={Bulb} alt="bulb" width={12} />
              </span>

              <h2 className="font-extrabold text-[32px] text-center md:text-start">
                getlinked Tech
              </h2>
              <h1 className="flex items-center justify-center md:justify-start font-extrabold text-[32px]">
                Hackathon <span className="text-[#D434FE] pl-2">1.0</span>
                <img src={Chain} alt="image of chain" width={40} />
                <img src={OrangeStar} alt="orange star" width={30} />
              </h1>
              <p className="text-center md:text-start pt-4 font-montserrat">
                Participate in getlinked tech Hackathon <br />
                2023 stand a chance to win a Big prize
              </p>
              <Link to="/registration">
                <div className="flex justify-center md:justify-start pt-6 items-center">
                  <button className="rounded px-10 md:ml-0 ml-4 py-2 bg-gradient-to-r from-[#D434FE] via-[#D434FE] to-[#903AFF]">
                    Register
                  </button>
                  <span className="pl-6">
                    <img src={SmallStar} alt="white star" width={8} />
                  </span>
                </div>
              </Link>
              <div>
                <p className="text-center md:text-start pt-4 pb-4 font-unica text-bold text-[48px]">
                  00<span className="text-[12px] pr-6 font-montserrat">H</span>{" "}
                  00
                  <span className="text-[12px] pr-6 font-montserrat">M</span> 00
                  <span className="text-[12px] font-montserrat">S</span>
                </p>
              </div>
            </div>

            <div
              className="bg-cover bg-center h-[400px] md:flex hidden md:h-[350px]"
              style={{ backgroundImage: `url(${ManOnGlasses})` }}
            >
              <span className="flex justify-center">
                <img src={Globe} alt="globe image vector" width={400} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center h-[400px] md:hidden"
        style={{ backgroundImage: `url(${ManOnGlasses})` }}
      >
        <span className="flex justify-center">
          <img src={Globe} alt="globe image vector" width={400} />
        </span>
      </div>
    </section>
  );
}
