import signabout from "../images/sginw.png"
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="cap-a">ABOUT US</div>
      <div class="context-about">
        <div className="con-box-txt">
          <h4>More Information About My Personal Data</h4>
          <div class="line-a"></div>
          <h5>
            Hello, My name Ann Rachana majoring in computer science at Royal
            University of Phnom Penh. I have a strong interest in computer
            science and Web development . I have an adaptive ability to learn
            new things, have a creative mind, and be good at problem solving.
            and now I am looking for new work and new experience.
          </h5>
        </div>
        <div className="con-box-pic"></div>
      </div>

      <div class="area-about"></div>
    </div>
  );
};

export default About;
