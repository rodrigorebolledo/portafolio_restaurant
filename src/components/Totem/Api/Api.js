import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:80/',
    // params: {
    //     apikey: initialData.publicKey,
    //     hash: hasher(),
    //     ts: getTimeStamp()
    // }
});

const deleteById = (url, id) => {
    return api.delete(`${url}/${id}`).then(res => {
        return true;
    }).catch((err) => {
        console.log(err);
        return false;
    })
}



const editById = (url, id, objeto) => {
    console.log(objeto)
    return api.put(`${url}/${id}`, objeto)
        .then((res) => {
            return true;
        }).catch((err) => {
            return false;
        })
}

export { deleteById, editById };