//libraries imports
import React, { FC, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

//local imports
import { getCookie } from "../../utils/utils";
import { getBranchInfo, getOrder } from "../../api";
import { Wrapper, Counter } from "./styles";
import { Button } from "../../commons";
import { Header, Menu } from "../../components";

const Branch: FC = () => {
  let history = useHistory();
  let { restaurant, branchname } = useParams();

  //states
  const [branch, setBranch] = useState<any>();
  const [restaurantInfo, setRestaurantInfo] = useState<any>();
  const [menu, setMenu] = useState<any>();
  const [orders, setOrders] = useState<any>();
  const [totalBill, setTotalBill] = useState<any>();

  //fetch branch data with axios from api
  useEffect(() => {
    getBranchInfo(restaurant, branchname).then((response) => {
      setRestaurantInfo(response.data.data.resturent);
      setBranch(response.data.data.branch);
      setMenu(response.data.data.menus);
    });
  }, [restaurant, branchname]);

  useEffect(() => {
    getOrder(restaurant, branchname, getCookie("token")).then((response) => {
      if (
        response &&
        response.data &&
        response.data.data &&
        response.data.data.order
      ) {
        setOrders(response?.data?.data?.order?.items?.length || 0);
        setTotalBill(response?.data?.data?.order?.total_bill || 0);
      }
    });
  }, [restaurant, branchname]);

  //query categories

  //local variables

  return (
    <Wrapper>
      <Header
        subtitle={branch?.name || ""}
        title={restaurantInfo?.name || ""}
        status={branch?.is_busy}
        tax={restaurantInfo?.tax_number}
        branch={branch?.name || ""}
        open={branch?.open_at || ""}
        close={branch?.close_at || ""}
        available={restaurantInfo && restaurantInfo.available}
        orders={orders}
      />

      {menu &&
        menu?.map((menu: any, index: number) => {
          return (
            <Menu
              key={index}
              menu={menu}
              restaurant={restaurant}
              branch={branchname}
              available={restaurantInfo && restaurantInfo.available}
            />
          );
        })}
      {restaurantInfo && restaurantInfo.available === 1 && (
        <Button
          icon={
            <Counter>
              <div>
                <span>{totalBill}</span>&nbsp;
                <span>&nbsp;ر.س</span>
              </div>
            </Counter>
          }
          label="مراجعة الطلب"
          onClick={() =>
            history.push({
              pathname: "/cart",
              state: { restaurant, branchname },
            })
          }
        />
      )}
      <span className="footer">
        <a
          className="link"
          href="https://otlob.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powerd by Otlob.io
        </a>
      </span>
    </Wrapper>
  );
};

export default Branch;
