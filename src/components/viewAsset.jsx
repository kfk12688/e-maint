import React, { Component, Fragment } from "react";
import TitleBar from "./common/titleBar";
import { Col, Row } from "react-bootstrap";
import PageWrapper from "./common/pageWrapper";
import BoxedContent from "./common/boxedContent";
import { data as d1, columns as c1 } from "../sample/assets";
import { data as d2, columns as c2 } from "../sample/pm";
import Table from "./common/table";
import { NavLink } from "react-router-dom";
import QRCode from "qrcode.react";

class ViewAsset extends Component {
  c1Data = [
    {
      key: "Primary Link",
      label: "Asset ID",
      path: "asset_id",
      content: (item, index) => (
        <NavLink to={`/viewAsset/${item.asset_id}`}>{item.asset_id}</NavLink>
      ),
    },
    ...c1,
  ];
  c2Data = [
    {
      key: "Primary Link",
      label: "PM ID",
      path: "pm_id",
      content: (item, index) => (
        <NavLink to={`/viewAsset/${item.pm_id}`}>{item.pm_id}</NavLink>
      ),
    },
    ...c2,
  ];
  state = {
    assetsData: d1,
    assetsColumns1: this.c1Data,
    assetsPM: d2,
    assetsColumns2: this.c2Data,
    // asset: {
    //   asset_id: "RF01",
    //   asset_description: "Ring Frame 01",
    //   asset_type: "Machinery",
    //   asset_sub_type: "Machine",
    //   building: "Spinning Shed",
    //   department: "Spinning",
    //   parent_asset_id: "",
    //   installed_date: "0000-00-00",
    //   manufacturer: "",
    //   model_no: "",
    //   serial_no: "",
    // },
  };

  render() {
    const { asset_id } = this.props.match.params;
    const { assetsData, assetsColumns1, assetsPM, assetsColumns2 } = this.state;
    const childAssetData = assetsData.filter(
      (asset) => asset.parent_asset_id === asset_id
    );
    const pmData = assetsPM.filter((pm) => pm.asset_id === asset_id);

    return (
      <Fragment>
        <TitleBar icon="barcode" title={`Asset - ${asset_id}`}></TitleBar>
        <PageWrapper>
          <BoxedContent>
            <Row>
              <Col md={6}>
                <table>
                  <tr>
                    <td>Asset ID</td>
                    <td>RF 05</td>
                  </tr>
                  <tr>
                    <td>Asset_description</td>
                    <td>RF 05</td>
                  </tr>
                  <tr>
                    <td>Asset Type</td> <td>Asset Type</td>
                  </tr>
                  <tr>
                    <td>Asset Sub Type</td> <td>Asset Sub Type</td>
                  </tr>
                  <tr>
                    <td>Building</td> <td>Building</td>
                  </tr>
                  <tr>
                    <td>Department</td> <td>Department</td>
                  </tr>
                  <tr>
                    <td>Parent Asset Id</td> <td>Parent Asset Id</td>
                  </tr>
                  <tr>
                    <td>Installed Date</td> <td>Installed Date</td>
                  </tr>
                  <tr>
                    <td>Manufacturer</td> <td>Manufacturer</td>
                  </tr>
                  <tr>
                    <td>Model No</td> <td>Model No</td>
                  </tr>
                  <tr>
                    <td>Serial No</td> <td>Serial No</td>
                  </tr>
                </table>
              </Col>
              <Col md={6} className="">
                <div className="float-right">
                  <h3 className="m-b-sm text-success">QR Code</h3>
                  <QRCode
                    value={`http://localhost:3000/viewAsset/${asset_id}`}
                  />
                </div>
              </Col>
            </Row>
          </BoxedContent>
          <BoxedContent title="Child Assets">
            <Table
              data={childAssetData}
              columns={assetsColumns1}
              primarySort="asset_id"
            />
          </BoxedContent>
          <BoxedContent title="PM Schedule">
            <Table data={pmData} columns={assetsColumns2} primarySort="pm_id" />
          </BoxedContent>
          <BoxedContent title="Work Order History"></BoxedContent>
        </PageWrapper>
      </Fragment>
    );
  }
}

export default ViewAsset;
