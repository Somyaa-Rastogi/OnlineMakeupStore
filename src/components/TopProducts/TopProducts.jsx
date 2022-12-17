import React from 'react';

import SecondaryBanner from '../SecondaryBanner';
import useGetTopProducts from '../../hooks/useGetTopProducts';
import ButtonLink from '../ButtonLink';
import SectionTitle from '../SectionTitle';
import ProductCard from '../ProductCard';
import Loader from '../Loader';

import leaf1Img from './leaf1.png';

const TopProducts = () => {
    const products = useGetTopProducts();

    return (
        <div className="md:mt-20">
        
            <div className="container-tl mx-auto p-10">
                
                <div className="flex items-center justify-between mb-6">
                    <SectionTitle text="Top Products" />
                    <ButtonLink path="/about" text="see more" isMain className="hidden md:block" />
                </div>
                
                {/* Products */}
                <div className="flex flex-wrap justify-center">
                    {products.length === 0 ? (
                        <Loader classes="my-4" />
                    ) : (
                        <>
                            {products.map(product => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    brand={product.brand}
                                    imgUrl={product.api_featured_image}
                                    price={product.price}
                                    currency={product.price_sign}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
            <SecondaryBanner />
        </div>
    );
};

export default TopProducts;