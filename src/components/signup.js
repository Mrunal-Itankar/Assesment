import React  from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Person, Mail, Keypad, Key } from "react-ionicons";
import Img1 from "../Images/signup.png";

const Signup = () => {


  return (
    <div>
      <div className="row">
        <div className="col-6 my-5">
          <h2>Sign Up</h2>
          <form className="row my-4" name="userSignup">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <Person />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                name="user_name"
                id="user_name"
                // value={user.user_name}
                // onChange={handleInputs}
              />
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <Mail />
                </span>
              </div>
              <input
                className="form-control"
                type="email"
                placeholder="Your Email"
                name="user_email"
                id="user_email"
                // value={user.user_email}
                // onChange={handleInputs}
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <Keypad />
                </span>
              </div>
              <input
                className="form-control"
                type="password"
                placeholder="Enter Contact Number"
                name="user_contact"
                id="user_contact"
                // value={user.user_contact}
                // onChange={handleInputs}
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <Key />
                </span>
              </div>
              <input
                className="form-control"
                type="password"
                placeholder="Enter password"
                name="user_password"
                id="user_password"
                // value={user.user_password}
                // onChange={handleInputs}
              />
            </div>

            <div className="col-12 mb-3" id="formAgreement">
              <Form.Check
                type="checkbox"
                label="I agree all statements in Terms of service"
              />
            </div>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Register
              </Button>
            </div>
          </form>

          <p>
            Aleady have an account?
            <a href="./login.js">Log in here</a>
          </p>
        </div>
        <div className="col-6">
          <img src={Img1} alt="Signup" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
