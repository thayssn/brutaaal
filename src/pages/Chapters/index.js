import React, { Component } from 'react';
import badabaconcover from '../../assets/covers/ba-da-bacon-cover.jpg';
import vevnhaanoscover from '../../assets/covers/venha-a-nos-cover.jpg';
import charlotebluecover from '../../assets/covers/charlote-blues-cover.jpg';
import johnnycanivetecover from '../../assets/covers/johnny-canivete-cover.jpg';
import badabaconlogo from '../../assets/logos/ba-da-bacon-logo.png';
import vevnhaanoslogo from '../../assets/logos/venha-a-nos-logo.png';
import charlotebluelogo from '../../assets/logos/charlote-blues-logo.png';
import johnnycanivetelogo from '../../assets/logos/johnny-canivete-logo.png';

import { Chapter, LogoWrapper, Logo } from './style';

class Chapters extends Component {
  state = {
    comics: [
      {
        id: 1,
        title: 'Ba-da-bacon',
        cover: badabaconcover,
        logo: badabaconlogo,
        chapters: [
          {
            id: 1,
            number: 1,
            title: 'Chapter 1',
          },
          {
            id: 2,
            number: 2,
            title: 'Chapter 1',
          },
        ],
      },
      {
        id: 2,
        title: 'Venha a nós o vosso reino',
        cover: vevnhaanoscover,
        logo: vevnhaanoslogo,
        chapters: [
          {
            id: 1,
            number: 1,
            title: 'Chapter 1',
          },
          {
            id: 2,
            number: 2,
            title: 'Chapter 1',
          },
        ],
      },
      {
        id: 3,
        title: 'Charlote Blue',
        cover: charlotebluecover,
        logo: charlotebluelogo,
        chapters: [
          {
            id: 1,
            number: 1,
            title: 'Chapter 1',
          },
          {
            id: 2,
            number: 2,
            title: 'Chapter 1',
          },
        ],
      },
      {
        id: 4,
        title: 'Johnny Canivete',
        cover: johnnycanivetecover,
        logo: johnnycanivetelogo,
        chapters: [
          {
            id: 1,
            number: 1,
            title: 'Chapter 1',
          },
          {
            id: 2,
            number: 2,
            title: 'Chapter 1',
          },
        ],
      },
    ],
    currentComic: null,
  }

  componentWillMount() {
    const { match } = this.props;
    const { id } = match.params;
    const { comics } = this.state;
    const currentComic = comics.find(comic => comic.id === parseInt(id, 0));
    this.setState({ currentComic });
  }

  render() {
    const { currentComic } = this.state;
    return (
      <section>
        <LogoWrapper />
        <Logo src={currentComic.logo} />
        <h1>{currentComic.title}</h1>
        <Chapter />
      </section>
    );
  }
}

export default Chapters;
