import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer'; // top of file
import Quiz from '../components/Quiz';


const CourseDetail = () => {
  const { id } = useParams();

  // You'd fetch course detail using this ID
  return (
    <div className="course-detail">
      <h2>Course #{id} Details</h2>
      <video width="600" controls>
        <source src="/sample-video.mp4" type="video/mp4" />
        Your browser does not support video playback.
      </video>

      <div className="quiz">
        <h3>Quiz: What is 2 + 2?</h3>
        <input type="text" id="answer" />
        <button onClick={() => {
          const val = document.getElementById("answer").value;
          alert(val == "4" ? "Correct!" : "Try again.");
        }}>Submit</button>
      </div>
    </div>
  );
};

export default CourseDetail;
