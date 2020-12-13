import React from 'react';
import PropTypes from 'prop-types';

import FeedItem from './FeedItem';

const Feed = ({ feeds }) => (
  <div>
    {feeds.map((item) => (
      <FeedItem key={item.id} feed={item} />
    ))}
  </div>
);

Feed.propTypes = {
  feeds: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default Feed;
