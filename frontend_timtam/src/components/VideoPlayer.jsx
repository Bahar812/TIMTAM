import React from 'react';

function VideoPlayer(props) {
  return (
    <div className='videoplayer-container'>
      <video controls style={{ height: 300, borderRadius: 12 }}>
        <source src={props.src} type={props.type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
