// import "./form.css"
// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// import pdf from "../../Assets/../Assets/Shaik Safi Resume.pdf";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const resumeLink ="#";

// function ResumeNew() {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />
//         <h1 className="project-heading">
//           My <strong className="purple">Resume </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Click Here to download My Resume
//         </p>
//         {/* <Row className="resume">
//           <Document file={pdf} className="d-flex justify-content-center">
//             <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
//           </Document>
//         </Row> */}
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>
//       </Container>
//       <div class="contact-form">
//       <div class="first-container">
//         <div class="info-container">
//           <div><img class="icon"/>
//             <h3>Address</h3>
//             <p>Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
//           </div>
//           <div> <img class="icon"/>
//             <h3>Lets Talk</h3>
//             <p>+1 800 1236879</p>
//           </div>
//           <div><img class="icon"/>
//             <h3>General Support</h3>
//             <p>contact@example.com</p>
//           </div>
//         </div>
//       </div>
//       <div class="second-container">
//         <h2>Send Us A Message</h2>
//         <form>
//           <div class="form-group">
//             <label for="name-input">Tell us your name*</label>
//             <input id="name-input" type="text" placeholder="First name" required/>
//             <input type="text" placeholder="Last name" required/>
//           </div>
//           <div class="form-group">
//             <label for="email-input">Enter your email*</label>
//             <input id="email-input" type="text" placeholder="Eg. example@email.com" required/>
//           </div>
//           <div class="form-group">
//             <label for="phone-input">Enter phone number*</label>
//             <input id="phone-input" type="text" placeholder="Eg. +1 800 000000" required/>
//           </div>
//           <div class="form-group">
//             <label for="message-textarea">Message</label>
//             <textarea id="message-textarea" placeholder="Write us a message"></textarea>
//           </div>
//           <button>Send message</button>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default ResumeNew;
