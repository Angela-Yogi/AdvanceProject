import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => (
  <div className="course-card">
    <h3>{course.title}</h3>
    <p>{course.description}</p>
    <Link to={`/courses/${course.id}`} className="btn">View Course</Link>
  </div>
);

export default CourseCard;
