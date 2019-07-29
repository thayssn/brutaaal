import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Chapter, LogoWrapper, Logo } from './style';

const Chapters = ({ match, allBooks }) => {
  const [currentBook, setBook] = useState({
    chapters: [],
  });

  useEffect(() => {
    const { slug } = match.params;
    const bookWithSlug = allBooks.find(book => book.slug === slug);
    setBook(bookWithSlug);
  }, [match, allBooks]);

  return (
    <section>
      <LogoWrapper>
        <Logo src={currentBook.logo} />
      </LogoWrapper>
      { currentBook.chapters.map(chapter => (
        <Link to={`/${currentBook.slug}/chapters/${chapter.id}`} key={chapter.id}>
          <Chapter>
            <div className="cover" background={chapter.cover} />
            <h2 className="title">{chapter.title}</h2>
            <div className="number">{chapter.number}</div>
          </Chapter>
        </Link>
      ))}
    </section>
  );
};

const mapStateToProps = state => ({
  allBooks: state.allBooksState,
});

export default connect(mapStateToProps)(Chapters);
