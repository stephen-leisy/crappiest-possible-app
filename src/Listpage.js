import React, { Component } from 'react'
import request from 'superagent';
import { Link } from 'react-router-dom';

export default class Listpage extends Component {
    state = {
        albums: [],
    }
    componentDidMount = async () => {
        const AlbumList = await request.get('https://agile-tundra-66322.herokuapp.com/albums');

        this.setState({
            albums: AlbumList.body,
        })
    }

    render() {
        console.log(this.state.albums)
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
