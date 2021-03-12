import Table from "./common/table";
import TitleBar from "./common/titleBar";
import { NavLink } from "react-router-dom";
import PageWrapper from "./common/pageWrapper";
import { data, columns } from "../sample/wo";
import React, { Component, Fragment } from "react";
import StarButton from "../components/common/starButton";
import InputComp from "../components/common/inputComp";
import { Row, Dropdown, DropdownButton, Button } from "react-bootstrap";

class WorkOrders extends Component {
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
          <Dropdown.Header>{item.wo_no}</Dropdown.Header>
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
      label: "WO No",
      path: "wo_no",
      content: (item, index) => (
        <NavLink to={`/viewAsset/${item.wo_no}`}>{item.wo_no}</NavLink>
      ),
    },
    ...columns,
  ];

  state = {
    wo: data,
    columns: this.columnData,
  };

  handleCheckbox = (item) => {
    const wo = [...this.state.wo];
    const index = wo.indexOf(item);
    wo[index] = { ...wo[index] };
    wo[index].selected = !wo[index].selected;
    this.setState({ wo });
  };

  handleStarButton = (item) => {
    const wo = [...this.state.wo];
    const index = wo.indexOf(item);
    wo[index] = { ...wo[index] };
    wo[index].starred = !wo[index].starred;
    this.setState({ wo });
  };

  render() {
    const { wo, columns } = this.state;

    return (
      <Fragment>
        <TitleBar icon="wrench" title="Work Orders">
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
        </TitleBar>
        <PageWrapper>
          <Row>
            <Table data={wo} columns={columns} primarySort="wo_no" />
          </Row>
        </PageWrapper>
      </Fragment>
    );
  }
}

export default WorkOrders;
