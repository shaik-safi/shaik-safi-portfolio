import "./resume.css"
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/N Shaik Safi Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink ="#";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <h1 className="project-heading">
          My <strong className="purple">Resume </strong>
        </h1>
        <p style={{ color: "white" }}>
          Click Here to download My Resume
        </p>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> 
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;


// <div id="fh5co-resume" className="fh5co-bg-color">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12 col-md-offset-0">
//             <ul className="timeline">
//               <li className="timeline-heading text-center ">
//                 <div><h3>Work Experience</h3></div>
//               </li>
//               <li className=" timeline-unverted">
//                 <div className="timeline-badge"><i className="icon-suitcase"></i></div>
//                 <div className="timeline-panel">
//                   <div className="timeline-heading">
//                     <h3 className="timeline-title">Intern</h3>
//                     <span className="company">SecurelyShare Software Pvt. Ltd. - July 2022 - August 2022</span>
//                   </div>
//                   <div className="timeline-body">
//                     <p>Built React application for their product and Fixing bugs and testing for the usability of tools. </p>
//                   </div>
//                 </div>
//               </li>
//               <br/>
//               <li className="timeline-heading text-center ">
//                 <div><h3>Education</h3></div>
//               </li>
//               <li className="timeline-inverted ">
//                 <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
//                 <div className="timeline-panel">
//                   <div className="timeline-heading">
//                     <h3 className="timeline-title">Bachelor in Technology (CSE)</h3>
//                     <span className="company">Dayananda Sagar University - 2019 - 2023</span>
//                   </div>
//                   {/* <div className="timeline-body">
//                     <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
//                   </div> */}
//                 </div>
//               </li>
//               <li className=" timeline-unverted">
//                 <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
//                 <div className="timeline-panel">
//                   <div className="timeline-heading">
//                     <h3 className="timeline-title">Pre-University</h3>
//                     <span className="company">Sri Bhagawan Mahaveer Jain PU
//                       College - 2017 - 2019</span>
//                   </div>
//                   {/* <div className="timeline-body">
//                     <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
//                   </div> */}
//                 </div>
//               </li>
//               <li className="timeline-inverted ">
//                 <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
//                 <div className="timeline-panel">
//                   <div className="timeline-heading">
//                     <h3 className="timeline-title">Secondary Schooling</h3>
//                     <span className="company">Sri Chaitanya Techno School - 2012 - 2017</span>
//                   </div>
//                   {/* <div className="timeline-body">
//                     <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
//                   </div> */}
//                 </div>
//               </li>
//               </ul>
//           </div>
//         </div>
//       </div>
//     </div>