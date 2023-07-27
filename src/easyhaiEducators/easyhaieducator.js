import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import SVGTest1 from "./easyhai1.svg";
import "./easyhaieducator.scss";
import Background from "./backg.jpg";
import SVGImg3 from "./img3.svg";
import SVGImg4 from "./img4.svg";
import SVGImg5 from "./img5.svg";
import SVGImg6 from "./img6.svg";
import SVGImg7 from "./img7.svg";
import SVGImg8 from "./img8.svg";
import SVGImg9 from "./img9.svg";
import SVGImg10 from "./img10.svg";
import SVGImg11 from "./img11.png";
import SVGImg12 from "./clock.png";
import SVGImg13 from "./enter.png";
import SVGImg14 from "./check-icon.svg";
import SVGImg15 from "./down-icon.svg";
import JOINUS from "./join-us.png";
const allImages = {
  img2: Background,
  img3: SVGImg3,
  img4: SVGImg4,
  img5: SVGImg5,
  img6: SVGImg6,
  img7: SVGImg7,
  img8: SVGImg8,
  img9: SVGImg9,
  img10: SVGImg10,
  img11: SVGImg11,
  img12: SVGImg12,
  img13: SVGImg13,
  img14: SVGImg14,
  img15: SVGImg15,
};

const EashyhaiEducators = () => {
  const [index, setIndex] = useState(0);

  const HandleSelect = (selectedIndex) => {
    
    setIndex(selectedIndex);
  };
  return (
    <div className="Easyhaionline-educator-container">
      <div className="Easyhaionline-educator-container-box-1">
        <div className="educator-box-1-mid">
          <img src={SVGTest1} alt="Your SVG" />
          <h3>
            Passionate about teaching? <br /> Kick-start your journey with
            Easyhaionline!
          </h3>
          <p>
            The Easyhaionline Educators Internship Programme helps upcoming
            Educators
            <br />
            fast-track their teaching careers with the support of india's
            Largest Learning Platform*
          </p>
        </div>
      </div>

      {/* =========================================BOX-2====================================== */}
      <div className="Easyhaionline-educator-container-box-2">
        <div className="educator-interested-joining">
          <Carousel
            indicators={false}
            activeIndex={index}
            onSelect={HandleSelect}
            interval={null}
          >
            <Carousel.Item>
              <div className="educator-interested-joining-1">
                <img className="joinus" src={JOINUS} width={250} alt="" />
                <div className="educator-interested-joining-11">
                  <p>
                    <img src={allImages.img12} width={12} alt=" " />
                    Takes 4 minutes
                  </p>
                  <button
                    onClick={() => {
                      setIndex(1);
                    }}
                  >
                    Apply now
                  </button>
                  <span>
                    press <strong> Enter</strong>
                    <img src={allImages.img13} width={15} alt="" />
                  </span>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="educator-carausel-form">
                <h1>
                  <span>Join </span>Us Now!!
                </h1>
                <label className="educator-carausel-input">
                  <div className="educator-carausel-name">Full Name</div>
                  <input className="educator-carausel-text-box" type="text" />
                </label>
                <label className="educator-carausel-input">
                  <div className="educator-carausel-name">Mobile</div>
                  <input className="educator-carausel-text-box" type="number" />
                </label>
                <button className="educator-carausel-submit-btn">Submit</button>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* =========================================[ BOX-3 ]====================================== */}
      <div className="Easyhaionline-educator-container-box-3">
        <div className="educator-box-21">
          <h1>What's in it for you?</h1>
          <p>
            Besides being associated with a national brand and impacting
            thousands of Learners,
            <br />
            Easyhaionline will offer you a chance to.
          </p>
        </div>
        <div className="educator-box-22">
          <div className="educator-box-221">
            <div className="educator-img-box">
              <img src={allImages.img3} alt="" />
            </div>
            <div>
              <h5>Learn from the Best</h5>
              <p>Learn from India's Top Mentors</p>
            </div>
          </div>
          <div className="educator-box-221">
            <div className="educator-img-box">
              <img src={allImages.img4} alt="" />
            </div>
            <div>
              <h5>Earn and Excel</h5>
              <p>Receive a stipend and incentives</p>
            </div>
          </div>
          <div className="educator-box-221">
            <div className="educator-img-box">
              <img src={allImages.img5} alt="" />
            </div>
            <div>
              <h5>Represent Easyhaionline</h5>
              <p>Become the face of a category</p>
            </div>
          </div>
          <div className="educator-box-221">
            <div className="educator-img-box">
              <img src={allImages.img6} alt="" />
            </div>
            <div>
              <h5>Build your Brand</h5>
              <p>Enhance your online presence</p>
            </div>
          </div>
        </div>
      </div>
      {/* =========================================[ BOX-4 ]====================================== */}
      <div className="Easyhaionline-educator-container-box-4">
        <div className="educator-box-41">
          <h1>Selection Process</h1>
          <p>
            Pursuing your career as a top educator with the Easyhaionline
            Internship is possible now. Programme. <br/>To give your career a boost,
            follow the below steps:
          </p>
        </div>
        <div className="educator-box-42">
          <div className="educator-dibba-1">
            <h4>Application</h4>
            <p>
              Fill the application form with your contact details and share a
              link of a 7-10 minute demo video
            </p>
            <div className="educator-dibba-11">
              {/* <img src={allImages.img7} alt="" /> */}
            </div>
          </div>
          <div className="educator-dibba-1">
            <h4>Demo video parameters</h4>
            <p>
              Kindly provide a demo video that follows the parameters as given
              below
            </p>
            <div className="educator-dibba-all-para">
              <div>1.Your introduction&#40; 2-3 mins &#41; </div>
              <div>
                2. A 50-150 hour content plan for your respective
                subject&#40;6-8 mins&#41;
              </div>
              <div>
                3. A concise video that showcases teaching a specific
                topic&#40;10-15 mins&#41;
              </div>
              <br />
              <div>
                Note:Please mention the Subject and Category that you would like
                to teach.
                <br />
                It is mandatory to share your educational qualifications to
                support your application in the video.
              </div>
            </div>

            <div className="educator-dibba-11">
              {/* <img src={allImages.img8} alt="" /> */}
            </div>
          </div>
          <div className="educator-dibba-1">
            <h4>Final Interview Round</h4>
            <p>
              if shortlisted, a Face-to-Face round will be scheduled to get to
              know you better.
            </p>
            <div className="educator-dibba-11">
              {/* <img src={allImages.img9} alt="" /> */}
            </div>
          </div>
          <div className="educator-dibba-1">
            <h4>Selection</h4>
            <p>Selected applicants will be intimated about the next steps</p>
            <div className="educator-dibba-11">
              {/* <img src={allImages.img10} alt="" /> */}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================[ BOX-5 ]====================================== */}
      <div className="Easyhaionline-educator-container-box-5">
        <div className="educator-box-51">
          <h1>Internship Terms</h1>
          <p>The following terms will apply for internship programme</p>
        </div>
        <div className="educator-box-52">
          <div className="educator-dibba">
            <img src={allImages.img14} alt="" />
            <span>Fixed 3-month internship</span>
          </div>
          <div className="educator-dibba">
            <img src={allImages.img14} alt="" />
            <span>Performance-based extension</span>
          </div>
          <div className="educator-dibba">
            <img src={allImages.img14} alt="" />
            <span>
              Fixed stipend and ‘Reward and Recognition’ for extraordinary
              performers.
            </span>
          </div>
          <div className="educator-dibba">
            <img src={allImages.img14} alt="" />
            <span>Standard Educators Incentives</span>
          </div>
        </div>
      </div>
      {/* =========================================[ BOX-6 ]====================================== */}
      <div className="Easyhaionline-educator-container-box-6">
        <div className="educator-box-66">
          <h1>Have questions about the Easyhaionline Internship Programme?</h1>
          <p>
            We'll help you get answers. Contact us at
            internship@Easyhaionline.com
          </p>
        </div>
        <div className="educator-box-67">
          <Accordion className="educator-dibba-671">
            <AccordionSummary
              expandIcon={
                <img
                  className="educator-down-icon"
                  src={allImages.img15}
                  alt=""
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4>
                Have questions about the Easyhaionline Internship Programme?
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                We'll help you get answers. Contact us at
                internship@Easyhaionline.com
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="educator-dibba-671">
            <AccordionSummary
              expandIcon={
                <img
                  className="educator-down-icon"
                  src={allImages.img15}
                  alt=""
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4>
                Will I become an Easyhaionline Educator after joining the
                programme?
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Top performers may be offered a minimum six-to-twelve-month long
                Educator job opportunity.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="educator-dibba-671">
            <AccordionSummary
              expandIcon={
                <img
                  className="educator-down-icon"
                  src={allImages.img15}
                  alt=""
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4>
                How many exclusive Classes do a intern have to conduct during
                the programme?
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Selected interns need to conduct minimum 50 Special Classes per
                month.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="educator-dibba-671">
            <AccordionSummary
              expandIcon={
                <img
                  className="educator-down-icon"
                  src={allImages.img15}
                  alt=""
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4>How will stipend get paid?</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Payment of stipend will be made as per the Bank details provided
                by intern. The stipend and applicable incentives will be paid at
                the end of each month.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="educator-dibba-671">
            <AccordionSummary
              expandIcon={
                <img
                  className="educator-down-icon"
                  src={allImages.img15}
                  alt=""
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4>Will Easyhaionline provide any tools for the programme?</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                You will get the Easyhaionline merchandise. For recording
                equipment, it will be assessed on a case-to-case basis. However,
                you must have a laptop with a webcam and a good internet
                connection &#40;minimum bandwidth of 20 Mbps&#41;.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="educator-dibba-671">
            <AccordionSummary
              expandIcon={
                <img
                  className="educator-down-icon"
                  src={allImages.img15}
                  alt=""
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4>Will my classes be promoted / marketed by Easyhaionline?</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Easyhaionline does not promote any Educator specific Special
                Class or bear any expenses for the same.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="educator-dibba-671">
            <AccordionSummary
              expandIcon={
                <img
                  className="educator-down-icon"
                  src={allImages.img15}
                  alt=""
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4>
                What documentation / ID proof am I required to submit for my
                onboarding?
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                PAN Card and one Government Issued ID &#40;Aadhar, Passport,
                Driving License, Voters ID Card&#41;is mandatory to onboard you
                as an Educator Intern.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="educator-dibba-671">
            <AccordionSummary
              expandIcon={
                <img
                  className="educator-down-icon"
                  src={allImages.img15}
                  alt=""
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4>
                Will there be any referral policy for referring other Educators?
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Yes, you would be eligible for a refferal incentive for every
                successful Educator Intern through your network. Please request
                your reference to mention your Name/Educator Code in the form
                provided by HR department.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="educator-dibba-671">
            <AccordionSummary
              expandIcon={
                <img
                  className="educator-down-icon"
                  src={allImages.img15}
                  alt=""
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4>
                Who will own the content I stream Live in the Special Classes?
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                You will own the copyright for all content in the Special
                Classes you host. You will be giving Easyhaionline an exclusive
                license to use the content for the term prescrbed in your
                contract, so that Easyhaionline can host the Special Classes on
                the Easyhaionline Platform.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="educator-dibba-671">
            <AccordionSummary
              expandIcon={
                <img
                  className="educator-down-icon"
                  src={allImages.img15}
                  alt=""
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4>
                During the programme, can i create my own groups &Telegram or
                WhatsApp with Learners?
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                You need to limit your communication with Learners/Students only
                though official Easyhaionline channels such as 'Community'.
                Asking Learners for their contact details is strictly prohibited
                and trying to contact Learners outside of official communication
                channels may lead to immediate termination from the programme.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="educator-dibba-671">
            <AccordionSummary
              expandIcon={
                <img
                  className="educator-down-icon"
                  src={allImages.img15}
                  alt=""
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4>Can I ask for an extension?</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Extensions of the Internship, or a Plus Contract may be offered
                post compeltion of the Internship period solely based on your
                performance.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion className="educator-dibba-671">
            <AccordionSummary
              expandIcon={
                <img
                  className="educator-down-icon"
                  src={allImages.img15}
                  alt=""
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4>What content am I supposed to teach during my programme?</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                You should adhere to the Content Plan which was shared by you in
                the demo video. However , the Content plan may change based on
                input from Easyhaionline.
              </p>
            </AccordionDetails>
          </Accordion>
<div class="parallax"></div>
          <Accordion className="educator-dibba-671">
            <AccordionSummary
              expandIcon={
                <img
                  className="educator-down-icon"
                  src={allImages.img15}
                  alt=""
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4>
                Will Easyhaionline help me get more Learners during my classes?
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Easyhaionline does not promote any Educator specific Special
                Class or bear any expenses for the same.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="educator-dibba-671">
            <AccordionSummary
              expandIcon={
                <img
                  className="educator-down-icon"
                  src={allImages.img15}
                  alt=""
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4>
                Will I be conducting Live or Recorded Classes on the
                Easyhaionline Platform?
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                You will be conducting Live Classes on the Easyhaionline
                Platform. Recording of the same would be available on the
                Platform post Class completion.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      {/* =========================================[ BOX-7 ]====================================== */}
      <div className="Easyhaionline-educator-container-box-7">
        <div className="educator-box-72">
          By submitting this form I hereby declare that the information given in
          this application/form is true and correct to the best of my knowledge
          and belief. I understand that the personal information provided by me
          shall be processed in accordance with
          <strong>
            <a href="https://www.eashyhaionline.com">
              Easyhaionline Privacy Policy
            </a>
          </strong>
          and I consent to the same and to receive information from
          Easyhaionline, including about its products and services, news and
          blog articles via email, SMS, phone call and/or such other mode of
          communication.
        </div>
      </div>
    </div>
  );
};
export default EashyhaiEducators;
