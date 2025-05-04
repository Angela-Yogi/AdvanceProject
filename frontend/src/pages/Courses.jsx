import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard'; // at the top


const dummyCourses = [
  { id: 1, title: "Intro to Python", description: "Learn Python from scratch." },
  { id: 2, title: "Web Development", description: "Build modern websites." },
  { id: 3, title: "Data Structures", description: "Understand how data works." }
];

const Courses = () => (
  <div className="course-list">
    <h2>Available Courses</h2>
    {dummyCourses.map(course => (
      <div key={course.id} className="course-card">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <Link to={`/courses/${course.id}`} className="btn">View Course</Link>
      </div>
    ))}
  </div>
);

export default Courses;
