import React from "react";
import { Carousel,Button } from "antd";
import {PlayCircleTwoTone } from '@ant-design/icons';
const AppHero = () => {
  const items = [
    {
      key: "1",
      title: "Web and mobile payment built for developers",
      content:
        "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
    },
    {
      key: "2",
      title: "Work better together. Schedule meetings",
      content:
        "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
    },
    {
      key: "3",
      title: "The best app to increase your productivity",
      content:
        "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
    },
  ];
  return (
    <div className="heroBlock">
      <Carousel>
        {items.map((item) => {
          return (
            <div  id="home" className="container-fluid" key={item.key}>
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">
                    Learn More
                  </Button>
                  
                  <Button ghost="true" size="large" type="primary">
                  <PlayCircleTwoTone spin="true" />
                    Watch a Demo
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default AppHero;
