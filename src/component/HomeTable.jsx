import React from "react";
import { Link } from "react-router-dom";

const HomeTable = ({availableCategory}) => {
  return (
    <div className="row mt-5 topic-table">
      <table className="table table-bordered">
        <tbody>
          {availableCategory.map((cat, index) => {
            return (
              <tr key={index}>
                <td width="80px">{index + 1}</td>
                <td>
                  <Link
                    to={`/project-category/${cat.replaceAll(" ", "-")}/`}
                    className="topic-link"
                  >
                    {cat}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="col-lg-3 mx-auto mt-5 mb-5">
        <Link to="/projects">
          <button className="btn btn-dark project-btn">See All Project</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeTable;
