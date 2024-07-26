import React from 'react';
import { useParams } from 'react-router';
import { users, assignments, enrollments, grades } from '../../Database';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFilter, FaFileImport, FaFileExport, FaCog } from 'react-icons/fa';
import './Grades.css';

const Grades = () => {
  const { cid } = useParams<{ cid: string }>();

  const enrolledStudents = enrollments
    .filter(enrollment => enrollment.course === cid)
    .map(enrollment => users.find(user => user._id === enrollment.user))
    .filter((student): student is NonNullable<typeof student> => student !== undefined);

  const courseAssignments = assignments.filter(assignment => assignment.course === cid);

  const ButtonGroup = ({icon, children}: {icon: JSX.Element, children: React.ReactNode}) => (
    <button className="btn btn-secondary">
      {icon} {children}
    </button>
  );

  return (
    <div className="container mt-5" id="wd-grades">
      <div className="d-flex justify-content-between mb-3 align-items-center">
        <h2 className="text-dark">Grades</h2>
        <div>
          <ButtonGroup icon={<FaFileImport />}>Import</ButtonGroup>
          <ButtonGroup icon={<FaFileExport />}>Export</ButtonGroup>
          <ButtonGroup icon={<FaCog />} children={undefined}></ButtonGroup>
        </div>
      </div>
      <ButtonGroup icon={<FaFilter />}>Apply Filters</ButtonGroup>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Student Name</th>
              {courseAssignments.map(assignment => (
                <th key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.map(student => (
              <tr key={student._id}>
                <td className="text-danger">{student.firstName} {student.lastName}</td>
                {courseAssignments.map(assignment => {
                  const grade = grades.find(grade => grade.student === student._id && grade.assignment === assignment._id);
                  return <td key={assignment._id}>{grade ? `${grade.grade}%` : 'N/A'}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grades;