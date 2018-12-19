import React from 'react';
import Song from './Song'

const SongList = ({ displayType, songs, onPlay }) => {

  const renderSongs = () => {
    return songs.map(song => <Song displayType={displayType} key={song.id} song={song} onPlay={onPlay} /> )
  }
  
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          {displayType === 'songs' &&
          <React.Fragment>
            <th>Likes</th>
            <th>Dislikes</th>
            <th>Plays</th>
            <th>▶</th>
          </React.Fragment>}
        </tr>

        {renderSongs()}
        
      </tbody>
    </table>
  )
}

export default SongList;
