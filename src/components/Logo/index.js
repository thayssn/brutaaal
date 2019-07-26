import React from 'react';
import bruttalLogo from '../../assets/logos/bruttal-logo.png';

import { LogoWrapper, Logo } from './style';

const LogoComponent = () => (
  <LogoWrapper>
    <Logo src={bruttalLogo} alt="Bruttal" />
  </LogoWrapper>
);

export default LogoComponent;
