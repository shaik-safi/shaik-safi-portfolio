import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Hi Everyone, I am <span className="purple">N Shaik Safi</span> from <span className="purple">Bangalore, India</span>.
        <br />I am a B.Tech fresher in Computer Science Engineering, aspiring to launch a career as a software developer. With experience in web application development, I am driven to contribute to the creation of interactive and functional software solutions.
        <br />
        <br />
        Apart from coding, I also love engaging in other activities:
      </p>
      <ul>
        <li className="about-activity">
          <ImPointRight /> Photography 📸
        </li>
        <li className="about-activity">
          <ImPointRight /> Outdoor Exploration 🌿
        </li>
      </ul>
    </blockquote>
  </Card.Body>
</Card>
  );
}

export default AboutCard;
