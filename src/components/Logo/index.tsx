import React from 'react';

import { Image } from './styled';

interface Logo {
    color: 'white' | 'blue';
}

const Logo = ({ color }: Logo) => {
    return <Image src={`/assets/logo/logo_${color}.png`} alt="logoImage" />;
};
export default Logo;
