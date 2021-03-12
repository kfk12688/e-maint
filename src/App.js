import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SideBarNav from "./SideBarNav";
import TopNavBar from "./TopNavBar";
import Assets from "./components/assets";
import AddAsset from "./components/addAsset";
import ViewAsset from "./components/viewAsset";
import WorkOrders from "./components/workOrders";
import GeneratePMWO from "./components/generatePMWO";
import PM from "./components/pm";
import { Row, Col, Container } from "react-bootstrap";
import configureStore from "./store/configureStore";
import StoreContext from "./context/storeContext";
import "./App.css";

const store = configureStore();

function App() {
  return (
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <Container fluid>
          <TopNavBar />
          <Row>
            <Col md={2} className="border-right p-r-0">
              <SideBarNav />
            </Col>
            <Col md={10}>
              <Route component={Assets} path="/" exact />
              <Route component={AddAsset} path="/addAsset" />
              <Route component={ViewAsset} path="/viewAsset/:asset_id" />
              <Route component={WorkOrders} path="/workorders" />
              <Route component={GeneratePMWO} path="/generatePMWO" />
              <Route component={PM} path="/pm" />
            </Col>
          </Row>
        </Container>
      </StoreContext.Provider>
    </BrowserRouter>
  );
}

export default App;
