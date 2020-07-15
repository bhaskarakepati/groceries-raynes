import React from "react";

import "./menu.styles.scss";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Menu = (props) => {
  return (
    <div className="menu-container">
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="menu-nav" />
        <Navbar.Collapse id="menu-nav">
          <Navbar>
            <Nav className="mr-auto">
              <NavDropdown title="Fruit & Vegetables" id="fruit-vegetables">
                <NavDropdown.Item href="/fruits-vegetables/fresh-fruit">
                  Fresh Fruits
                </NavDropdown.Item>
                <NavDropdown.Item href="/fruits-vegetables/fresh-vegetable">
                  Fresh Vegetables
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Orgnic</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Fresh Salad
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/productlist">Bakery</Nav.Link>
              <Nav.Link href="#drinks1">Drinks</Nav.Link>
              <Nav.Link href="#drinks2">Beauty & Cosmetics</Nav.Link>
              <Nav.Link href="#drinks3">Frozen</Nav.Link>
            </Nav>
          </Navbar>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;
