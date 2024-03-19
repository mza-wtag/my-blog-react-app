import React from "react";
import { Oval } from "react-loader-spinner";
import "@components/Loader/loader.scss";

export const Loader = () => {
  return (
    <div className="loader-container" data-testid="loader-component">
      <Oval />
    </div>
  );
};
