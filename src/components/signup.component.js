import React, { Component } from "react";
import Footer from "./Footer";
export default class SignUp extends Component {
  render() {
    return (
      <div>
      <form>
        <h3>Sign In as Operator</h3>
        <div className="form-group">
          <label>Aadhaar Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Aadhaar Number"
          />
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary btn-block">
          Sign In
        </button>
        </form>
        <Footer />
      </div>
    );
  }
}
