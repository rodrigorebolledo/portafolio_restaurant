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


export { apiSetStateFromUrl, deleteById };