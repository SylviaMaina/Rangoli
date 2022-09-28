import React, { useState } from "react";
import "./App.css";
import commune from "./Media/commune.jpg";
import green from "./Media/green.jpg";
import pea from "./Media/pea.jpg";
import rich from "./Media/rich.jpg";
import simple from "./Media/simple.jpg";
import small from "./Media/small.jpg";
import flower from "./Media/flower.jpg";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import Modal from "react-bootstrap/Modal";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [confirm, setConfirm] = useState(false);

  const handleHide = () => setConfirm(false);
  const handleConfirm = () => setConfirm(true);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    request: "",
    level: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleChanges(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="App">
      <div className="heading">
        <h2>Gate Shopping Mall</h2>
      </div>
      <div className="welcome">
        <div className="intro">
          <h6>Gate Shopping mall welcomes you to</h6>
          <h2>Diwali Rangoli Competition 2022</h2>
        </div>
      </div>
      <div className="About">
        <img src={commune} alt="..." />
        <div className="compete">
          <h6>
            Rangoli is drawn in different states with different names and on
            different themes. Be it Kollam in Tamil Nadu, Sathiya in Gujarat,
            Alpana in Bengal, Mandana in Rajasthan, Osa in Odisha, Aipan in
            Uttarakhand, or simply the Rangoli from Maharashtra – every region
            has its own unique way of representing their traditions, folklore
            and practices. Now it is your chance to showcase your creative
            skills by participating in the Rangoli Making Competition.
          </h6>
          <h6>
            Come connect, shop and show your skills in the rangoli competition
            and stand a chance to win prizes which will be given to the 3 best
            designs.
          </h6>
          <h6>
            The event is happening on the 10th of October 2022 at the gate
            shopping mall first floor from 09:00 am. Recources to create your
            design will NOT be provided at the event. Please state in the
            registration form if you'll need extra space than the 1 metre by 1
            metre provided by default.
          </h6>
          <div className="button">
            <button onClick={handleShow}>Register to compete</button>
          </div>
        </div>
      </div>
      <div className="cards">
        <h2>Previous year's top designs</h2>

        <div className="grid">
          <div className="item-0">
            <img src={flower} alt="..." />
          </div>

          <div className="item-1">
            <img src={green} alt="..." />
          </div>
          <div className="item-2">
            <img src={rich} alt="..." />
          </div>
          <div className="item-3">
            <img src={pea} alt="..." />
          </div>
          <div className="item-4">
            <img src={simple} alt="..." />
          </div>
          <div className="item-5">
            <img src={small} alt="..." />
          </div>
          {/* <div className="item-6">
            <img src={flower} alt="..." />
          </div> */}
        </div>
        <div>
          <button className="buttons" onClick={handleShow}>
            Register to compete
          </button>
        </div>
      </div>
      <div className="footer">
        <div className="infos">
          <div className="menu">
            <h2>About</h2>

            <h6>
              <ArrowForwardIosIcon
                style={{
                  color: "#DF8E03",
                  fontSize: "1rem",
                  marginRight: "0.5rem",
                }}
              />
              Home
            </h6>

            <h6>
              <ArrowForwardIosIcon
                style={{
                  color: "#DF8E03",
                  fontSize: "1rem",
                  marginRight: "0.5rem",
                }}
              />
              About Us
            </h6>

            <h6>
              <ArrowForwardIosIcon
                style={{
                  color: "#DF8E03",
                  fontSize: "1rem",
                  marginRight: "0.5rem",
                }}
              />
              Careers
            </h6>
            <h6>
              <ArrowForwardIosIcon
                style={{
                  color: "#DF8E03",
                  fontSize: "1rem",
                  marginRight: "0.5rem",
                }}
              />
              Contact Us
            </h6>
          </div>
          <div className="contact">
            <h2>Contact Info</h2>
            <h6>
              <PhoneForwardedIcon
                style={{
                  color: "#DF8E03",
                  fontSize: "1rem",
                  marginRight: "0.5rem",
                }}
              />
              +254721943588
            </h6>
            <h6>
              <MailIcon
                style={{
                  color: "#DF8E03",
                  fontSize: "1rem",
                  marginRight: "0.5rem",
                }}
              />
              sylviamaina16@gmail.com
            </h6>
            <h6>
              <LocationOnIcon
                style={{
                  color: "#DF8E03",
                  fontSize: "1rem",
                  marginRight: "0.5rem",
                }}
              />
              Nairobi, Kenya
            </h6>
          </div>
        </div>
        <div className="socials">
          <a href="http://sylvia-maina.netlify.app/">
            <FacebookRoundedIcon />
          </a>
          <a href="http://sylvia-maina.netlify.app/">
            <TwitterIcon />
          </a>
          <a href="http://sylvia-maina.netlify.app/">
            <YouTubeIcon />
          </a>
          <a href="http://sylvia-maina.netlify.app/">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/in/sylvia-maina-a2b956159/">
            <LinkedInIcon />
          </a>
        </div>
        <h6 className="copy">
          Copyright © 2022 Sylvia Maina. All Rights Reserved
        </h6>
      </div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header
            closeButton
            style={{ backgroundColor: "#840c01", color: "#fff" }}
          >
            <h2>Fill out the form to register</h2>
          </Modal.Header>
          <form
            action="https://formsubmit.co/sylviamaina16@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <label>Name</label>
            <input
              type="text"
              placeholder="Full name"
              onChange={handleChange}
              name="name"
              value={formData.name}
              required
            />
            <label>Phone Number</label>
            <input
              type="number"
              label="Number"
              placeholder="Phone Number"
              onChange={handleChange}
              name="number"
              value={formData.number}
              required
            />
            <label>Email Address</label>
            <input
              type="email"
              label="email"
              placeholder="example@gmailcom"
              onChange={handleChange}
              name="email"
              value={formData.email}
              required
            />
            <textarea
              value={formData.request}
              placeholder="Please state any special requests on working space that you'd need. disclaimer: this will be provided at a first come first serve basis."
              onChange={handleChange}
              name="request"
            />
            <fieldset>
              <legend>What level are you competing at?</legend>
              <div className="label1">
                <label>Beginner</label>
                <input
                  className="input"
                  type="radio"
                  id="beginner"
                  name="level"
                  value="beginner"
                  checked={formData.level === "beginner"}
                  onChange={handleChanges}
                />
              </div>
              <div className="label1">
                <input
                  className="input"
                  type="radio"
                  id="intermediate"
                  name="level"
                  value="intermediate"
                  checked={formData.level === "intermediate"}
                  onChange={handleChanges}
                />
                <label>Intermediate</label>
              </div>
              <div className="label1">
                <input
                  className="input"
                  type="radio"
                  id="expert"
                  name="level"
                  value="expert"
                  checked={formData.level === "expert"}
                  onChange={handleChanges}
                />
                <label>Expert</label>
              </div>
            </fieldset>

            <button className="buttons" onClick={handleConfirm}>
              Register
            </button>
          </form>
        </Modal>
        <Modal confirm={confirm} onHide={handleHide}>
          <Modal.Header
            closeButton
            style={{ backgroundColor: "#840c01", color: "#fff" }}
          >
            <h2>
              Confirmed! You are now registered to participate in the Rangoli
              competition 2022
            </h2>
          </Modal.Header>
        </Modal>
      </>
    </div>
  );
}

export default App;
