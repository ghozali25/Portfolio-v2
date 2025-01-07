import React, { Component } from "react";

export default class CloudInfraImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        src={require("../../assets/images/undraw_cloud-hosting_tfeh.svg")}
        alt="Cloud Hosting"
        style={{ width: "100%", height: "auto" }}
      />
    );
  }
}
