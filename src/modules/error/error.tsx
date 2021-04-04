//libraries imports
import React, { FC } from "react";
import { useHistory } from "react-router-dom";

//local imports
import { Wrapper } from "./styles";
import { Helper, Button } from "../../commons";
import { Error } from "../../images";

const ErrorConnection: FC = () => {
  let history = useHistory();
  return (
    <Wrapper>
      <Helper
        title="حصل خطأ في الإتصال!"
        message=".لقد حصل خطأ ما عند الإتصال بالخوادم، الرجاء إعادة تحديث الصفحة"
      >
        <Error />
      </Helper>
      <Button label="تحديث الصفحة" onClick={() => history.goBack()} />
    </Wrapper>
  );
};

export default ErrorConnection;
