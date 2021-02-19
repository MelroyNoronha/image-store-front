import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../../../assets/lotties/loader.json";
import styles from "./index.module.css";

class Loader extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div className={styles.loader}>
        <Lottie options={defaultOptions} height={100} width={100} />
      </div>
    );
  }
}

export default Loader;
