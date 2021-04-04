//libraries imports
import React, { FC, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import moment from "moment";

//local imports
import { Wrapper } from "./styles";
import { Header, Branch } from "../../components";
import { getRestaurant } from "../../api";

const Home: FC = () => {
  let history = useHistory();

  //query categories
  let { slug } = useParams();

  //states
  const [branches, setBranches] = useState<any[]>([]);
  const [restaurant, setRestaurant] = useState<string>("");
  const [logo, setLogo] = useState<string>("");

  //local variables

  //functions
  const handleNavigate = (category: string) => {
    history.push(`${slug}/${category}`);
  };

  useEffect(() => {
    let restaurant = getRestaurant(slug);
    restaurant.then((result) => {
      setLogo(result.data.data.icon);
      setRestaurant(result.data.data.name);
      setBranches(result.data.data.branches);
    });
  }, [slug]);

  const getStatus = (status: number, open: string, close: string) => {
    let format = "hh:mm:ss";
    let time = moment(),
      beforeTime = moment(open, format),
      afterTime = moment(close, format);

    if (status === 1 && !time.isBetween(beforeTime, afterTime)) {
      return "busy";
    } else {
      if (open === close) {
        return "open";
      } else if (time.isBetween(beforeTime, afterTime)) {
        return "open";
      } else {
        return "closed";
      }
    }
  };

  return (
    <Wrapper>
      <Header subtitle="تصفح" title="فروعنا " home />
      <div className="category-list">
        {branches.map((branch, index) => {
          return (
            <Branch
              key={index}
              name={restaurant}
              description={branch.name}
              logo={logo}
              slug={branch.slug}
              status={getStatus(
                branch.is_available,
                branch.open_at,
                branch.close_at
              )}
              onNavigate={handleNavigate}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Home;
