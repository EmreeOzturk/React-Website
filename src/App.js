import "./App.css";
import AppHeader from "./components/common/Header";
import { Layout } from "antd";
import React from "react";
import AppHome from "./views/home";
import AppFooter from "./components/common/Footer";
import { Footer } from "antd/lib/layout/layout";
const { Header, Content } = Layout;

const App = () => (
  <Layout className="mainLayout">
    <Header>
      <AppHeader />
    </Header>
    <Content>
      <AppHome />
    </Content>
    <Footer >
      <AppFooter />
    </Footer>
  </Layout>
);

export default App;
