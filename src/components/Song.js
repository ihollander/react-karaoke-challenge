import React from 'react';

const Song = ({song, onPlay, displayType}) => {
  const onButtonClick = () => {
    onPlay(song.id)
  }

  return (
    <tr className="song">
      <td>{song.title}</td>
      <td>{song.singer}</td>
      {displayType === 'songs' &&
      <React.Fragment>
        <td>{song.likes}</td>
        <td>{song.dislikes}</td>
        <td>{song.plays}</td>
        <td><button onClick={onButtonClick}>Play</button></td>
      </React.Fragment>}
    </tr>
  )
}

export default Song;
