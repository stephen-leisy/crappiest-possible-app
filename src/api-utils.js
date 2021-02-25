import request from 'superagent';

const URL = 'https://agile-tundra-66322.herokuapp.com';

export async function makeAlbum(album) {
    const response = await request
        .post(`${URL}/albums/`).send(album);
    return response.body;
}

export async function getAlbums() {
    const response = await request.get(`${URL}/albums/`);
    return response.body;
}

export async function updateAlbum(id, album) {
    const { body } = await request.put(`${URL}/albums/${id}`).send(album);
    return body;
}

export async function getAlbum(id) {
    const { body } = await request.get(`${URL}/albums/${id}`);
    return body;
}

export async function deleteAlbum(id) {
    const { body } = await request.delete(`${URL}/albums/${id}`);
    return body;
}