import React, { useEffect, useState } from 'react'
import { auth } from '../FIREBASE_CONFIG'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';

const Navbar = (props) => {
  const [authUser, setAuthUser] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleSignOut = () => {
    // Perform sign out logic here
    signOut(auth).then(() => {
      console.log("Logout Completed")
      navigate("/login")
    }).catch(error => console.log(error));
    handleClose();
  };


  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    });
    return () => {
      listen();
    }
  }, [])

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-fixed">
          <div className="container">
            <Link className="navbar-brand" to="/">
              ProjectHub
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/projects">
                    Project Topic
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/categories">
                    Categories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/payment">
                    Payment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  {authUser ? <Link className="nav-link" aria-current="page" onClick={handleShow}>
                    Logout
                  </Link> : <Link className="nav-link" aria-current="page" to="/login">
                    Login
                  </Link>}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Log Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSignOut}>
            Log Out
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;
