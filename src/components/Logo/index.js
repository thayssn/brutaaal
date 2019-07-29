import React from 'react';
import bruttalLogo from '../../assets/bruttal-logo.png';

import { LogoWrapper, Logo } from './style';

const LogoComponent = () => (
  <LogoWrapper>
    <Logo src={bruttalLogo} alt="Bruttal" />
  </LogoWrapper>
);

export default LogoComponent;
