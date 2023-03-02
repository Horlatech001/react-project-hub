import React from "react";
import Footer from "../component/Footer";

const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row contact">
            <h3 className="mt-4 contact-title">Contact</h3>
            <hr className="mt-5" />
          </div>
          <div className="row contact-details text-center mt-5 mb-5">
            <p>
              Phone: <b>+2349035537330</b>
            </p>
            <p>
              Whatapp: <b>+2349035537330</b>
            </p>
            <p>
              Email: <b>Oladimejigobir@gmail.com</b>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
