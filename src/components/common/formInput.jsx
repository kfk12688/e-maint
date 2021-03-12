import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const FormInput = (props) => {
  const { label, type, id, value, onChange, required = false } = props;
  return (
    <Form.Group as={Row}>
      <Form.Label column sm={4}>
        {label}
      </Form.Label>
      <Col sm={8}>
        <Form.Control
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={`Enter ${label}`}
        />
      </Col>
    </Form.Group>
  );
};

export default FormInput;
