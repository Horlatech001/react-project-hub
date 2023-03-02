import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../db/projects";
import Footer from "../component/Footer";

const ProjectCategory = ({ getProjects, projects }) => {
  useEffect(() => {
    getProjects();
  }, []);
  // const location = useLocation();
  const path = useParams();
  // const params = location.pathname.split("/")[2];
  const [catName, setCatName] = useState("");

  const [matchedProj, setmatchedProj] = useState([]);

  useEffect(() => {
    // setCatName(params.replaceAll("-"," "));
    setCatName(path.catName.replaceAll("-", " "));

    const responseProj = [];

    projects.filter((element) => {
      if (element.category.stringValue.trim().toLowerCase() === catName.trim().toLowerCase()) {
        responseProj.push(element);
      }
    });

    setmatchedProj(responseProj);
  }, [path, catName]);

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row project">
            <div className="project-head pt-5">
              <h4>{catName}</h4>
            </div>
            <hr className="mt-4" />
          </div>
          <div className="row project">
            <div className="d-flex align-items-center justify-content-between project-head">
              <p className="mt-4">Showing all {matchedProj.length} results</p>
              <div className="dropdown">
                <a
                  className="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
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
            {matchedProj.map((project, index) => {
              return (
                <div className="col-lg-4 mb-5" key={index}>
                  <Link to={`/project/${project["name"].stringValue.replaceAll(" ", "-")}/`} className="topic-name">
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

export default ProjectCategory;
