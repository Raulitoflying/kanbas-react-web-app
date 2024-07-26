import React from 'react';
import './Grades.css'; // Import the CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFilter, FaFileImport, FaFileExport, FaCog } from 'react-icons/fa'; // Import the icons
import SearchInputs from './SearchInputs'; // Import the SearchInputs component

const Grades = () => {
  return (
    <div className="container mt-5" id="wd-grades">
      <div className="d-flex justify-content-between mb-3 align-items-center">
        <h2 className="text-dark">Grades</h2>
        <div>
          <button className="btn btn-primary me-2">
            <FaFileImport /> Import
          </button>
          <div className="btn-group">
            <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <FaFileExport /> Export
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Option 1</a></li>
              <li><a className="dropdown-item" href="#">Option 2</a></li>
            </ul>
          </div>
          <button className="btn btn-secondary ms-2">
            <FaCog />
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between mb-3">
        <SearchInputs /> {/* Use the SearchInputs component */}
      </div>
      <button className="btn btn-secondary mb-3">
        <FaFilter /> Apply Filters
      </button>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>A1 SETUP</th>
              <th>A2 HTML</th>
              <th>A3 CSS</th>
              <th>A4 BOOTSTRAP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-danger">Cristiano Ronaldo</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-danger">Lionel Messi</td>
              <td>100%</td>
              <td>100%</td>
              <td><input type="text" className="form-control" value="99.99%" /></td>
              <td>98.99%</td>
            </tr>
            <tr>
              <td className="text-danger">Joe Biden</td>
              <td>100%</td>
              <td>61.22%</td>
              <td>98.07%</td>
              <td>60.00%</td>
            </tr>
            <tr>
              <td className="text-danger">Chibo Cao</td>
              <td>100%</td>
              <td>96.00%</td>
              <td>81.22%</td>
              <td>33.00%</td>
            </tr>
            <tr>
              <td className="text-danger">David Beckham</td>
              <td>99.99%</td>
              <td>99.98%</td>
              <td>99.97%</td>
              <td>99.23%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grades;
