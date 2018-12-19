import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
//import songs from '../data/songs';
import KaraokeAPI from '../apis/karaokeApi'


class KaraokeContainer extends Component {
  state = {
    songs: [],
    filterTerm: "",
    selectedSong: null
  }

  componentDidMount() {
    KaraokeAPI.getSongs()
      .then(songs => {
        this.setState({ songs })
      })
  }

  onFilterChange = filterTerm => {
    this.setState({ filterTerm })
  }

  onPlay = id => {
    if (this.state.selectedSong && this.state.selectedSong.id === id) return

    const selectedSong = this.state.songs.find(s => s.id === id)
    KaraokeAPI.playSong(id)
      .then(data => {
        const songs = this.state.songs.map(song => song.id === id ? {...song, plays: data.plays} : song)
        this.setState({ selectedSong, songs })
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

  get songList() {
    return this.state.filterTerm === "" ? this.state.songs : this.state.songs.filter(s => s.title.toLowerCase().includes(this.state.filterTerm.toLowerCase()))
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter filterTerm={this.state.filterTerm} onFilterChange={this.onFilterChange} />
          <SongList onPlay={this.onPlay} songs={this.songList} />
        </div>
        <KaraokeDisplay onLikeClick={this.onLikeClick} onDislikeClick={this.onDislikeClick} song={this.state.selectedSong} />
      </div>
    );
  }
}

export default KaraokeContainer;
