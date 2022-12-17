import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from './logo.png';

const BrandLink = ({ classes }) => (
    <Link className={`text-2xl font-krona ${classes}`} to="/">
        <img
                        className="py-4"
                        width="300"
                        src={logoImg}
                        alt="A bundle of cream products standing next to each other"
                    />
    </Link>
);

export default BrandLink;