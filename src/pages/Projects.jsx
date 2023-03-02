import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const Projects = ({ getProjects, projects }) => {

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row project">
            <div className="d-flex align-items-center justify-content-between project-head">
              <h3 className="mt-4 project-title">Project</h3>
              <form>
                <input
                  type="text"
                  placeholder="Search Projects..."
                  className="search-project"
                />
                <input type="submit" value="Search" className="project-btn" />
              </form>
            </div>
            <hr className="mt-4" />
          </div>
          <div className="row project">
            <div className="d-flex align-items-center justify-content-between project-head">
              <p className="mt-4">Showing {projects.length} of {projects.length} results</p>
              <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Default Sorting
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Sort by popularity
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sort by latest
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sort by price: low to high
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sort by price: high to low
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="mt-3" />
          </div>
          <div className="row mt-5">
            {projects.map((project, index) => {
              return (
                <div className="col-lg-4 mb-5" key={index}>
                  <Link to={`/project/${project.name.stringValue.replaceAll(" ", "-")}/`} className="topic-name">
                    {project.name.stringValue}
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

export default Projects;
