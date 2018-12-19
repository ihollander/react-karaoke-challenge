import React from 'react'

import NavBar from '../components/NavBar'
import Filter from '../components/Filter';
import SongList from '../components/SongList';

export default class Sidebar extends React.Component {
  state = {
    filterTerm: "",
    display: 'songs'
  }

  onFilterChange = filterTerm => {
    this.setState({ filterTerm })
  }

  showSongs = () => {
    this.setState({ display: 'songs' })
  }

  showQueue = () => {
    this.setState({ display: 'queue' })
  }

  get songList() {
    return this.state.filterTerm === "" ? this.props.songs : this.props.songs.filter(s => s.title.toLowerCase().includes(this.state.filterTerm.toLowerCase()))
  }

  render() {
    return (
      <div className="sidebar">
        <NavBar showSongs={this.showSongs} showQueue={this.showQueue} />
        <Filter filterTerm={this.state.filterTerm} onFilterChange={this.onFilterChange} />
        {this.state.display === 'songs'
        ? <SongList displayType="songs" onPlay={this.props.onPlay} songs={this.songList} />
        : <SongList displayType="queue" songs={this.props.queue} />}
      </div>
    );
  }
}