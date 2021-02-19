import React, { Component } from 'react'
import './App.css';
import request from 'superagent';

export default class App extends Component {
  state = {
    albums: [],
  }
  componentDidMount = async () => {
    const AlbumList = await request.get('https://dummy-data-lab.herokuapp.com/albums');

    this.setState({
      albums: AlbumList.body.results,
    })
  }

  render() {
    console.log(this.state.albums)
    return (
      <div> {
        this.state.albums.map((album) =>
          <div key={album.name}>
            {album.name}: {album.description}
          </div>)
      }
      </div>
    )
  }
}

