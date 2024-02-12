import React from "react";
import "@components/NotFound/notFound.scss";
import error from "@assets/images/icons/error.svg";

const NotFound = ({ text }) => {
  return (
    <div className="not-found">
      <p>{text}</p>
      <img src={error} alt="Error" />
    </div>
  );
};

export default NotFound;
