import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse,Button } from "antd";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const AppFaq = () => {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>
            Quidem reiciendis iure, aperiam blanditiis. Alias esse, nam, ea quam
          </p>
        </div>
        <Collapse
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          className="site-collapse-custom-collapse"
        >
          <Panel
            header="How to setup the theme?"
            key="1"
            className="site-collapse-custom-panel"
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="Can I change plan or cancel at any time?"
            key="2"
            className="site-collapse-custom-panel"
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="How to access through cloud?"
            key="3"
            className="site-collapse-custom-panel"
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="Can I manage multiple task?"
            key="4"
            className="site-collapse-custom-panel"
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="How to manage my account?"
            key="5"
            className="site-collapse-custom-panel"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>{" "}
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            velit necessitatibus praesentium aliquid eos in neque recusandae,
            incidunt esse dolore voluptatum nesciunt quod soluta consequuntur
            voluptatibus ab excepturi nobis! Porro!
          </p>
          <Button type="primary" size="large">
            <i className="fas fa-envelope"></i> Email your question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppFaq;
