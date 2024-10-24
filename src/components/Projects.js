import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ENM.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ericsson Network Manager",
      description: "Design & Development",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item> */}
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="justify-content-center">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  <p>The Ericsson Network Manager (ENM) is a sophisticated system that manages large telecommunications networks. It plays a vital role in helping service providers monitor and configure their network devices, such as routers and switches, ensuring that everything runs smoothly. My job was to improve this system and make it more efficient for the people who operate these networks.</p>

<h5>Key Contributions</h5>
<li><b>User Interface Development:</b> I worked on making the interface easier to use for network operators. This means that I helped design screens and features that allow operators to manage network devices (like switches or routers) without getting lost in the complexity. I used React.js and JavaScript to build dynamic and interactive components, which simplified the user experience. Thanks to these improvements, we saw a 30% drop in UI-related issues, as reported in user feedback and bug tracking.</li>
<li><b>Back-End Integration:</b> I created RESTful APIs using Node.js to ensure that data from the front-end (what users see) smoothly connects with the back-end (the core system and databases). These APIs handled real-time data about network performance, helping the operations team receive immediate updates on network health. This reduced the time it took to detect and fix network issues, meaning less downtime for our clients.</li>
<li><b>Performance Optimization:</b> A big part of my role was improving the performance of the network elements themselves. For example, I worked on Mini-Link Indoor network devices using Java to automate tasks like diagnostics and updates. This not only saved operators a lot of time but also increased the system’s operational efficiency by 30%. Additionally, I optimized the front-end by implementing techniques like lazy loading and AOT compilation, which reduced page load times by 25%. This made the application faster and more responsive for users.</li>
<li><b>AWS Integration with CI/CD Pipelines:</b> I was involved in integrating AWS services (like S3 and EC2) with our GitLab CI/CD pipelines to make the deployment process smoother and more automated. This allowed us to deliver updates and releases faster, with fewer errors. By automating these processes, we minimized human error and reduced deployment times, which meant quicker updates for the system without downtime.</li>
<li><b>Secure Coding Practices and Testing:</b> Security was a top priority in this project. I used SonarQube to scan our code for vulnerabilities and ensure we followed secure coding practices. This was important because we needed to protect sensitive network data. Additionally, I focused on bug detection through Test-Driven Development (TDD), which helped us identify and fix issues early on. By doing this, I was able to reduce post-release bugs by 25%, making the system more reliable for end users.</li>

                  
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}