import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';
import Navigation from '../Navigation';

import Header from './style';

const HeaderComponent = () => (
  <Header>
    <Link to="/"><Logo /></Link>
    <Navigation />
  </Header>
);

export default HeaderComponent;
