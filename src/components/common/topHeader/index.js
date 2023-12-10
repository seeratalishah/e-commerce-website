import { Button, Col, Input, Row } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

import "./topHeader.scss";

function TopHeader() {
  const isLargeScreen = useMediaQuery({ minWidth: 991 });
  return (
    <div className="top-header">
      <Row gutter={[0, 12]} align="middle">
        <Col
          md={{ span: 24, order: 2 }}
          lg={{ span: 9, order: 1 }}
          xs={{ span: 24, order: 2 }}
        >
          <Row
            gutter={[8, 0]}
            align="middle"
            justify={isLargeScreen ? "start" : "center"}
          >
            <Col lg={{ span: 20 }}>
              <Input
                style={
                  isLargeScreen ? { minWidth: "100%" } : { minWidth: "220px" }
                }
              />
            </Col>
            <Col lg={{ span: 4 }}>
              <Button type="primary" icon={<SearchOutlined />}>
                Search
              </Button>
            </Col>
          </Row>
        </Col>
        <Col
          md={{ span: 24, order: 1 }}
          lg={{ span: 8, order: 2 }}
          xs={{ span: 24, order: 1 }}
        >
          <Row align="middle" justify="center">
            <Col>
              <h2>
                <span className="logo-span">|S|</span>Shop
              </h2>
            </Col>
          </Row>
        </Col>
        <Col
          md={{ span: 24, order: 3 }}
          lg={{ span: 7, order: 3 }}
          xs={{ span: 24, order: 3 }}
        >
          <Row
            gutter={[8, 0]}
            align="middle"
            justify={isLargeScreen ? "end" : "center"}
          >
            <Col>
              <Button icon={<UserOutlined />}>Account</Button>
            </Col>
            <Col>
              <Button icon={<ShoppingOutlined />}>Shopping</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default TopHeader;
