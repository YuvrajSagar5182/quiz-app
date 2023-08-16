import React from "react";
import { Oval } from "react-loader-spinner";
const LoadingComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        fontSize: "bold",
        zIndex: 1,
      }}>
      <Oval color="#00BFFF" height={40} width={40} />
      <p style={{ marginLeft: "10px", color: "red", fontSize: "bold" }}>
        Fetching Questions...
      </p>
    </div>
  );
};

export default LoadingComponent;
