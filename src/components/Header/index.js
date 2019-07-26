import React from 'react';
import Logo from '../Logo';
import Navigation from '../Navigation';

import Header from './style';

const HeaderComponent = () => (
  <Header>
    <Logo />
    <Navigation />
  </Header>
);

export default HeaderComponent;
