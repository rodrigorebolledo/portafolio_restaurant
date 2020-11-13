import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:80/',
    // params: {
    //     apikey: initialData.publicKey,
    //     hash: hasher(),
    //     ts: getTimeStamp()
    // }
});


const apiSetStateFromUrl = (url, setState, setLoading, id = undefined) => {

    if (id !== undefined) {
        return api.get(url + id).then(res => {
            setState(res.data);
            console.log(res);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            return;
        });
    } else {
        return api.get(url).then(res => {
            setState(res.data);
            console.log(res);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            return;
        });
    }





}

const addElment = (url, objeto) => {
    return api.post(`${url}`, objeto)
        .then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err);
            return false;
        })
}
export { api, apiSetStateFromUrl, addElment };