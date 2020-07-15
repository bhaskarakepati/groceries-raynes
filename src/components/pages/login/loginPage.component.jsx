import React from "react";

import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { FaLock, FaUser } from "react-icons/fa";
import "./loginpage.styles.scss";

const LoginPage = (props) => {
  return (
    <div className="login-container">
      <Form>
        <Form.Group controlId="loginEmail">
          <Form.Label for="login-email" srOnly>
            Email address
          </Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <FaUser />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="login-email" placeholder="Email adress" />
          </InputGroup>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="loginPassword">
          <Form.Label for="login-password" srOnly>
            Password
          </Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <FaLock />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="login-password" placeholder="Password" />
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

export default LoginPage;
