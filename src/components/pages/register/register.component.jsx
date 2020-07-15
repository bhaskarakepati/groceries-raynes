import React from "react";

import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { FaLock, FaUser } from "react-icons/fa";
import "./register.styles.scss";
import { registerUser } from "../../../reducers/register/register.actions";
import { connect } from "react-redux";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onRegister = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.registerUser(this.state);
  };
  render() {
    const { name, email, password } = this.state;
    const { user, errors } = this.props;
    console.log(user.errors);
    return (
      <div className="register-container">
        <ul>
          {errors &&
            errors.map((error) => (
              <li className="error-message">{error.msg}</li>
            ))}
          {user && user.msg && <li className="success-message">{user.msg}</li>}
        </ul>
        <Form onSubmit={this.onRegister}>
          <Form.Group>
            <Form.Label htmlFor="register-name" srOnly>
              Full name
            </Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FaUser />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="register-name"
                placeholder="Full name"
                name="name"
                value={name}
                onChange={this.changeHandler}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="register-email" srOnly>
              Email address
            </Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <b>@</b>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="register-email"
                placeholder="Email adress"
                name="email"
                value={email}
                onChange={this.changeHandler}
              />
            </InputGroup>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="register-password" srOnly>
              Password
            </Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FaLock />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="register-password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.changeHandler}
              />
            </InputGroup>
          </Form.Group>
          <div className="singup-button-container">
            <Button variant="warning" type="submit">
              Signup
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    errors: state.user.errors,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (user) => dispatch(registerUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
