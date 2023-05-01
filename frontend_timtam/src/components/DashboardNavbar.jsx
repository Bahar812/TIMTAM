import React from "react";
import notif from "../../assets/icons/notif.png";
import dropdown from "../../assets/icons/dropdown.png";
import "../components/DashboardNavbar.css";

const DashboardNavbar = () => {
  return (
    <div className="dashnav_outer">
      <div className="dashboard_navbar_container">
        <div className="dashnav_search">
          <input placeholder="Search..." type="text" name="search" className="search_input" />
        </div>
        <div className="notif_profile">
          <img src={notif} alt="notification" />
          <div className="dashnav_profile">
            <img src="https://i.pinimg.com/236x/bf/29/da/bf29da2d6abc3f9495bfd8db9e66efb2.jpg" alt="Amanda" />
            <p>Amanda P</p>
            <img src={dropdown} alt="Menu" className="dashnav_dropdown" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
