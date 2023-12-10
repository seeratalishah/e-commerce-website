import React from 'react';
import HeroSection from '../../components/common/heroSection/index.tsx';
import Brands from '../../components/pages/home/Brands.tsx';
import Accessories from '../../components/pages/home/Accessories.tsx';
import CategorySection from '../../components/common/categorySection/index.tsx';

const Home: React.FC = () => {

  return (
    <>
    <HeroSection />
    <Brands />
    <Accessories />
    <CategorySection />
    </>
  );
};

export default Home;