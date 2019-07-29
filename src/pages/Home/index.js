import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { CoverWrapper, Cover } from './style';

const Home = ({ books }) => {
  const [comics] = useState(books);

  return (
    <CoverWrapper>
      {comics.map(comic => (
        <Link
          className="link"
          to={`/${comic.slug}/chapters`}
          key={comic.id}
        >
          <Cover background={comic.cover} backgroundMobile={comic.coverMobile} />
        </Link>
      ))}
    </CoverWrapper>
  );
};

const mapStateToProps = store => ({
  books: store.allBooksState,
});

export default connect(mapStateToProps)(Home);
