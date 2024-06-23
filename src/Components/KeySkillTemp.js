import { Container } from "@mui/system";
import React from "react";
import "../Styles/KeySkillTemp.css";

const KeySkillTemp = (props) => {
  return (
    <Container>
      <li className="skill">{props.skill}</li>
    </Container>
  );
};

export default KeySkillTemp;