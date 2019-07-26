import React, { Fragment } from 'react';
import Header from '../components/Header';
import Home from '../pages/Home';
import Footer from '../components/Footer';

import Container from './style';

function App() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Home />
        <Footer />
      </Container>
    </Fragment>
  );
}

export default App;
