import React from "react";
import { Product } from "../../../data/prodcuts";
import "./productCard.scss";
import { Button, Tooltip } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imgUrl} alt="product img" />
      <h3>{product.name}</h3>
      <p className="light-text">{product.type}</p>
      <div className="price-row">
        <h4 className="price"><span className="primary-text">$ </span>{product.price}</h4>
        <div className="actions">
          <Tooltip title="add to cart">
            <Button type="primary" shape="circle" icon={<ShoppingCartOutlined />} />
          </Tooltip>{" "}
          <Tooltip title="view product">
            <Button shape="circle" icon={<EyeOutlined />} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
