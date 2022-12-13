import React from "react";
import { Link } from "react-router-dom";
import { ContainerAlternative } from "./style";

export const AlternativeLogin = () => {
  return (
    <Link to="/">
      <ContainerAlternative>
        <div className="top-alter">
          <p className="line" />
          <p>ou logar com</p>
          <p className="line" />
        </div>
      </ContainerAlternative>
    </Link>
  );
};
