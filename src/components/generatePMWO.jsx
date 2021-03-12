import React, { Component, Fragment } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import TitleBar from "./common/titleBar";
import Table from "./common/table";
import PageWrapper from "./common/pageWrapper";
import InputComp from "../components/common/inputComp";
import { NavLink } from "react-router-dom";
import { data, columns } from "../sample/pm";

class GeneratePMWO extends Component {
  columnData = [
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
    pm: [],
    wo: [],
    columns: this.columnData,
  };

  handleCheckbox = (e, item) => {
    const selected = e.currentTarget.parentNode.parentNode.parentNode;
    selected.style.color = "#1c84c6";
    selected.style.fontWeight = "bold";
    const pm = [...this.state.pm];
    const index = pm.indexOf(item);
    pm[index] = { ...pm[index] };
    pm[index].selected = !pm[index].selected;
    this.setState({ pm });
  };

  generatePMList(e) {
    const date = e.currentTarget.value;
    const pm = data.filter(
      (pmObj) => new Date(pmObj.next_pm_date) <= new Date(date)
    );
    this.setState({ pm });
  }

  generateWOs = () => {
    const { pm } = this.state;
    const wo = pm.filter((data) => data.selected === true);
    this.setState({ wo });
  };

  render() {
    const { pm, columns } = this.state;

    return (
      <Fragment>
        <TitleBar icon="gears" title="Generate PM Work Orders" />
        <PageWrapper>
          <Row>
            <Col md={12} className="m-b-xs">
              <Form.Group as={Row}>
                <Form.Label column sm={1}>
                  Generate Through
                </Form.Label>
                <Col sm={2}>
                  <Form.Control
                    type="date"
                    id="generatePM"
                    name="generatePM"
                    onChange={(e) => this.generatePMList(e)}
                  />
                </Col>
                <Col sm={5}>
                  <Button
                    variant="outline-primary"
                    className="m-r-sm font-bold"
                    onClick={this.generateWOs}
                  >
                    Generate PM's
                  </Button>
                  <NavLink to="/pm" exact>
                    <Button variant="primary" as="button" className="m-r-sm">
                      Go To List
                    </Button>
                  </NavLink>
                </Col>
              </Form.Group>
            </Col>

            <Table data={pm} columns={columns} primarySort="pm_id" />
          </Row>
        </PageWrapper>
      </Fragment>
    );
  }
}

export default GeneratePMWO;
