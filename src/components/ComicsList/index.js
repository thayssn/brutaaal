import React, { useState } from 'react';
import badabaconcover from '../../assets/covers/ba-da-bacon-cover.jpg';
import vevnhaanoscover from '../../assets/covers/venha-a-nos-cover.jpg';
import charlotebluecover from '../../assets/covers/charlote-blues-cover.jpg';
import johnnycanivetecover from '../../assets/covers/johnny-canivete-cover.jpg';

import { CoverWrapper, Cover } from './style';

export default function App() {
  const [comics] = useState([
    {
      id: 1,
      title: 'Ba-da-bacon',
      cover: badabaconcover,
    },
    {
      id: 2,
      title: 'Venha a nós o vosso reino',
      cover: vevnhaanoscover,
    },
    {
      id: 3,
      title: 'Charlote Blue',
      cover: charlotebluecover,
    },
    {
      id: 4,
      title: 'Johnny Canivete',
      cover: johnnycanivetecover,
    },
  ]);

  return (
    <CoverWrapper>
      {comics.map(comic => (
        <Cover key={comic.id}>
          <img src={comic.cover} alt={`Capa de ${comic.title}`} />
        </Cover>
      ))}
    </CoverWrapper>
  );
}
