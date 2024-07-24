import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard() {
  const courses = [
    { id: "1234", title: "CS1234 React JS", description: "Full Stack software developer" },
    { id: "1235", title: "CS1235 Angular", description: "Frontend framework by Google" },
    { id: "1236", title: "CS1236 Vue JS", description: "Progressive JavaScript Framework" },
    { id: "1237", title: "CS1237 Node JS", description: "JavaScript runtime built on V8" },
    { id: "1238", title: "CS1238 Python", description: "Python programming language" },
    { id: "1239", title: "CS1239 Java", description: "Java programming language" },
    { id: "1240", title: "CS1240 C#", description: "C# programming language" },
    { id: "1241", title: "CS1241 Shell", description: "Shell programming language" }
  ];

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map(course => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course.id}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark" href={`#/Kanbas/Courses/${course.id}/Home`}>
                  <img src="/images/reactjs.jpg" width="100%" alt={course.title} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">{course.title}</h5>
                    <p className="card-text">{course.description}</p>
                    <button className="btn btn-primary">Go</button>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}