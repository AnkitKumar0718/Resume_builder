import { Container } from "@mui/system";
import React from "react";
import "../Styles/ExperienceTemp.css";

const ExperienceTemp = (props) => {
  return (
    <Container className="experience-temp">
      <li className="experience-temp">
        <h3 className="experience-heading">
          {props.experience.jobTitle}{" "}
          <span className="experience-org-name">
            {props.experience.organizationName}
          </span>
          <span className="experience-start-end">
            ({props.experience.startYear} - {props.experience.endYear})
          </span>
        </h3>
      </li>
    </Container>
  );
};

export default ExperienceTemp;