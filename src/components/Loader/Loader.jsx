import React from "react";
import "./Loader.scss";
import { Hourglass } from "react-loader-spinner";
export const Loader = () => {
  return (
    <div className="loader-container">
      <Hourglass />
    </div>
  );
};
