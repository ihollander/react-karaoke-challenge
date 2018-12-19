import React from 'react';
import Lyrics from './Lyrics';
import VoteBar from './VoteBar';

const KaraokeDisplay = ({song, onLikeClick, onDislikeClick, onFinish}) => {

  const onLikeButtonClick = () => {
    onLikeClick(song.id)
  }

  const onDislikeButtonClick = () => {
    onDislikeClick(song.id)
  }

  const onLyricsFinish = () => {
    onFinish(song.id)
  }

  return (
    <div className="karaoke-display">
      {song &&
        (
          <React.Fragment>
            <VoteBar upTitle="Like" voteUp={onLikeButtonClick} downTitle="Dislike" voteDown={onDislikeButtonClick} />
            <h2>{song.title}</h2>
            <Lyrics onFinish={onLyricsFinish} lyrics={song.lyrics} />
          </React.Fragment>
        )
      }
    </div>
  )
}

export default KaraokeDisplay;
