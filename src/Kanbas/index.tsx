import React from "react";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import Account from "./Account";
import { Navigate, Route, Routes } from "react-router";
import "./styles.css";
import * as client from "./Courses/client";
import {useEffect, useState} from "react";
import store from "./store";
import {Provider} from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import Session from "./Account/Session";
export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);

  const fetchCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  const[course, setCourse] = useState<any>({
    _id:"0", name: "New Course", number: "New Number", 
    startDate: "2023-9-10", endDate: "2023-12-15",
    imageUrl: "/images/course1.png", 
    description:"New Description"
  });
  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([...courses, newCourse]);
  };
  const deleteCourse = async (courseId: any) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <Provider store={store}>
      <Session>
        <div id="wd-kanbas" className="h-100">
          <div className="d-flex h-100">
            <div className="d-none d-md-block">
              <KanbasNavigation />
            </div>
            <div className="flex-fill flex-fill p-3 p-md-4 p-lg-5">
              <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account/*" element={<Account />} />
                <Route path="Dashboard" element={
                  <ProtectedRoute>
                    <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse} 
                  /></ProtectedRoute>} />
                <Route path="Courses/:cid/*" element={
                  <ProtectedRoute>
                    <Courses courses={courses}/>
                  </ProtectedRoute>} />
                <Route path="Calendar" element={<h1>Calendar</h1>} />
                <Route path="Inbox" element={<h1>Inbox</h1>} />
              </Routes>
            </div>
          </div>
        </div>
      </Session>
    </Provider>
    
  );
}
