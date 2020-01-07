/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Lightbox from 'react-images';

const Gallery = ({ images }) => {
  const [lightBoxIsOpen, setLightBoxIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const closeLightbox = () => {
    setCurrentImage(0);
    setLightBoxIsOpen(false);
  };

  const gotoNext = () => {
    setCurrentImage(currentImage + 1);
  };
  const gotoPrevious = () => {
    setCurrentImage(currentImage - 1);
  };
  const gotoImage = (index) => {
    setCurrentImage(index);
  };
  const handleClickImage = () => {
    if (currentImage === images.length - 1) return;
    gotoNext();
  };
  const openLightbox = (index, event) => {
    event.preventDefault();
    setCurrentImage(index);
    setLightBoxIsOpen(true);
  };

  const renderGallery = () => {
    if (images) {
      return images.map((obj, i) => (
        <article className="thumb" key={obj.src}>
          <span
            style={{
              backgroundImage: `url(${obj.src})`,
              cursor: 'pointer',
              outline: '0px',
            }}
            onClick={(e) => openLightbox(i, e)}
            className="image"
          >
            <img
              style={{ display: 'None' }}
              src={obj.thumbnail}
              alt={obj.title}
              title={obj.title}
            />
          </span>
          <h2>{obj.title}</h2>
          <p>{obj.desc}</p>
        </article>
      ));
    }
    return null;
  };
  return (
    <>
      {renderGallery()}
      <Lightbox
        currentImage={currentImage}
        images={images.map((img) => {
          const newImg = img;
          newImg.caption = `${img.title} - ${img.desc}`;
          return newImg;
        })}
        isOpen={lightBoxIsOpen}
        onClickImage={handleClickImage}
        onClickNext={gotoNext}
        onClickPrev={gotoPrevious}
        onClickThumbnail={gotoImage}
        onClose={closeLightbox}
      />
    </>
  );
};

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
  images: PropTypes.array,
};

export default Gallery;
