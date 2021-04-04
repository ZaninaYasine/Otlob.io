//libraries imports
import React, { FC, ReactNode, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import moment from "moment";

//local imports
import { Wrapper, Card, Icon } from "./styles";
import { Bag, Dollar, Calendar, Place, Close, Info } from "../../images/icons";
import { device } from "../../utils/utils";

type HeaderType = {
  home?: boolean;
  title?: string;
  subtitle?: string;
  status?: number;
  tax?: string;
  branch?: string;
  open?: string;
  close?: string;
  available?: number;
  orders?: string;
  children?: ReactNode;
};

const Header: FC<HeaderType> = ({
  home,
  title,
  subtitle,
  status,
  tax,
  branch,
  open,
  close,
  available,
  orders,
  children,
}) => {
  let history = useHistory();
  let { restaurant, branchname } = useParams();
  //states
  const [openInfo, setOpenInfo] = useState<boolean>(false);

  //function
  const handleAction = () => {
    if (openInfo) {
      setOpenInfo(false);
    } else {
      history.push({ pathname: "/cart", state: { restaurant, branchname } });
    }
  };

  const getStatus = (status: number) => {
    let format = "hh:mm:ss";
    let beforeTime = moment(open, format);
    let afterTime = moment(close, format);
    if (moment().isBetween(beforeTime, afterTime) || open === close) {
      if (status === 1) {
        return { text: "مشغول", style: "busy" };
      } else {
        return { text: "مفتوح حاليا", style: "open" };
      }
    } else {
      return { text: "مغلق حاليا", style: "closed" };
    }
  };

  return (
    <Wrapper info={openInfo} available={available || 0} padding={device()}>
      {title && subtitle && (
        <div>
          <div className={(openInfo ? "open" : "") + " card"}>
            <div className="header-container">
              <div
                className="logo-container"
                onClick={() => {
                  if (!home) {
                    setOpenInfo(!openInfo);
                  }
                }}
              >
                <Place width="20" height="20" />
                {!home && (
                  <div
                    className={"badge status__" + getStatus(status || 0).style}
                  ></div>
                )}
              </div>
              <div
                className="title"
                onClick={() => {
                  if (!home) {
                    setOpenInfo(!openInfo);
                  }
                }}
              >
                <span>{subtitle}</span>
                <h2>{title}</h2>
              </div>
              {!home && (
                <button className="more-btn">
                  <Info
                    width="19"
                    height="19"
                    onClick={() => {
                      if (!home) {
                        setOpenInfo(!openInfo);
                      }
                    }}
                  />
                </button>
              )}
              {available === 1 && !home && (
                <div className="cart-wrapper">
                  {!!orders && (
                    <div
                      className={(openInfo ? "hide-badge" : "") + " cart-badge"}
                    >
                      <label>{orders}</label>
                    </div>
                  )}

                  <button className="cart" onClick={handleAction}>
                    {!openInfo ? (
                      <Bag width="22" height="22" />
                    ) : (
                      <Close width="18" height="18" />
                    )}
                  </button>
                </div>
              )}
            </div>

            <Card className={(openInfo ? "show" : "") + " d1"}>
              <Icon>
                <Place />
              </Icon>
              <label>الفرع</label>
              <div className="sp3">{branch}</div>
            </Card>
            {!!tax && (
              <Card className={(openInfo ? "show" : "") + " d2"}>
                <Icon>
                  <Dollar />
                </Icon>
                <label>الرقم الضريبي</label>
                <div className="sp3">{tax}</div>
              </Card>
            )}
            <Card className={(openInfo ? "show" : "") + " d3"}>
              <Icon>
                <Calendar width="18" height="18" />
              </Icon>
              <label>أوقات العمل</label>
              <div className="work">
                <div>
                  <span>يفتح:</span>&nbsp;
                  <span>{moment(open, "hh:mm:ss").format("h:mma")}</span>
                </div>
                <div>
                  <span>يغلق:</span>&nbsp;
                  <span>{moment(close, "hh:mm:ss").format("h:mma")}</span>
                </div>
              </div>
            </Card>
          </div>
          <label
            className={
              "status__" +
              (openInfo && getStatus(status || 0).style) +
              " status"
            }
          >
            {getStatus(status || 0).text}
          </label>
        </div>
      )}
      {children}
      <div id="blur" className="acrylic"></div>
    </Wrapper>
  );
};

export default Header;
