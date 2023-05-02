import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Dashboard.css";
import DashboardNavbar from "../components/DashboardNavbar";
import Navbar from "../components/Navbar";

import { IoNewspaperOutline } from "react-icons/io5";
import { IoIosBookmarks } from "react-icons/io";
import { SlNotebook } from "react-icons/sl";
import { ImStatsBars } from "react-icons/im";
import { IoGameController } from "react-icons/io5";
import { MdGroups2 } from "react-icons/md";
import { BsPersonCheck } from "react-icons/bs";

import TestScreening from "../components/TestScreening";
import PembelajaranInteraktif from "../components/PembelajaranInteraktif";
import Jurnal from "../components/Jurnal";
import Stats from "../components/Stats";
import Community from "../components/Community";
import Chat from "../components/Chat";

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

        <div className="dash_content_container">
          <DashboardNavbar />
          <div
            className={currentPage === "test-screening" ? "shown" : "hidden"}
          >
            <div className="dash-content">
              <TestScreening />
            </div>
          </div>
          <div
            className={
              currentPage === "pembelajaran-interaktif" ? "shown" : "hidden"
            }
          >
            <div className="dash-content">
              <PembelajaranInteraktif />
            </div>
          </div>
          <div className={currentPage === "jurnal" ? "shown" : "hidden"}>
            <div className="dash-content">
              <Jurnal />
            </div>
          </div>
          <div className={currentPage === "stats" ? "shown" : "hidden"}>
            <div className="dash-content">
              <Stats />
            </div>
          </div>
          <div className={currentPage === "game" ? "shown" : "hidden"}>
            <div className="dash-content">
              <PembelajaranInteraktif />
            </div>
          </div>
          <div className={currentPage === "community" ? "shown" : "hidden"}>
            <div className="dash-content">
              <Community />
            </div>
          </div>
          <div className={currentPage === "chat" ? "shown" : "hidden"}>
            <div className="dash-content">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
