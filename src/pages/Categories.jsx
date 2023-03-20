import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const Categories = ({ getProjects, projects }) => {

  const [availableCategory, setAvailableCategory] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    let cats = [];

    if (projects != null || projects != undefined) {
      projects.filter((pro) => {
        cats.push(pro.category.stringValue);
        console.log(cats);
        let uniqueCats = [...new Set(cats)]
        setAvailableCategory(uniqueCats);
      });
    }
  }, [projects])
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row project">
            <h3 className="mt-4 project-title">Category</h3>
            <hr className="mt-4" />
          </div>
          <div className="row mt-5">
            {availableCategory.map((cat, index) => {
              return (
                <div className="col-lg-4 mb-5" key={index}>
                  <Link to={`/project-category/${cat.replaceAll(" ", "-")}/`} className="topic-name">
                    {cat}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Categories;
