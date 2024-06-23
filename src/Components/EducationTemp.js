import React from "react";
import "../Styles/EducationTemp.css";

const EducationTemp = (props) => {
  return (
    <h3 className="education-temp-details">
      {props.education.degree} in {props.education.domain}{" "}
      
      <span className="education-temp-university">
        {props.education.university}
      </span>
      
      <span className="education-start-end">
        ({props.education.startYear} - {props.education.endYear})
      </span>
    </h3>
  );
};

export default EducationTemp;