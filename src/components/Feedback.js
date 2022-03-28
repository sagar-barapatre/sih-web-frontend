import React from "react";
import Footer from "./Footer.js";


export default function Feedback() {
  return (
    <div>
      <form>
        <h3>Please provide your Feedback</h3>
        <div className="form-group">
          <label>Rating</label>
          <select className="form-control">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div className="form-group">
          <label>Feedback</label>
          <input
            type="text"
            className="form-control"
            placeholder="Your Feedback"
          />
        </div>
        <br></br>
        <button variant="primary" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
}
