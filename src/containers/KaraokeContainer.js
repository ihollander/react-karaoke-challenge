import React, { Component } from 'react';

import KaraokeAPI from '../apis/karaokeApi'
import KaraokeDisplay from '../components/KaraokeDisplay';

import Sidebar from '../components/Sidebar';

class KaraokeContainer extends Component {
  state = {
    selectedSong: null,
    songs: [],
    queue: []
  }

  componentDidMount() {
    KaraokeAPI.getSongs()
      .then(songs => {
        this.setState({ songs })
      })
  }

  updateSelectedSong = (selectedSong) => {
    this.setState({ selectedSong })
  }

  onPlay = id => {
    const selectedSong = this.state.songs.find(s => s.id === id)
    if (!this.state.selectedSong) { // no selected song, play immediately
      this.setState({ selectedSong })
    } else if (!this.state.queue.includes(selectedSong) && this.state.selectedSong !== selectedSong) { // add to queue
      const queue = [...this.state.queue, selectedSong]
      this.setState({ queue })
    }
  }

  onFinish = id => {
    // mark played when song is finished, and remove from the queue
    KaraokeAPI.playSong(id)
      .then(data => {
        const songs = this.state.songs.map(song => song.id === id ? {...song, plays: data.plays} : song)
        const selectedSong = this.state.queue[0]
        const queue = this.state.queue.filter(song => song !== selectedSong)
        this.setState({ songs, selectedSong, queue })
      }) 
  }

  onLikeClick = id => {
    KaraokeAPI.likeSong(id)
      .then(data => {
        const songs = this.state.songs.map(song => song.id === id ? {...song, likes: data.likes} : song)
        this.setState({ songs })
      })
  }

  onDislikeClick = id => {
    KaraokeAPI.dislikeSong(id)
      .then(data => {
        const songs = this.state.songs.map(song => song.id === id ? {...song, dislikes: data.dislikes} : song)
        this.setState({ songs })
      })
  }

  render() {
    return (
      <div className="karaoke-container">
        <Sidebar onPlay={this.onPlay} songs={this.state.songs} selectedSong={this.state.selectedSong} queue={this.state.queue} />
        <KaraokeDisplay onFinish={this.onFinish} onLikeClick={this.onLikeClick} onDislikeClick={this.onDislikeClick} song={this.state.selectedSong} />
      </div>
    );
  }
}

export default KaraokeContainer;
