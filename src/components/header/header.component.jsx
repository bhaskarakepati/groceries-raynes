import React from "react";
import "./header.styles.scss";
import { connect } from "react-redux";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  InputGroup,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { FaSearch, FaCartPlus, FaPoundSign } from "react-icons/fa";
import { filterDrinks } from "../../reducers/drinks/drinks.actions";

class Header extends React.Component {
  constructor() {
    super();
    this.filterList = this.filterList.bind(this);
  }

  filterList(e) {
    this.props.filterDrinks(e.target.value);
  }

  render() {
    const { name } = this.props.loginUser;
    return (
      <header className="app-header">
        <div className="head-name">
          <Navbar expand="lg" className="bg-color">
            <Navbar.Brand href="/categories">Groceries </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form inline>
                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                  Search
                </Form.Label>
                <InputGroup className="mb-2">
                  <FormControl
                    id="searchProducts"
                    placeholder="Search Products.."
                  />
                  <InputGroup.Append>
                    <Button variant="warning">
                      <FaSearch />
                    </Button>
                  </InputGroup.Append>
                </InputGroup>

                <Nav className="mr-auto">
                  <Nav.Link href="/login" className="login-btn">
                    <p>
                      <b>{name ? `Welcome ${name}` : "Login/Register"}</b>
                    </p>
                  </Nav.Link>
                  <ToggleButtonGroup type="checkbox">
                    <ToggleButton value={1} variant="warning">
                      <FaCartPlus /> 20
                    </ToggleButton>
                    <ToggleButton value={2} variant="lite">
                      <FaPoundSign /> 20.00
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Nav>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <div className="head_search text-center">
            <input
              type="text"
              placeholder="Search drinks in selected Category.."
              onChange={this.filterList}
              className="border"
            />
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    drinks: state.drinks,
    categories: state.categories,
    loginUser: state.loginUser.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  filterDrinks: (searchTerm) => dispatch(filterDrinks(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
