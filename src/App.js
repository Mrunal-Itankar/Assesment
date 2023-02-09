import React ,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Signup from "./components/signup";
import Login from "./components/login";
import Homepage from "./components/homepage";

const App = () => {
  const [token, setToken] = useState();
  
  return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<Homepage />}
            ></Route>

            <Route exact path="/signup" element={<Signup />}></Route>

            <Route exact path="/login" element={<Login setToken={setToken}/>}></Route>
          </Routes>
        </div>
      </Router>
  );
};

export default App;
