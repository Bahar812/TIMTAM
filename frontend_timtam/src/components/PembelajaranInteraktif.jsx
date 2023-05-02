import React from "react";
import VideoPlayer from "./VideoPlayer";
import "../components/PembelajaranInteraktif.css";

const PembelajaranInteraktif = () => {
  return (
    <div className="pembelajaran-container">
      <div className="videoplayer-cards">
        <VideoPlayer src="https://example.com/my-video.mp4" type="video/mp4" />
        <div className="pembelajaran-videos-outer">
          <div className="pembelajaran-videos-container">
            <div className="pembelajaran-video-card">
              <img
                src="https://i.pinimg.com/236x/4d/19/bd/4d19bd884069d557389fe39bc3a420a4.jpg"
                alt="thumbnail"
              />
              <div className="pembelajaran-video-details">
                <h1>Cara Mengatasi Kecemasan dan Anxiety Secara Alami</h1>
                <p>7:47</p>
              </div>
            </div>
            <div className="pembelajaran-video-card">
              <img src="" alt="thumbnail" />
              <div className="pembelajaran-video-details">
                <h1>Cara Mengatasi Kecemasan dan Anxiety Secara Alami</h1>
                <p>23:55</p>
              </div>
            </div>
            <div className="pembelajaran-video-card">
              <img src="" alt="thumbnail" />
              <div className="pembelajaran-video-details">
                <h1>Cara Mengatasi Kecemasan dan Anxiety Secara Alami</h1>
                <p>12:09</p>
              </div>
            </div>
            <div className="pembelajaran-video-card">
              <img src="" alt="thumbnail" />
              <div className="pembelajaran-video-details">
                <h1>Cara Mengatasi Kecemasan dan Anxiety Secara Alami</h1>
                <p>10:28</p>
              </div>
            </div>
            <div className="pembelajaran-video-card">
              <img src="" alt="thumbnail" />
              <div className="pembelajaran-video-details">
                <h1>Cara Mengatasi Kecemasan dan Anxiety Secara Alami</h1>
                <p>12:46</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PembelajaranInteraktif;
