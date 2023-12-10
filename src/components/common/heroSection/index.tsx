import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

import "./heroSection.scss";
import { Button } from "antd";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="content-container">
        <h1>Styled Collection for Every Moment</h1>
        <p>
          Unleash the power of your wardrobe with our exclusive collection -
          where style meets passion.
        </p>
        <Button type="primary">
          Shop Now <ArrowRightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
