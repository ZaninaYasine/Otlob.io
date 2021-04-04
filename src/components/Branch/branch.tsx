//libraries imports
import React, { FC } from "react";

//local imports
import { Wrapper } from "./styles";

type BranchType = {
  onNavigate: (value: string) => void;
  name: any;
  description: any;
  logo: string;
  slug: string;
  status: string;
};

const Branch: FC<BranchType> = ({
  onNavigate,
  name,
  description,
  logo,
  slug,
  status,
}) => {
  return (
    <Wrapper onClick={() => onNavigate(slug)}>
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <div className={status + " badge"}></div>
      </div>
      <div className="branch-info">
        <label>{name}</label>
        <span>{description}</span>
      </div>
    </Wrapper>
  );
};

export default Branch;
