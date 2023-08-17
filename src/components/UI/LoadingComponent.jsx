import React from "react";
import { ThreeDots } from "react-loader-spinner";

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
      <ThreeDots color="#0086b3" height={50} width={50} />
    </div>
  );
};

export default LoadingComponent;
