import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import ClothingAndShoes from '../../../pages/clothingAndShoes/index.tsx';
import Home from '../../../pages/home/index.tsx';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: 'Home',
    label: 'Home',
    children: <Home />,
  },
  {
    key: 'JewelleryAndAccessories',
    label: 'Jewellery and Accessories',
    children: 'Content of Tab Pane 1',
  },
  {
    key: 'ClothingAndShoes',
    label: 'Clothing and Shoes',
    children: <ClothingAndShoes />,
  },
  {
    key: 'HomeAndLiving',
    label: 'Home and Living',
    children: 'HomeAndLiving',
  },
  {
    key: 'WeddingAndParty',
    label: 'Wedding and Party',
    children: 'ArtAndCollectibles',
  },
  {
    key: 'ToysAndEntertainment',
    label: 'Toys and Entertainment',
    children: 'ToysAndEntertainment',
  },
  {
    key: 'CraftsAndTools',
    label: 'Crafts Supplies and Tools',
    children: 'CraftsAndTools',
  },
  {
    key: 'ArtAndCollectibles',
    label: 'Art and Collectibles',
    children: 'ArtAndCollectibles',
  },
];

const SubHeader: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  );
};

export default SubHeader;

