import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:80/',
    // params: {
    //     apikey: initialData.publicKey,
    //     hash: hasher(),
    //     ts: getTimeStamp()
    // }
});

const apiSetStateFromUrl = (url, setState) => {

    return api.get(url).then(res => {
        setState(res.data);
    }).catch((err) => {
        console.log(err);
        return;
    });




}


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
            console.log(id);
            console.log(err);
            return false;
        })
}


const addElment = (url, objeto) => {
    console.log(objeto)
    return api.post(`${url}`, objeto)
        .then((res) => {
            return true;
        }).catch((err) => {
            console.log(err);
            return false;
        })
}


export { apiSetStateFromUrl, deleteById, editById, addElment };