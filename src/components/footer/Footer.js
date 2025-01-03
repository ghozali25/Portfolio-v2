import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

export default function Footer(props) {
  const currentYear = new Date().getFullYear(); // Mengambil tahun berjalan

  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          {/*greeting.title8*/}© {currentYear} All rights reserved.
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
