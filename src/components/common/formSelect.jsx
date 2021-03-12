import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const FormSelect = (props) => {
  const { label, id, value, onChange, required = false, options } = props;
  return (
    <Form.Group as={Row}>
      <Form.Label column sm={4}>
        {label}
      </Form.Label>
      <Col sm={8}>
        <Form.Control
          as="select"
          id={id}
          name={id}
          defaultValue={value}
          onChange={onChange}
          required={required}
        >
          <option key="dummy" value="">
            Select Options
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Control>
      </Col>
    </Form.Group>
  );
};

export default FormSelect;
