import axios from "axios";
import Table from "./common/table";
import TitleBar from "./common/titleBar";
import { NavLink } from "react-router-dom";
import PageWrapper from "./common/pageWrapper";
import React, { Component, Fragment } from "react";
import InputComp from "../components/common/inputComp";
import StarButton from "../components/common/starButton";
import { data as datas, columns } from "../sample/assets";
import { Row, Dropdown, DropdownButton, Button } from "react-bootstrap";

class Assets extends Component {
  columnData = [
    {
      key: "Action Button",
      content: (item, index) => (
        <DropdownButton
          drop="right"
          size="xs"
          title=""
          variant="outline-primary"
          id="dropdown-basic"
        >
          <Dropdown.Header>{item.asset_id}</Dropdown.Header>
          <Dropdown.Item href="#/action-1">Edit Asset</Dropdown.Item>
          <Dropdown.Item href="#/action-2">PMs</Dropdown.Item>
          <Dropdown.Item href="#/action-3">WOs</Dropdown.Item>
        </DropdownButton>
      ),
    },
    {
      key: "Checkbox",
      content: (item, index) => (
        <InputComp
          item={item}
          index={index}
          handleClick={() => this.handleCheckbox(item)}
        />
      ),
    },
    {
      key: "Favorite",
      content: (item, index) => (
        <StarButton
          item={item}
          index={index}
          handleClick={() => this.handleStarButton(item)}
        />
      ),
    },
    {
      key: "Primary Link",
      label: "Asset ID",
      path: "asset_id",
      content: (item, index) => (
        <NavLink to={`/viewAsset/${item.asset_id}`}>{item.asset_id}</NavLink>
      ),
    },
    ...columns,
  ];

  state = {
    assets: datas,
    columns: this.columnData,
  };

  getData = (url) =>
    axios
      .get(url)
      .then((response) => this.setState({ assets: response.data.assets }))
      .catch(function (error) {
        console.log(error);
      });

  handleCheckbox = (item) => {
    const assets = [...this.state.assets];
    const index = assets.indexOf(item);
    assets[index] = { ...assets[index] };
    assets[index].selected = !assets[index].selected;
    this.setState({ assets });
  };

  handleStarButton = (item) => {
    const assets = [...this.state.assets];
    const index = assets.indexOf(item);
    assets[index] = { ...assets[index] };
    assets[index].starred = !assets[index].starred;
    this.setState({ assets });
  };

  render() {
    // this.getData("http://localhost:3003/api/assets/");
    const { assets, columns } = this.state;

    return (
      <Fragment>
        <TitleBar icon="barcode" title="Assets">
          <NavLink to="/addAsset" exact>
            <Button
              size="xs"
              variant="primary"
              title="Add Asset"
              className="m-r-xs"
            >
              <i className="fa fa-plus"></i>
            </Button>
          </NavLink>
          <Button variant="primary" size="xs" className="m-r-xs ">
            <i className="fa fa-refresh"></i>
          </Button>
          <Button variant="primary" size="xs" className="m-r-xs ">
            <i className="fa fa-columns"></i>
          </Button>

          <Button variant="primary" size="xs" className="m-r-xs ">
            <i className="fa fa-filter"></i>
          </Button>
          <Button variant="primary" size="xs" className="m-r-xs ">
            <i className="fa fa-envelope"></i>
          </Button>
          <Button variant="primary" size="xs" className="m-r-xs ">
            <i className="fa fa-upload"></i>
          </Button>
          <Button variant="primary" size="xs" className="m-r-xs ">
            <i className="fa fa-download"></i>
          </Button>
        </TitleBar>
        <PageWrapper>
          <Row>
            <Table data={assets} columns={columns} primarySort="asset_id" />
          </Row>
        </PageWrapper>
      </Fragment>
    );
  }
}

export default Assets;
