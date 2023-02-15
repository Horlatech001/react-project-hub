import React from "react";

const HomeTable = () => {
  return (
    <div className="row mt-5">
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td width="80px">1</td>
            <td>
              <a href="#" className="topic-link">
                ACCOUNTING EDUCATION PROJECT TOPICS
              </a>
            </td>
          </tr>
          <tr>
            <td width="80px">2</td>
            <td>
              <a href="#" className="topic-link">
                ACCOUNTING PROJECT TOPICS (Free Accounting Projects PDF)
              </a>
            </td>
          </tr>
          <tr>
            <td width="80px">3</td>
            <td>
              <a href="#" className="topic-link">
                ACTUARIAL SCIENCE PROJECT TOPICS
              </a>
            </td>
          </tr>
          <tr>
            <td width="80px">4</td>
            <td>
              <a href="#" className="topic-link">
                ADULT EDUCATION PROJECT TOPICS
              </a>
            </td>
          </tr>
          <tr>
            <td width="80px">5</td>
            <td>
              <a href="#" className="topic-link">
                AFRICAN LANGUAGES PROJECT TOPICS
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="col-lg-3 mx-auto mt-5">
        <button className="btn btn-info">See All Project</button>
      </div>
    </div>
  );
};

export default HomeTable;
