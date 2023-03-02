import React from "react";
import Footer from "../component/Footer";
const Payment = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row mt-5">
            <p className="">
              Bank Name: <b>Zenith Bank</b>
            </p>
            <p className="">
              Account Name: <b>Project Hub Educationals</b>
            </p>
            <p className="">
              Account Number: <b>1298736712</b>
            </p>
            <h4 className="mt-4">
              <b style={{ fontSize: 28 }}>After Payment, Please email us at </b>
              <span style={{ fontSize: 16 }}>
                projecthubofficial@gmail.com or Message on whatsapp
                +2349035537330
              </span>
            </h4>
            <p className="mt-4">
              Please kindly send a receipt of payment (e.g. payment slip) if
              available.
            </p>
            <ul className="payment-list">
              <li>Depositor’s Full Name</li>
              <li>Date of Payment</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Project Topic</li>
            </ul>
            <b className="mt-4 mb-5" style={{ fontSize: 22 }}>
              Once your payment is confirmed, we will send the complete project
              material to you immediately via email/WhatsApp.
            </b>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
