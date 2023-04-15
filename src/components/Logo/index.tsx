import React from 'react';

import { Image } from './styled';

const Logo = ({ color }: { color: 'white' | 'blue' }) => {
    return <Image src={`../../assets/logo/logo_${color}.png`} alt="logoImage" />;
};
export default Logo;
