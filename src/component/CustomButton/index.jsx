import React from "react";
import "./styles.scss";

export default function CustomButton(props) {
  const { buttonText, handleSubmit } = props;
  return (
    <div class="button-container" onClick={handleSubmit}>
      <div class="btn effect01">{buttonText}</div>
    </div>
  );
}
