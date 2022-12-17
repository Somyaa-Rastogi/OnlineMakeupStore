import React from 'react';
import bannerImg from './leaf.png';
import ButtonLink from '../ButtonLink';

const Banner = () => {
    return (
        <div className='mx-auto flex items-center p-8 mb-5 bg-light'>
            <div>
                <h1 className='font-krona text-3xl mb-4'>
                    The new lineup you will swear by for dullness, dryness and breakouts
                </h1>
                <p className='text-sm'>Our collection of high-performance beauty products are designed to make 
                you look fierce and flawless all day long, so you look as gorgeous on 
                the outside as you feel on the inside
                </p>
                <ButtonLink path="/about" text="see more" isMain className="mt-10" />
            </div>
            <div>
                <img className="p-8" src={bannerImg} alt="leaf with tube" />
            </div>
        </div>
    );
};

export default Banner;