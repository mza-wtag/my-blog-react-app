import React from "react";
import "@components/Loader/loader.scss";
import { Oval } from "react-loader-spinner";
export const Loader = () => {
  return (
    <div className="loader-container">
      <Oval />
    </div>
  );
};
