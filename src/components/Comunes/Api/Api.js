import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:80/',
    // params: {
    //     apikey: initialData.publicKey,
    //     hash: hasher(),
    //     ts: getTimeStamp()
    // }
});


const apiSetStateFromUrl = (url, setState, setLoading) => {

    return api.get(url).then(res => {
        setState(res.data);
        setLoading(false);
    }).catch((err) => {
        console.log(err);
        return;
    });




}

export { api, apiSetStateFromUrl };