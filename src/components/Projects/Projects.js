import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/shaik-safi/youtube-clone/raw/main/YouTubeClone.png"
              isBlog={false}
              title="YouTube Clone Application"
              description="A YouTube Clone application built with React.js and Material-UI, providing users with the ability to browse and watch YouTube videos, search for videos, and view video details including titles, channels, and statistics."
              ghLink="https://github.com/shaik-safi/youtube-clone"
              demoLink="https://youtubecloneshaik.netlify.app/"
              
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/CSE-DSU/Team7_WomenSafetyManagementSystem/blob/main/Untitled%20design.jpg?raw=true"
              isBlog={false}
              title="Women Safety Application"
              description="A mobile app for women's safety, providing quick assistance through alert messages to guardians/emergency contacts, along with helpline service details and geofencing for automatic alerts in predefined boundaries."
              ghLink="https://github.com/CSE-DSU/Team7_WomenSafetyManagementSystem"
              // demoLink=""
              researchPaperLink = "https://www.ijert.org/research/maximizing-womens-safety-with-an-effective-system-IJERTV12IS030064.pdf"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/shaik-safi/Disease-Prediction-System/raw/main/GUI%20DP.png?raw=true"
              isBlog={false}
              title="Disease Prediction System"
              description="A project that will give accurate predictions based on information provided by the user and also based on datasets that are available in the machine"
              ghLink="https://github.com/shaik-safi/Disease-Prediction-System"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/shaik-safi/Stock-Prediction/raw/main/Pictures/1.png?raw=true"
              isBlog={false}
              title="Visualization and Forecasting of Stocks"
              description="Endeavor to execute a machine learning approach to foresees stock price, machine learning is viably implemented in determining stock price"
              ghLink="https://github.com/shaik-safi/Stock-Prediction"
              demoLink="https://shaik-safi-stock-prediction-app-iw018u.streamlitapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/shaik-safi/Cost-calculation-of-rental-cars/raw/main/Pictures/map.png?raw=true"
              isBlog={false}
              title="Rental Car Cost Estimator"
              description="It increases the availability and use of rental cars among travelers in the state. It calculates its cost and minimum distance traveled in a trip."
              ghLink="https://github.com/shaik-safi/Rental-Car-Cost-Estimator"
              // demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/shaik-safi/Vrtual-Assistant/raw/main/screenshot/testing%20Nova.png?raw=true"
              isBlog={false}
              title="Virtual Assistant"
              description="A virtual assistant with the function of voice recognition and AI element. Nova can speak to users informally, send WhatsApp messages, and more"
              ghLink="https://github.com/shaik-safi/Vrtual-Assistant"
              // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/shaik-safi/photography-website/blob/main/images/photography.png?raw=true"
              isBlog={false}
              title="Photography website"
              description="A portfolio is a concise collection of your photos created to show people your best work. Its purpose is usually to get a photography gig."
              ghLink="https://github.com/shaik-safi/photography-website"
              demoLink="https://shaikphotographysite.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
