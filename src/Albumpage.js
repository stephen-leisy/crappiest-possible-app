import React, { Component } from 'react';
// import request from 'superagent';
import { deleteAlbum, getAlbum, updateAlbum } from './api-utils.js';
import Spinner from './Spinner.js';

export default class Albumpage extends Component {
    state = {
        albumData: {},
        name: '',
        description: '',
        genre: '',
        genre_id: 1,
        instock: false,
        price: 1,
        loading: false
    }

    componentDidMount = async () => {
        this.setState({ loading: true, })
        const Album = await getAlbum(this.props.match.params.albumId);
        console.log(Album)
        this.setState({
            name: Album.name,
            description: Album.description,
            genre: Album.genre,
            genre_id: Album.genre_id,
            instock: Album.instock,
            price: Album.price,
            loading: false
        })

    }

    handleNameChange = (e) => this.setState({ name: e.target.value })

    handleDescriptionChange = (e) => this.setState({ description: e.target.value })

    handleGenreChange = (e) => this.setState({ genre_id: e.target.value })

    handleInstockChange = () => this.setState({ instock: !this.state.instock })

    handlePriceChange = (e) => this.setState({ price: e.target.value })

    handleSubmit = async (e) => {
        e.preventDefault();
        await updateAlbum(this.props.match.params.albumId, this.state);
        this.props.history.push('/albums');
    }

    handleDelete = async (e) => {
        e.preventDefault();
        await deleteAlbum(this.props.match.params.albumId);
        this.props.history.push('/albums');
    }

    render() {

        return (
            <div className='album-page'>
                { this.state.loading && <Spinner />}
                <form className='album-page-style' onSubmit={this.handleSubmit}>
                    <label>
                        Album name:
                        <input value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Album description:
                        <input value={this.state.description}
                            onChange={this.handleDescriptionChange} />
                    </label>
                    <label>
                        <select value={this.state.genre_id} onChange={this.handleGenreChange} >
                            <option>GENRE</option>
                            <option value={1}>sixties/psych</option>
                            <option value={2}>80s bangers</option>
                            <option value={3}>jazz</option>
                            <option value={4}>soul</option>
                            <option value={5}>slow-core</option>
                        </select>
                    </label>
                    <label>
                        In Stock?
                        <input value={this.state.instock} type="checkbox" onChange={this.handleInstockChange} checked={this.state.instock} />
                    </label>
                    <label>
                        price: $
                        <input type='number' value={this.state.price} onChange={this.handlePriceChange} />
                    </label>
                    <button className='button'>Make Changes</button>
                </form>
                <form onSubmit={this.handleDelete}>
                    <button className='button'>Delete Listing</button>
                </form>
                {/* <h1>{this.state.albumData.name}</h1>

                <p>Description: {this.state.albumData.description}</p>
                <p>Genre: {this.state.albumData.genre}</p>
                <p>${this.state.albumData.price}</p>
                <p>{this.state.albumData.instock ? 'In Stock!' : 'Out Of Stock'}</p> */}

            </div>
        )
    }
}
