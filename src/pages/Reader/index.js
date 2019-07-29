import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazy-load';

import {
  ChapterTitle, ImagesWrapper, ImageContainer, Image,
} from './style';

const Reader = ({ match, chapters }) => {
  const [chapter, setChapter] = useState({
    images: [],
  });

  useEffect(() => {
    let { chapterId } = match.params;
    const chapterWithId = chapters.find((currentChapter) => {
      chapterId = parseInt(chapterId, 0);
      return currentChapter.id === chapterId;
    });
    setChapter(chapterWithId);
  }, [match, chapters]);


  return (
    <Fragment>
      <ChapterTitle>
        {chapter.title}
      </ChapterTitle>
      <ImagesWrapper>
        { chapter.images.map(image => (
          <LazyLoad
            debounce={false}
            offsetTop={window.height + 20}
            key={image.order}
          >
            <ImageContainer>
              <Image
                src={process.env.PUBLIC_URL + image.path}
              />
            </ImageContainer>
          </LazyLoad>
        ))}
      </ImagesWrapper>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  chapters: state.allChaptersState,
});

export default connect(mapStateToProps)(Reader);
