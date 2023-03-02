import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid  footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 footer-col">
            <h3 className="mt-4 footer-title mb-4">Quick Links</h3>
            <ul className="footer-list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Project Topic</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Payment</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 footer-col">
            <h3 className="mt-4 footer-title mb-4">Categories</h3>
            <ul className="footer-list">
              <li>
                <a href="#">Research</a>
              </li>
              <li>
                <a href="#">Tips</a>
              </li>
              <li>
                <a href="#">Schools</a>
              </li>
              <li>
                <a href="#">Universities</a>
              </li>
              <li>
                <a href="#">Post UTME</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4">
            <h3 className="mt-4 footer-title mb-4 mx-3">Contact Information</h3>
            <p className="mx-3 mb-4">
              Office Address: <b>Ilorin, Kwara State, Nigeria</b>
            </p>
            <p className="mx-3 mb-4">
              Phone Number: <b>09035537330</b>
            </p>
            <p className="mx-3">
              Email: <b>Oladimejigobir@gmail.com</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
