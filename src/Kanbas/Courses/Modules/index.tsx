import React from 'react';
import './Modules.css'; // Import the CSS file

function ModulesControls() {
  return (
    <div>
      <button>Collapse All</button>
      <button>View Progress</button>
      <button>Publish All</button>
      <button>+ Module</button>
    </div>
  );
}

export default function Modules() {
  return (
    <div id="wd-modules">
      <ModulesControls />
      <br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            Week 1
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              LEARNING OBJECTIVES
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              Introduction to the course
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              Learn what is Web Development
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              LESSON 1
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              LESSON 2
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            Week 2
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              LEARNING OBJECTIVES
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              LESSON 1
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              LESSON 2
            </li>
          </ul>
        </li>
      </ul>

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content list-group rounded-0">
                <li className="wd-content-item list-group-item p-3 ps-1">Introduction to the course</li>
                <li className="wd-content-item list-group-item p-3 ps-1">Learn what is Web Development</li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <span className="wd-title">READING</span>
              <ul className="wd-content list-group rounded-0">
                <li className="wd-content-item list-group-item p-3 ps-1">Full Stack Developer - Chapter 1 - Introduction</li>
                <li className="wd-content-item list-group-item p-3 ps-1">Full Stack Developer - Chapter 2 - Creating User Interfaces</li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content list-group rounded-0">
                <li className="wd-content-item list-group-item p-3 ps-1">Introduction to Web Development</li>
                <li className="wd-content-item list-group-item p-3 ps-1">Creating an HTTP server with Node.js</li>
                <li className="wd-content-item list-group-item p-3 ps-1">Creating a React Application</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            Week 1, Lecture 2 - Formatting User Interfaces with HTML
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content list-group rounded-0">
                <li className="wd-content-item list-group-item p-3 ps-1">Learn how to create user interfaces with HTML</li>
                <li className="wd-content-item list-group-item p-3 ps-1">Deploy the assignment to Netlify</li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content list-group rounded-0">
                <li className="wd-content-item list-group-item p-3 ps-1">Introduction to HTML and the DOM</li>
                <li className="wd-content-item list-group-item p-3 ps-1">Formatting Web content with Headings and</li>
                <li className="wd-content-item list-group-item p-3 ps-1">Formatting content with Lists and Tables</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}