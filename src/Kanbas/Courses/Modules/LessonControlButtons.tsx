import React from 'react';
import { FaTrash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteAssignment } from '../Assignments/reducer';
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

interface LessonControlButtonsProps {
  assignmentId: string;
  assignmentTitle: string;
}

export default function LessonControlButtons({ assignmentId, assignmentTitle }: LessonControlButtonsProps) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this assignment?')) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" onClick={handleDelete} />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  )
}

