import React from 'react';

const Song = ({song, onPlay}) => {
  const onButtonClick = () => {
    onPlay(song.id)
  }

  return (
    <tr className="song">
      <td>{song.title}</td>
      <td>{song.singer}</td>
      <td>{song.likes}</td>
      <td>{song.dislikes}</td>
      <td>{song.plays}</td>
      <td><button onClick={onButtonClick}>Play</button></td>
    </tr>
  )
}

export default Song;
