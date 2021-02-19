import React, { Component } from 'react'
import request from 'superagent';
import { Link } from 'react-router-dom';

export default class Listpage extends Component {
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
        console.log(this.state.albums[0])
        return (
            <div>
                {
                    this.state.albums.map((album) =>

                        <div key={album.name}>
                            <Link to={`/${album.id}`}>
                                {album.name}: {album.description}

                            </Link>
                        </div>)
                }

            </div>
        )
    }
}
