import { Col, Row, Tabs } from "antd";
import React from "react";
import type { TabsProps } from 'antd';
import Prodcuts from "../../../pages/products/index.tsx";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: 'AllProducts',
    label: 'All Products',
    children: <Prodcuts />,
  },
  {
    key: 'TShirts',
    label: 'T Shirts',
    children: 'T Shirts',
  },
  {
    key: 'Hoodies',
    label: 'Hoodies',
    children: 'Hoodies',
  },
  {
    key: 'Jackets',
    label: 'Jackets',
    children: 'Jackets',
  },
];

const SectionMenu: React.FC = () => {
  return (
    <div className="section-menu">
      <Row justify="space-between">
        <Col span={24}><Tabs defaultActiveKey="1" items={items} onChange={onChange} /></Col>
        {/* <Col><div className="dark-btn"><Button type="primary">Show All</Button></div></Col> */}
      </Row>
    </div>
  );
};

export default SectionMenu;
