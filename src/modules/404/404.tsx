//libraries imports
import React, { FC } from "react";
import { useHistory } from "react-router-dom";

//local imports
import { Wrapper } from "./styles";
import { Helper, Button } from "../../commons";
import { Compass } from "../../images";

const ErrorPage: FC = () => {
  let history = useHistory();
  return (
    <Wrapper>
      <Helper
        title="هل أنت تائه؟"
        message="إضغط على الزر الذي في الأسفل للعودة إلى الصفحة التي كنت فيها."
      >
        <Compass />
      </Helper>
      <Button label="عد" onClick={() => history.push("/plans")} />
    </Wrapper>
  );
};

export default ErrorPage;
