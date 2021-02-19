import React, { Component } from 'react'
import request from 'superagent';

export default class Albumpage extends Component {
    state = {
        albumData: {},
    }

    componentDidMount = async () => {
        const AlbumList = await request.get(`https://dummy-data-lab.herokuapp.com/albums/${this.props.match.params.albumId}`);
        console.log(AlbumList)
        this.setState({
            albumData: AlbumList.body.results
        })
    }

    render() {
        console.log(this.state.albumData)
        return (
            <div>
                <h1>{this.state.albumData.name}</h1>
                <p>ID: {this.state.albumData.id}</p>
                <p>Description: {this.state.albumData.description}</p>
                <p>Genre: {this.state.albumData.category}</p>
                <p>${this.state.albumData.price}</p>
                <p>In stock? {this.state.albumData.instock}</p>

            </div>
        )
    }
}
