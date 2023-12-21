import HeroSlider, { Slide } from "hero-slider";
import logohome from "../images/logowhite.png";
import Image1 from "../images/bgkohkongblue.png";
import Image2 from "../images/bgmaxsun.png";

import "./Home.css";

import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BiRightArrow } from "react-icons/bi";

const slideimgone = Image1;
const slideimgtwo = Image2;
const slideimgthree =
  "https://media.istockphoto.com/id/1480095869/photo/student-or-man-use-computer-for-elearning-education-online-internet-technology-webinar-online.jpg?s=2048x2048&w=is&k=20&c=YetbND8zDNjpEPd5yc9W5suHlZGCsExIZ8uMusQd4d4=";

const SlideAuto = () => {
  return (
    <div className="home-c" id="home">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>

      <div className="home-content">
        <HeroSlider
          slidingAnimation="left_to_right"
          orientation="horizontal"
          initialSlide={1}
          onBeforeChange={(previousSlide, nextSlide) =>
            console.log("onBeforeChange", previousSlide, nextSlide)
          }
          onChange={(nextSlide) => console.log("onChange", nextSlide)}
          onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
          settings={{
            slidingDuration: 250,
            slidingDelay: 100,
            shouldAutoplay: false,
            shouldDisplayButtons: true,
            autoplayDuration: 2000,
            height: "100vh",
          }}>
          {/* ==================================================================== */}

          <Slide
            style={{
              backgroundImage: `url(${slideimgone})`,
              backgroundAttachment: "fixed",
              backgroundRepeat: " no-repeat",
              backgroundSize: "cover",
            }}>
            <div className="home">
              <div className="home-container">
                <div className="home-text">
                  <h6>HAY! THERE / This is </h6>
                  <h1>ANN RACHANA</h1>
                  <p>
                    Computer Science Student
                    <br />
                    This is My Portfolio
                  </p>
                  <a href="#about">
                    <button className="buttonh">
                      Read More
                      <BiRightArrow />
                    </button>
                  </a>
                  <div class="social-links">
                    <div id="twitter" class="social-btn flex-center">
                      <ImFacebook />
                      <span>facebook</span>
                    </div>

                    <div id="linkedin" class="social-btn flex-center">
                      <BsInstagram />
                      <span>instargam</span>
                    </div>

                    <div id="github" class="social-btn flex-center">
                      <BsGithub />
                      <span>github</span>
                    </div>
                  </div>
                  <p className="khmerfont">
                    Photo by សម្រស់​​ ខេត្តកោះកុង
                    <br /> Logo by អាន​​ រចនា
                  </p>
                </div>
                <div className="home-pic">
                  <img
                    src={logohome}
                    alt="logohome"
                    style={{ filter: "drop-shadow(0 0 0.75rem #006994)" }}
                  />
                </div>
              </div>
            </div>
          </Slide>
          {/* ==================================================================== */}

          <Slide
            background={{
              backgroundImage: `url(${slideimgthree})`,
              backgroundAttachment: "fixed",
            }}>
            <div className="home">
              <div className="home-container">
                <div className="home-text">
                  <h6>HAY! THERE / This is </h6>
                  <h1>ANN RACHANA</h1>
                  <p>
                    Computer Science Student
                    <br />
                    This is My Portfolio
                  </p>
                  <a href="#about">
                    <button className="buttonh">
                      Read More
                      <BiRightArrow />
                    </button>
                  </a>
                  <div class="social-links">
                    <div id="twitter" class="social-btn flex-center">
                      <ImFacebook />
                      <span>facebook</span>
                    </div>

                    <div id="linkedin" class="social-btn flex-center">
                      <BsInstagram />
                      <span>instargam</span>
                    </div>

                    <div id="github" class="social-btn flex-center">
                      <BsGithub />
                      <span>github</span>
                    </div>
                  </div>
                  <p className="khmerfont">
                    Photo by សម្រស់​​ ខេត្តកោះកុង
                    <br /> Logo by អាន​​ រចនា
                  </p>
                </div>
                <div className="home-pic">
                  <img
                    src={logohome}
                    alt="logohome"
                    style={{ filter: "drop-shadow(0 0 0.75rem #006994)" }}
                  />
                </div>
              </div>
            </div>
          </Slide>
          {/* ==================================================================== */}

          <Slide
            background={{
              backgroundImage: `url(${slideimgtwo})`,
              backgroundAttachment: "fixed",
              backgroundRepeat: " no-repeat",
              backgroundSize: "cover",
            }}>
            <div className="home">
              <div className="home-container">
                <div className="home-text" style={{ fontFamily: "Moulpali" }}>
                  <h6
                    style={{
                      fontFamily: "Noto Sans Khmer",
                      fontSize: "20px",
                      letterSpacing: "1px",
                      opacity: "0.7",
                    }}>
                    ស្វាគមន៍មកកាន់គេហ័រទំពរ
                  </h6>
                  <h1
                    style={{
                      fontSize: "80px",
                      filter: "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.4))",
                    }}>
                    អាន ​រចនា
                  </h1>
                  <p
                    style={{
                      fontFamily: "Noto Sans Khmer",
                      letterSpacing: "1px",
                      fontSize: "18px",
                      filter: "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.4))",
                      opacity: "0.8",
                    }}>
                    ជានិសិ្សតព័តមានវិទ្យាផ្នែកវិទ្យាសាស្រ្តកំុព្យូទ័រ
                    នេះគឺជាគេហ័រ
                    <br />
                    ទំពរទាក់ទងព៍តមានខ្លះៗរបស់ខ្ញំុ{" (​ ប្រវត្តិរូបសង្កេប ​)"}
                  </p>
                  <a href="#about">
                    <button
                      className="buttonh"
                      style={{
                        background: "rgba(0, 0, 0, 0.3)",
                        fontFamily: "Noto Sans Khmer",
                        letterSpacing: "1px",
                        fontSize: "18px",
                      }}>
                      មានបន្តទៀត
                      <BiRightArrow />
                    </button>
                  </a>

                  <div class="social-links">
                    <div id="twitter" class="social-btn flex-center">
                      <ImFacebook />
                      <span>facebook</span>
                    </div>

                    <div id="linkedin" class="social-btn flex-center">
                      <BsInstagram />
                      <span>instargam</span>
                    </div>

                    <div id="github" class="social-btn flex-center">
                      <BsGithub />
                      <span>github</span>
                    </div>
                  </div>
                  <p className="khmerfont" style={{ marginBottom: "10%" }}>
                    Photo original / AnnRachana
                    <br /> Logo by អាន​​ រចនា
                  </p>
                </div>
                <div className="home-pic">
                  <img
                    src={logohome}
                    alt="logohome"
                    style={{
                      filter: "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.4))",
                    }}
                  />
                </div>
              </div>
            </div>
          </Slide>
        </HeroSlider>
      </div>
    </div>
  );
};

export default SlideAuto;
