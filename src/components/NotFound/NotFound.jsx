import React from "react";
import error from "@assets/images/icons/error.svg";
import "@components/NotFound/notFound.scss";

const NotFound = ({ text }) => {
  return (
    <div className="not-found">
      <p>{text}</p>
      <img src={error} alt="Error" />
    </div>
  );
};

export default NotFound;
