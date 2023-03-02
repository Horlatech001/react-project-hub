import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../component/Footer";

const Project = ({ getProjects, projects }) => {

  useEffect(() => {
    getProjects();
  }, []);

  const path = useParams();

  const [projectName, setprojectName] = useState("");

  const [matchedProj, setMatchedProj] = useState({});

  useEffect(() => {
    setprojectName(path.projectName.replaceAll("-", " "));

    let responseProj = {};

    projects.find((element) => {
      if (element.name.stringValue.trim().toLowerCase() === projectName.trim().toLowerCase()) {
        responseProj = element;
      }
      console.log(element);
    });

    setMatchedProj(responseProj);

  }, [path, projectName, projects]);




  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="project-head pt-5">
              <h4> {projectName} </h4>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-9" style={{ borderRight: "1px solid grey", borderTop: "1px solid grey", }}>
              <div>
                <p className="mt-4" style={{ fontSize: 14 }}>
                  Download the complete Accounting project topic and material
                  (chapter 1-5) titled {projectName} here on
                  ProjectHub. See below for the abstract, table of contents, list
                  of figures, list of tables, list of appendices, list of
                  abbreviations and chapter one. Click the DOWNLOAD NOW button to
                  get the complete project work instantly.
                </p>
                <b>The Project File Details</b>
                <ul>
                  <li>Name: {matchedProj.name?.stringValue}</li>
                  <li>Type: {matchedProj.type?.stringValue}</li>
                  <li>Size: [{matchedProj.size?.stringValue}]</li>
                  <li>Length: [{matchedProj.pages?.stringValue}] pages</li>
                </ul>
                <p className="mt-4">ABSTRACT<br />{matchedProj.abstract?.stringValue}</p>
                <p className="mt-4">Content<br />{matchedProj.content?.stringValue}</p>
              </div>
            </div>
            <div className="col-lg-3" style={{ borderTop: "1px solid grey" }}>
              <p className="mt-4" style={{ fontSize: 13 }}>
                Download the complete Accounting project topic and material
                (chapter 1-5) titled {projectName} here on
                ProjectHub. See below for the abstract, table of contents, list
                of figures, list of tables, list of appendices, list of
                abbreviations and chapter one. Click the DOWNLOAD NOW button to
                get the complete project work instantly.
              </p>

              <p>#3,000.00</p>
              <Link to={`/checkout/${projectName.replaceAll(" ", "-")}/`}>
                <button className="btn btn-primary rounded-4">Buy now</button>
              </Link>

            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Project;
