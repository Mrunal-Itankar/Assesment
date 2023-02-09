import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Person, Key } from "react-ionicons";
import Img2 from "../Images/login.webp";


async function loginUser(credentials) {
  return fetch('http://localhost:3001/loginapi', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
const Login = ({ setToken }) => {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <div>
      <div className="row">
        <div className="col-6 my-5">
          <h2>Login</h2>
          <form className="row my-4" name="userLogin" onSubmit={handleSubmit}>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <Person />
                </span>
              </div>
              <input type="text" className="form-control" placeholder="User Name"
              onChange={e =>setUserName(e.target.value)}
              />
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <Key/>
                </span>
              </div>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
         
            <div className="text-center">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </form>
        </div>
        <div className="col-6">
          <img src={Img2} alt="Login" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Login;
