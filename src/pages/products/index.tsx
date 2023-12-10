import React from "react";
import { products } from "../../data/prodcuts";
import ProductCard from "../../components/common/productCard/index.tsx";
import { Col, Row } from "antd";

const Prodcuts: React.FC = () => {
  return (
    <div className="products">
      <Row gutter={[16,16]}>
        {
          products.map((product) => (
            <Col span={6}>
              <ProductCard key={product.id} product={product} />
            </Col>
          )) as React.ReactNode[]
        }
      </Row>
    </div>
  );
};

export default Prodcuts;
