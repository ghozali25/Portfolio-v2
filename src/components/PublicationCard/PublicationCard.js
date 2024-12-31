import React from "react";
import "./DashboardCard.css";
import { Fade } from "react-reveal";

export default function DashboardCard({ dashboard, theme }) {
  function openDashboardinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div
      className="dashboard-card-div"
      style={{ backgroundColor: theme.highlight }}
    >
      <Fade bottom duration={2000} distance="40px">
        <div
          key={dashboard.id}
          onClick={() => openDashboardinNewTab(dashboard.url)}
        >
          <div className="dashboard-name-div">
            <p className="dashboard-name" style={{ color: theme.text }}>
              {dashboard.name}
            </p>
          </div>
          <p className="dashboard-description" style={{ color: theme.text }}>
            {dashboard.description}
          </p>
          <div className="dashboard-details">
            <p
              className="dashboard-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              Created on {dashboard.createdAt.split("T")[0]}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
