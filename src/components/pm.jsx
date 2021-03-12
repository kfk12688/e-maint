import Table from "./common/table";
import TitleBar from "./common/titleBar";
import { NavLink } from "react-router-dom";
import { data, columns } from "../sample/pm";
import PageWrapper from "./common/pageWrapper";
import React, { Component, Fragment } from "react";
import InputComp from "../components/common/inputComp";
import StarButton from "../components/common/starButton";
import { Row, Dropdown, DropdownButton } from "react-bootstrap";

class PM extends Component {
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
          <Dropdown.Header>{item.pm_id}</Dropdown.Header>
          <Dropdown.Item href="#/action-1">View PM</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Manually Generate</Dropdown.Item>
        </DropdownButton>
      ),
    },
    {
      key: "Checkbox",
      content: (item, index) => (
        <InputComp
          item={item}
          index={index}
          handleClick={(e) => this.handleCheckbox(e, item)}
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
      label: "PM ID",
      path: "pm_id",
      content: (item, index) => (
        <NavLink to={`/viewAsset/${item.pm_id}`}>{item.pm_id}</NavLink>
      ),
    },
    ...columns,
  ];

  state = {
    pm: data,
    columns: this.columnData,
  };

  handleCheckbox = (e, item) => {
    // const selected = e.currentTarget.parentNode.parentNode.parentNode;
    // selected.style.color = "#1c84c6";
    // selected.style.fontWeight = "bold";
    const pm = [...this.state.pm];
    const index = pm.indexOf(item);
    pm[index] = { ...pm[index] };
    pm[index].selected = !pm[index].selected;
    this.setState({ pm });
  };

  handleStarButton = (item) => {
    const pm = [...this.state.pm];
    const index = pm.indexOf(item);
    pm[index] = { ...pm[index] };
    pm[index].starred = !pm[index].starred;
    this.setState({ pm });
  };

  render() {
    const { pm, columns } = this.state;

    return (
      <Fragment>
        <TitleBar icon="gears" title="PM">
          <DropdownButton
            size="xs"
            variant="primary"
            title="Action "
            className="m-r-xs"
          >
            <Dropdown.Item as="button">
              {" "}
              <NavLink to="/generatePMWO" exact>
                Generate PM Work Orders
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item as="button">Work Order Projection</Dropdown.Item>
          </DropdownButton>
        </TitleBar>

        <PageWrapper>
          <Row>
            <Table data={pm} columns={columns} primarySort="pm_id" />
          </Row>
        </PageWrapper>
      </Fragment>
    );
  }
}

export default PM;
