import React from 'react';
import Banner from '../components/Banner';
import TopProducts from '../components/TopProducts/TopProducts';
import UniqueSellingPoint from '../components/UniqueSellingPoint/UniqueSellingPoint';
import Benefits from '../components/Benefits/Benefits';

const Home = () => {
    return (
        <>
            <Banner />
            <TopProducts />
            <UniqueSellingPoint />
            <Benefits />
        </>
    );
};

export default Home;