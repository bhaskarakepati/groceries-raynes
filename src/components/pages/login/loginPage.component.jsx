import React from "react";
import { useForm } from "react-hook-form";

import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { FaLock, FaUser } from "react-icons/fa";
import { loginUser } from "../../../reducers/login/login.actions";
import { connect } from "react-redux";
import "./loginpage.styles.scss";

const LoginPage = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    props.loginUser(data);
  };
  return (
    <div className="login-container">
      <ul>
        {errors.email && (
          <li className="error-message">{errors.email.message}</li>
        )}
        {errors.password && (
          <li className="error-message">{errors.password.message}</li>
        )}
      </ul>
      <ul>
        {props.loginErrors &&
          props.loginErrors.map((error) => (
            <li className="error-message">{error.msg}</li>
          ))}
      </ul>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label htmlFor="login-email" srOnly>
            Email address
          </Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <FaUser />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id="login-email"
              placeholder="Email adress"
              name="email"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
          </InputGroup>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="login-password" srOnly>
            Password
          </Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <FaLock />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id="login-password"
              type="password"
              placeholder="Password"
              name="password"
              ref={register({ required: "Password is required" })}
            />
          </InputGroup>
        </Form.Group>
        <div className="button-container">
          <p>
            Don't have an account?{" "}
            <a href="/register" className="register-link">
              Signup
            </a>
          </p>
          <Button variant="warning" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.loginUser.user,
    loginErrors: state.loginUser.errors,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
