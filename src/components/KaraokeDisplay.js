import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = ({song, onLikeClick, onDislikeClick}) => {

  const onLikeButtonClick = () => {
    onLikeClick(song.id)
  }

  const onDislikeButtonClick = () => {
    onDislikeClick(song.id)
  }

  return (
    <div className="karaoke-display">
      {song &&
        (
          <React.Fragment>
            <button className="up-button" onClick={onLikeButtonClick}>Like</button>
            <button className="down-button" onClick={onDislikeButtonClick}>Dislike</button>
            <h2>{song.title}</h2>
            <Lyrics lyrics={song.lyrics} />
          </React.Fragment>
        )
      }
    </div>
  )
}

export default KaraokeDisplay;
