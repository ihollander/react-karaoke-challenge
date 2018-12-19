import React from 'react';
import Song from './Song'

const SongList = ({ songs, onPlay }) => {

  const renderSongs = () => {
    return songs.map(song => <Song key={song.id} song={song} onPlay={onPlay} /> )
  }
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>Likes</th>
          <th>Dislikes</th>
          <th>Plays</th>
          <th>▶</th>
        </tr>

        {renderSongs()}
        
      </tbody>
    </table>
  )
}

export default SongList;
