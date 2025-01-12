"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import { Container, Navbar, Nav, Dropdown, Row, Col, Image, Button } from "react-bootstrap";

const TopNavbar = () => (
  <div id="topbar">
    <Navbar expand="lg" id="Mainnavbar">
      <Container fluid>
        <Navbar.Brand>
          <Image src="/astrologo.webp" alt="ASTRONOMY" className="d-inline-block align-text-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="top-navbar" />
        <Navbar.Collapse id="top-navbar">
          <Nav className="ms-auto"> {/* Pushes links to the right */}
            <Nav.Link href="#" className="text-white">Login/Register</Nav.Link>
            <Nav.Link href="#" className="text-white">Shop</Nav.Link>
            <Button variant="primary" className="fw-bold">Subscribe</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Navbar expand="lg" id="Lowernavbar">
      <Container fluid>
        <Navbar.Toggle aria-controls="lower-navbar" />
        <Navbar.Collapse id="lower-navbar">
          <Nav className="ms-auto"> {/* Ensures links align correctly */}
            <Nav.Link href="#" className="text-white">News</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className="text-white p-0 border-0 dropdown-no-underline" /* Apply custom class */
                id="science-dropdown"
              >
                Science
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Science</Dropdown.Item>
                <Dropdown.Item href="#">Solar System</Dropdown.Item>
                <Dropdown.Item href="#">Exoplanets</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className="text-white p-0 border-0 dropdown-no-underline"
                id="observing-dropdown"
              >
                Observing
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Observing</Dropdown.Item>
                <Dropdown.Item href="#">In The Sky</Dropdown.Item>
                <Dropdown.Item href="#">Upcoming Events</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className="text-white p-0 border-0 dropdown-no-underline"
                id="space-dropdown"
              >
                Space Exploration
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Space Exploration</Dropdown.Item>
                <Dropdown.Item href="#">Human Spaceflight</Dropdown.Item>
                <Dropdown.Item href="#">Robotic Spaceflight</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#" className="text-white">The Magazine</Nav.Link>
            <Nav.Link href="#" className="text-white">Ask Astro</Nav.Link>
            <Nav.Link href="#" className="text-white"><i className="bi bi-search"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);



const TopStories = () => (
  <Container className="mt-4">
    <Row className="d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="fw-bold" style={{ color: "#000000" }}>Top Stories</h2>
        <a href="#" className="text-dark fw-bold view-all-news" style={{ color: "#000000" }}>View All News &gt;</a>
      </div>
    </Row>
    <hr />
    <Row>
      <Col lg={7}>
        <Image src="/hurricane.webp" alt="Main Story" fluid />
        <div>
          <p className="text-uppercase text-muted">Robotic Spaceflight</p>
          <h3 className="fw-bold">NASA postpones Europa Clipper launch as Hurricane Milton takes aim at Cape Canaveral</h3>
        </div>
      </Col>
      <Col lg={5}>
        <div className="mb-4">
          <Image src="/commet-atlas.webp" alt="Secondary Story" fluid />
          <p className="text-uppercase text-muted mt-2">Observing, Upcoming Events</p>
          <h5 className="fw-bold">Comet Tsuchinshan-ATLAS will soon move into the evening sky</h5>
        </div>
        <Row>
          <Col sm={6}>
            <Image src="/launch.webp" alt="Secondary Story" fluid />
            <p className="text-uppercase text-muted mt-2">Robotic Spaceflight, Solar System</p>
            <h5 className="fw-bold">ESAs Hera mission is headed to Dimorphos, the asteroid NASA crashed into</h5>
          </Col>
          <Col sm={6}>
            <Image src="/saturn.webp" alt="Secondary Story" fluid />
            <p className="text-uppercase text-muted mt-2">Solar System</p>
            <h5 className="fw-bold">How long will Saturns rings last before they disappear?</h5>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

const PictureOfTheDayAndSky = () => (
  <Container className="my-3">
    <Row>
      <Col lg={6}>
        <Row className="d-flex justify-content-between align-items-center">
          <h2 className="fw-bold">Picture of the Day</h2>
          <a href="#" className="text-dark fw-bold">See All Photos &gt;</a>
        </Row>
        <hr />
        <Image src="/conjunction.webp" alt="Eclipse" fluid />
        <h4 className="fw-bold mt-2">An autumn conjunction</h4>
        <p className="text-muted">Behyar Bakhshandeh from Ca</p>
        <p className="text-muted">The Moon and Venus met in the sky this past weekend, as captured here on Oct.</p>
      </Col>
      <Col lg={6}>
        <Row className="d-flex justify-content-between align-items-center">
          <h2 className="fw-bold">In The Sky</h2>
          <a href="#" className="text-dark fw-bold">Explore All &gt;</a>
        </Row>
        <hr />
        <Image src="/halfmoon.webp" alt="Moon" fluid />
        <h4 className="fw-bold mt-2">NASA postpones Europa Clipper launch as Hurricane Milton takes aim at Cape Canaveral</h4>
      </Col>
    </Row>
  </Container>
);

const Footer = () => (
  <div id="Footer" className="bg-dark text-light py-4" style={{ backgroundImage: `url('/footer-background.jpg')`, backgroundSize: "cover" }}>
    <Container>
      <Row>
        <Col lg={3}>
          <Image src="/astrologo.webp" alt="Footer Logo" />
        </Col>
        <Col lg={9}>
          <Nav className="justify-content-end">
            <Nav.Link href="#" className="text-white"><i className="bi bi-facebook"></i></Nav.Link>
            <Nav.Link href="#" className="text-white"><i className="bi bi-linkedin"></i></Nav.Link>
            <Nav.Link href="#" className="text-white"><i className="bi bi-youtube"></i></Nav.Link>
            <Nav.Link href="#" className="text-white"><i className="bi bi-instagram"></i></Nav.Link>
            <Nav.Link href="#" className="text-white"><i className="bi bi-twitter"></i></Nav.Link>
          </Nav>
          <Nav className="justify-content-end mt-2">
            <Nav.Link href="#" className="text-white">About Us</Nav.Link>
            <Nav.Link href="#" className="text-white">Contact Us</Nav.Link>
            <Nav.Link href="#" className="text-white">Subscribe</Nav.Link>
            <Nav.Link href="#" className="text-white">Customer Service</Nav.Link>
            <Nav.Link href="#" className="text-white">Advertising</Nav.Link>
            <Nav.Link href="#" className="text-white">Terms of Use</Nav.Link>
            <Nav.Link href="#" className="text-white">Privacy Policy</Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  </div>
);

export default function Home() {
  return (
    <main>
      <TopNavbar />
      <TopStories />
      <PictureOfTheDayAndSky />
      <Footer />
    </main>
  );
}
