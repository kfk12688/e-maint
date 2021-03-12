import React, { Component, Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import TitleBar from "./common/titleBar";
import FormInput from "./common/formInput";
import PageWrapper from "./common/pageWrapper";
import FormSelect from "./common/formSelect";
import StoreContext from "../context/storeContext";
// import { store as configureStore } from "../store/configureStore";
import { assetsAdded } from "../store/assets";

class AddAsset extends Component {
  static contextType = StoreContext;
  store = this.context;
  state = {
    asset: {
      asset_id: "",
      asset_description: "",
      asset_type: "",
      asset_sub_type: "",
      building: "",
      department: "",
      parent_asset_id: "",
      installed_date: "",
      manufacturer: "",
      model_no: "",
      serial_no: "",
      comments: "",
    },
  };
  componentDidMount() {}

  handleOnSave = (e) => {
    this.store.dispatch(assetsAdded({ asset: this.state.asset }));
    console.log(this.store.getState());
    e.preventDefault();
  };

  handleOnChange = ({ currentTarget: input }) => {
    const asset = { ...this.state.asset };
    asset[input.name] = input.value;
    this.setState({ asset });
    // console.log(input);
  };

  render() {
    const { asset } = this.state;
    return (
      <Fragment>
        <TitleBar icon="barcode" title="Add New Asset" />
        <PageWrapper>
          <Form id="addAssetForm" onSubmit={this.handleOnSave}>
            <Row>
              <Col sm={6}>
                <FormInput
                  type="text"
                  id="asset_id"
                  label="Asset ID"
                  value={asset.asset_id}
                  onChange={this.handleOnChange}
                />
                <FormInput
                  type="text"
                  id="asset_description"
                  label="Asset Description"
                  value={asset.asset_description}
                  onChange={this.handleOnChange}
                />
                <FormSelect
                  id="asset_type"
                  label="Asset Type"
                  value={asset.asset_type}
                  onChange={this.handleOnChange}
                  options={[
                    { label: "Machinery", value: "machinery" },
                    { label: "Compressor", value: "Compressor" },
                  ]}
                />
                <FormSelect
                  id="asset_sub_type"
                  label="Asset Sub Type"
                  value={asset.asset_sub_type}
                  onChange={this.handleOnChange}
                  options={[{ label: "Machine", value: "machine" }]}
                />
                <FormInput
                  type="text"
                  id="building"
                  label="Building"
                  value={asset.building}
                  onChange={this.handleOnChange}
                />
                <FormSelect
                  id="department"
                  label="Department"
                  value={asset.department}
                  onChange={this.handleOnChange}
                  options={[
                    { label: "Preparatory", value: "preparatory" },
                    { label: "Auto Coner", value: "Autoconer" },
                  ]}
                />
              </Col>
              <Col sm={6}>
                <FormSelect
                  id="parent_asset_id"
                  label="Parent Asset ID"
                  value={asset.parent_asset_id}
                  onChange={this.handleOnChange}
                  options={[
                    { label: "RF 01", value: "rf01" },
                    { label: "RF 02", value: "rf02" },
                    { label: "RF 03", value: "rf03" },
                    { label: "RF 04", value: "rf04" },
                    { label: "RF 05", value: "rf05" },
                  ]}
                />
                <FormInput
                  type="date"
                  id="installed_date"
                  label="Installed Date"
                  value={asset.installed_date}
                  onChange={this.handleOnChange}
                />
                <FormInput
                  type="text"
                  id="manufacturer"
                  label="Manufacturer"
                  value={asset.manufacturer}
                  onChange={this.handleOnChange}
                />
                <FormInput
                  type="text"
                  id="model_no"
                  value={asset.model_no}
                  label="Model Number"
                  onChange={this.handleOnChange}
                />
                <FormInput
                  type="text"
                  id="serial_no"
                  label="Serial No"
                  value={asset.serial_no}
                  onChange={this.handleOnChange}
                />
                <FormInput
                  type="text"
                  id="comments"
                  label="Comments"
                  value={asset.comments}
                  onChange={this.handleOnChange}
                />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col md={12}>
                <Button
                  size="lg"
                  type="submit"
                  className="m-r-sm"
                  variant="outline-success"
                >
                  Submit
                </Button>
                <Button size="lg" variant="outline-danger" type="reset">
                  Reset
                </Button>
              </Col>
            </Row>
          </Form>
        </PageWrapper>
      </Fragment>
    );
  }
}

export default AddAsset;
