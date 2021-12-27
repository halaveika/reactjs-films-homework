import React from 'react';
import PropTypes from 'prop-types';
import './ModalContent.scss';
import { NOT_FOUND_IMG_PATH } from '../../constants';

export default function ModalContent({ video, videoRef }) {
  return (
    (video !== NOT_FOUND_IMG_PATH)

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

      : (
        <img
          ref={videoRef}
          src={video}
          alt="notfound"
          style={{ height: 'auto', width: '90%', margin: '20% auto auto auto' }}
        />
      )
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
