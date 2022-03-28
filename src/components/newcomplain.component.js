import React from "react";
import Footer from "./Footer.js";
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
const current = new Date();
const date = `${current.getDate()}/${
  current.getMonth() + 1
    }/${current.getFullYear()}`;

export default function NewComplain() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
      <form>
        <h3>Register a new complain</h3>
        <div className="form-group">
          <label>Service</label>
          <select className="form-control">
            <option>Mobile Number Update</option>
            <option>Address Update</option>
            <option>Biometrics</option>
            <option>Date of Birth</option>
            <option>Email ID</option>
          </select>
        </div>

        <div className="form-group">
          <label>User ID</label>
          <input
            disabled
            type="text"
            className="form-control"
            placeholder="To be fetched from MongoDB"
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            disabled
            type="text"
            className="form-control"
            placeholder={date}
          />
        </div>
        <br></br>
        <button
          variant="primary"
          onClick={handleShow}
          className="btn btn-primary btn-block"
        >
          Submit
        </button>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
      <Footer/>
    </div>
  );
  }

