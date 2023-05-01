import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Dashboard.css";
import DashboardNavbar from "../components/DashboardNavbar";

import { IoNewspaperOutline } from "react-icons/io5";
import { IoIosBookmarks } from "react-icons/io";
import { SlNotebook } from "react-icons/sl";
import { ImStatsBars } from "react-icons/im";
import { IoGameController } from "react-icons/io5";
import { MdGroups2 } from "react-icons/md";
import { BsPersonCheck } from "react-icons/bs";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState("jurnal");

  const handleClick = (page) => {
    setCurrentPage(page);
    console.log("current page : ", currentPage);
  };

  return (
    <div>
      <div className="dashboard_container">
        <div className="dashboard_nav_container">
          <div className="dash-icon">
            <IoNewspaperOutline
              onClick={() => handleClick("test-screening")}
              className={currentPage === "test-screening" ? "active" : ""}
            />
          </div>
          <div className="dash-icon">
            <IoIosBookmarks
              onClick={() => handleClick("pembelajaran-interaktif")}
              className={
                currentPage === "pembelajaran-interaktif" ? "active" : ""
              }
            />
          </div>
          <div className="dash-icon">
            <SlNotebook
              onClick={() => handleClick("jurnal")}
              className={currentPage === "jurnal" ? "active" : ""}
            />
          </div>
          <div className="dash-icon">
            <ImStatsBars
              onClick={() => handleClick("stats")}
              className={currentPage === "stats" ? "active" : ""}
            />
          </div>
          <div className="dash-icon">
            <Link to="/game" className="dash-icon-link">
              <IoGameController
                onClick={() => handleClick("game")}
                className={currentPage === "game" ? "active" : ""}
              />
            </Link>
          </div>
          <div className="dash-icon">
            <MdGroups2
              onClick={() => handleClick("community")}
              className={currentPage === "community" ? "active" : ""}
            />
          </div>
          <div className="dash-icon">
            <BsPersonCheck
              onClick={() => handleClick("chat")}
              className={currentPage === "chat" ? "active" : ""}
            />
          </div>
        </div>

        <div className="dash_content">
          <DashboardNavbar />
          <div
            className={
              currentPage === "test-screening" ? "test-screening" : "hidden"
            }
          >
            <div className="test-screening-content">
              <div className="test-screening-progress-bar">
                <div className="test-screening-inner-bar"></div>
              </div>

              <div className="test-screening-question-box"></div>
            </div>
          </div>
          <div
            className={
              currentPage === "pembelajaran-interaktif"
                ? "pembelajaran-interaktif"
                : "hidden"
            }
          >
            <h1>PEMBELAJARAN INTERAKTIF</h1>
          </div>
          <div className={currentPage === "jurnal" ? "jurnal" : "hidden"}>
            <h1>JURNAL</h1>
          </div>
          <div className={currentPage === "stats" ? "stats" : "hidden"}>
            <h1>STATS</h1>
          </div>
          <div className={currentPage === "game" ? "game" : "hidden"}>
            <h1>GAME</h1>
          </div>
          <div className={currentPage === "community" ? "community" : "hidden"}>
            <h1>COMMUNITY</h1>
          </div>
          <div className={currentPage === "chat" ? "chat" : "hidden"}>
            <h1>CHAT</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
