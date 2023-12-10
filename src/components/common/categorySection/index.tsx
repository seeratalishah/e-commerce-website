import React from "react";
import { Col, Row } from "antd";
import SectionHeading from "../sectionHeading";
import SectionMenu from "../sectionMenu";

import "./categorySection.scss";

const CategorySection: React.FC = () => {
  return (
    <div className="category-section">
      <Row>
        <Col span={24}><SectionHeading /></Col>
        <Col span={24}><SectionMenu /></Col>
      </Row>
    </div>
  );
};

export default CategorySection;
