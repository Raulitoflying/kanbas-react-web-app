import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { assignments } from '../../Database';
import './Assignments.css';

export default function AssignmentEditor() {
  const { id } = useParams(); 
  const [assignment, setAssignment] = useState<any>(null);

  useEffect(() => {
    const foundAssignment = assignments.find((a: any) => a._id === id);
    setAssignment(foundAssignment);
  }, [id]);

  if (!assignment) return <div>Loading...</div>;

  const handleChange = (key: string, value: any) => 
    setAssignment({ ...assignment, [key]: value });

  return (
    <div id="wd-assignments-editor">
      {['title', 'description', 'points', 'assignTo', 'dueDate', 'availableFrom', 'availableUntil'].map((field, index) => (
        <div className="form-group" key={index}>
          <label htmlFor={`wd-${field}`}>{field}</label>
          <input 
            id={`wd-${field}`} 
            className="form-control"
            value={assignment[field]} 
            onChange={(e) => handleChange(field, e.target.value)} 
          />
        </div>
      ))}
      <div className="form-group btn-container">
        <Link to={`/Kanbas/Courses/${assignment.course}/Assignments`} className="btn btn-secondary">Cancel</Link>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}