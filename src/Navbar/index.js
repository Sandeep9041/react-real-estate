import { Component } from "react";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import NavLink from "react-bootstrap/esm/NavLink";
import "./index.css";

class NavBar extends Component {
  state = { isActive: false };

  getIsActiveManageProperty = () => {
    this.setState((prevState) => ({ isActive: !prevState.isActive }));
  };

  render() {
    const { isActive } = this.state;
    console.log(isActive);
    return (
      <div id="nav-bar">
        <Navbar collapseOnSelect expand="lg" className="nav-bar-item">
          <Navbar.Toggle
            aria-controls="navbarScroll"
            data-bs-target="#navbarScroll"
          />
          <Navbar.Collapse id="navBarScroll">
            <div className="nav-bar-items">
              <div className="home-logo">
                <img
                  alt="Home Logo"
                  src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/7950F2/external-home-essentials-pack-tanah-basah-glyph-tanah-basah.png"
                  className="logo-image"
                />
                <p className="home-logo-name">Estatery</p>
              </div>
              <Nav className="o">
                <Link to="/" className="link-style active">
                  Rent
                </Link>
                <Link className="link-style">Buy</Link>
                <Link className="link-style">Sell</Link>
                {/* <NavLink as={Link} to="/">
                  Rent
                </NavLink>
                <NavLink as={Link} to="/buy">
                  Buy
                </NavLink>
                <NavLink as={Link} to="/Sell">
                  Sell
                </NavLink> */}
                <NavDropdown title="Manange Property">
                  <NavDropdown.Item>1</NavDropdown.Item>
                  <NavDropdown.Item>2</NavDropdown.Item>
                  <NavDropdown.Item>3</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Resources">
                  <NavDropdown.Item>1</NavDropdown.Item>
                  <NavDropdown.Item>2</NavDropdown.Item>
                  <NavDropdown.Item>3</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>

        <div className="navbar-login-items">
          <button className="login-button button2" type="button">
            Login
          </button>
          <button className="signup-button button2" type="button">
            Sign up
          </button>
        </div>
      </div>
    );
  }
}

export default NavBar;
