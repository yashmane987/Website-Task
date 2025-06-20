import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import homeimg from "../images/homeimg.png";
import logo from "../images/logo.png";
const CustomNavbar = () => {
  return (
    <>
      <Navbar expand="lg" bg="white" className="shadow-sm py-3">
        <Container fluid>
          {/* Logo & Brand */}
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <img  className="pt-3 ps-4"
                src={logo}
                alt="GBIM Logo"
                width="150"
                height="50"
                style={{ marginRight: "10px" }}
              />
            </div>
          </Navbar.Brand>

          {/* Toggle for mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavDropdown
                title={<span className="text-danger">Digital Marketing</span>}
                id="digital-marketing-dropdown"
              >
                <NavDropdown.Item href="#">SEO</NavDropdown.Item>
                <NavDropdown.Item href="#">PPC</NavDropdown.Item>
                <NavDropdown.Item href="#">Social Media</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Marketing Technologies"
                id="marketing-tech-dropdown"
              >
                <NavDropdown.Item href="#">CRM</NavDropdown.Item>
                <NavDropdown.Item href="#">Automation</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link href="#">Careers</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav>

            {/* Button */}
            <Button
              variant="danger"
              className="d-flex align-items-center rounded-pill px-4 py-2"
            >
              <i className="bi bi-telephone me-2"></i> Schedule A Call
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <img
          src={homeimg}
          alt="creative"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div className="custom-purple">
          <h1 className="top-centered-text pt-1 ps-5">
            Strategic
            <b>Design Thinking</b> for Smarter Digital Solutions
          </h1>
        </div>
      </div>
    </>
  );
};

export default CustomNavbar;
