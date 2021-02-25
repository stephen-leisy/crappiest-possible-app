import React, { Component } from 'react'
// import request from 'superagent';
import { Link } from 'react-router-dom';
import { getAlbums } from './api-utils';
import Spinner from './Spinner.js';


export default class Listpage extends Component {
    state = {
        albums: [],
        loading: false,
    }
    componentDidMount = async () => {
        this.setState({ loading: true, });
        const AlbumList = await getAlbums();

        this.setState({
            albums: AlbumList,
            loading: false,
        })
    }

    render() {

        return (
            <div className="main-list-page">
                {this.state.loading && <Spinner />}
                {
                    this.state.albums.map((album) =>

                        <div key={album.name} className="album-item">
                            <Link className="album-link" to={`/albums/${album.id}`}>
                                {album.name}: {album.instock ? 'In Stock!' : 'Out Of Stock'}

                            </Link>
                        </div>)
                }

            </div>
        )
    }
}
