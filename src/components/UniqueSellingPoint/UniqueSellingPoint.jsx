import React from 'react';
import bannerImg from './img.png';

const UniqueSellingPoint = () => (
    <div className="bg-light-grey pt-20 mb-20">
        <div className="container-tl mx-auto pt-20 pb-16 flex flex-col md:flex-row items-center">
            <div className="mr-0 md:mr-4 mb-4 md:mb-0">
                <img src={bannerImg} alt="Tooth brush and a paste laying on top of a green leaf" />
            </div>
            <div>
                <h2 className="font-krona text-3xl mb-4">Reimagining skincare for you</h2>
                <p className="text-sm mb-4">
                The stay clear starter kit is specifically engineered and clinically proven 
                to gently cleanse, and keep skin visibly clear, hydrated, healthy and perfectly
                balanced—day after day—in one complete package.
                </p>
                <p className="text-sm">
                See discolorations fade and 
                smoother, more even-tone skin reappears, keep pimples under control, and boost 
                your confidence. the perfect way to get started with your day!
                </p>
            </div>
        </div>
    </div>
);

export default UniqueSellingPoint;