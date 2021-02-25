import React, { Component } from 'react';
import { makeAlbum } from './api-utils.js';

export default class Create extends Component {
    state = {
        name: '',
        description: '',
        genre: '',
        genre_id: 1,
        instock: false,
        price: 1


    }

    handleNameChange = (e) => this.setState({ name: e.target.value })

    handleDescriptionChange = (e) => this.setState({ description: e.target.value })

    handleGenreChange = (e) => this.setState({ genre_id: e.target.value })

    handleInstockChange = () => this.setState({ instock: !this.state.instock })

    handlePriceChange = (e) => this.setState({ price: e.target.value })

    handleSubmit = async (e) => {
        e.preventDefault();
        await makeAlbum(this.state);
        this.props.history.push('/albums');
    }

    render() {
        console.log(this.state.price)
        return (
            <div>
                <form className="album-page-style" onSubmit={this.handleSubmit}>
                    <label>
                        Artist Name: Album title:
                        <input value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Album description:
                        <input value={this.state.description}
                            onChange={this.handleDescriptionChange} />
                    </label>
                    <label>
                        <select value={this.state.genre} onChange={this.handleGenreChange}>
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
                        <input value={this.state.instock} type="checkbox" onChange={this.handleInstockChange} />
                    </label>
                    <label>
                        price: $
                        <input type='number' value={this.state.price} onChange={this.handlePriceChange} />
                    </label>
                    <button className='button'>SUBMIT</button>
                </form>


            </div>
        )
    }
}
