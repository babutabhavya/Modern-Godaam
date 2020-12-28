import React from "react";
import "./styles.scss";

export default function CustomButton(props) {
  const { buttonText, handleSubmit } = props;
  return (
    <div className="button-container" onClick={handleSubmit}>
      <div className="btn effect01">{buttonText}</div>
    </div>
  );
}
