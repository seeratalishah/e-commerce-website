import React from "react";
import { Col, Row } from "antd";
import AccRight from "../../../assets/images/acc-right.png";
import AccLeft from "../../../assets/images/acc-left.png";
import AccMain from "../../../assets/images/acc-main.png";

import "./index.scss";

const Accessories: React.FC = () => {
  return (
    <div className="accessories">
      <Row gutter={[8, 0]} align="middle">
        <Col span={6}>
          <img src={AccLeft} alt="company logo" />
        </Col>
        <Col span={12} className="image-container">
          <img src={AccMain} alt="company logo" />
        </Col>
        <Col span={6}>
          <img src={AccRight} alt="company logo" />
        </Col>
      </Row>
    </div>
  );
};

export default Accessories;
