import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import badabaconcover from '../../assets/covers/ba-da-bacon-cover.jpg';
import vevnhaanoscover from '../../assets/covers/venha-a-nos-cover.jpg';
import charlotebluecover from '../../assets/covers/charlote-blues-cover.jpg';
import johnnycanivetecover from '../../assets/covers/johnny-canivete-cover.jpg';
import badabaconlogo from '../../assets/logos/ba-da-bacon-logo.png';
import vevnhaanoslogo from '../../assets/logos/venha-a-nos-logo.png';
import charlotebluelogo from '../../assets/logos/charlote-blues-logo.png';
import johnnycanivetelogo from '../../assets/logos/johnny-canivete-logo.png';

import { CoverWrapper, Cover } from './style';

export default function Home() {
  const [comics] = useState([
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
  ]);

  return (
    <CoverWrapper>
      {comics.map(comic => (
        <Link to={`/comics/${comic.id}/chapters`} key={comic.id}>
          <Cover>
            <img src={comic.cover} alt={`Capa de ${comic.title}`} />
          </Cover>
        </Link>
      ))}
    </CoverWrapper>
  );
}
