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
            if (setLoading !== undefined) {
                setLoading(false)
            }
        }).catch((err) => {
            console.log(err);
            return;
        });
    } else {
        return api.get(url).then(res => {
            setState(res.data);
            if (setLoading !== undefined) {
                setLoading(false)
            }
        }).catch((err) => {
            console.log(err);
            return;
        });
    }





}


const apiGetElements = (url) => {

    return api.get(url).then(res => {
        return res.data;
    }).catch((err) => {
        console.log(err);
        return;
    });
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

const deleteById = (url, id) => {
    return api.delete(`${url}/${id}`).then(res => {
        return true;
    }).catch((err) => {
        console.log(err);
        return false;
    })
}



const editById = (url, id, objeto) => {
    return api.put(`${url}/${id}`, objeto)
        .then((res) => {
            return true;
        }).catch((err) => {
            return false;
        })
}


export { api, apiSetStateFromUrl, addElment, deleteById, editById, apiGetElements };