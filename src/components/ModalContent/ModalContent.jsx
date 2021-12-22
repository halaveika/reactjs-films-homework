import React from 'react';
import PropTypes from 'prop-types';
import './ModalContent.scss';

export default function ModalContent({ video, videoRef }) {
  return (
    (video)

      ? (
        <iframe
          src={`${video}`}
          scrolling="no"
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          ref={videoRef}
          title="trailer"
        />
      )

      : <img className="image-notfound" ref={videoRef} src="assets/images/not-found.png" alt="notfound" />
  );
}

ModalContent.propTypes = {
  video: PropTypes.string.isRequired,
  videoRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: null }),
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
