import React from "react";
import { Col, Row } from "antd";
import companyLogo from "../../../assets/images/company-logo.png";

import "./index.scss";

const Brands: React.FC = () => {
  return (
    <div className="brands">
      <Row justify="space-between" align="middle">
        <Col>
          <img src={companyLogo} alt="company logo" />
        </Col>
        <Col>
          <img src={companyLogo} alt="company logo" />
        </Col>
        <Col>
          <img src={companyLogo} alt="company logo" />
        </Col>
        <Col>
          <img src={companyLogo} alt="company logo" />
        </Col>
        <Col>
          <img src={companyLogo} alt="company logo" />
        </Col>
      </Row>
    </div>
  );
};

export default Brands;
