import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Chapters from '../pages/Chapters';
import Reader from '../pages/Reader';

import Container from './style';

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/comics/:id/chapters" component={Chapters} />
        <Route path="/reader" component={Reader} />
        <Footer />
      </Container>

    </Router>
  );
}

export default App;
