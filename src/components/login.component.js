import React, { Component } from "react";
import Footer from "./Footer.js";
export default class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <h3>Sign in as User</h3>
          <div className="form-group">
            <label>Aadhaar Number</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your Aadhaar Number"
            />
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary btn-block">
            Log In
          </button>
        </form>
        <Footer />
      </div>
    );
  }
}
