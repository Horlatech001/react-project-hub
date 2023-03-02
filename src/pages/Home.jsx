import React, { useEffect, useState } from "react";
import Banner from "../images/banner.jpg";
import Search from "../images/search.png";
import Card from "../images/card.png";
import Download from "../images/download.png";
import HomeTable from "../component/HomeTable";
import Footer from "../component/Footer";

const Home = ({ getProjects, projects }) => {

  const [availableCategory, setAvailableCategory] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    let cats = [];
    if (projects != null || projects != undefined) {
      projects.map((pro) => {
        // console.log(pro.category.stringValue);
        cats.push(pro.category.stringValue);
        let uniqueCats = [...new Set(cats)]
        setAvailableCategory(uniqueCats);
      });
    }
  }, [projects])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 hero">
            <h3 className="text-center hero-text">
              Final Year Research Project Topics and Materials PDF & DOCx
              Complete Download for Undergraduates (BSc, HND, OND, NCE) &
              Postgraduates (PGD, MSc, PhD, MLM)
            </h3>
            <img src={Banner} className="hero-img" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mt-5 mb-4">
            <h3>How ProjectHub Works</h3>
          </div>
        </div>
        <div className="row mt-4 mb-4 works">
          <div className="col-lg-4">
            <img src={Search} width="60px" />
            <h2 className="mt-2">Find Your Project Topic</h2>
            <p>
              Find Your Project Topic – Search from over 15,000 project topics
              and materials. PROJECTS.ng is user-friendly, thus, you can easily
              locate your project material from any page you are.
            </p>
          </div>
          <div className="col-lg-4">
            <img src={Card} width="60px" />
            <h2 className="mt-2">Make Your Payment</h2>
            <p>
              Make Your Payment – You can make your payments on PROJECTS.ng
              online via a debit card/ATM card or through direct bank deposit,
              internet banking or mobile banking transfer.
            </p>
          </div>
          <div className="col-lg-4">
            <img src={Download} width="60px" />
            <h2 className="mt-2">Download Your Project</h2>
            <p>
              Download Your Project – After a successful payment, you can now
              download your project materials instantly on the checkout page.
              You will receive a download link in your mailbox.
            </p>
          </div>
        </div>
        <div className="row list-title">
          <h3 className="text-center mt-5">
            List of Research Project Topics and Materials by Categories
            (Departments/Courses)
          </h3>
        </div>
        <HomeTable availableCategory={availableCategory} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
