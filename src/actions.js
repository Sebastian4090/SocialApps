import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_SOCIALS_PENDING, 
    REQUEST_SOCIALS_SUCCESS, 
    REQUEST_SOCIALS_FAILED
} from "./constants";

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

export const requestSocials = () => (dispatch) => {
    dispatch({ type: REQUEST_SOCIALS_PENDING });

    let dataArray = [];
    const urls = ['https://my-json-server.typicode.com/Sebastian4090/SocialsDB/Socials',
                  'https://my-json-server.typicode.com/Sebastian4090/SocialsDB/Socials2'];
    
    Promise.all(urls.map(link => {
        return fetch(link).then(response => response.json());
    }))
    .then(data => {
        for (let i=0;i<data[0].length;i++) {
            dataArray.push(data[0][i])
        }
        for (let i=0;i<data[1].length;i++) {
            dataArray.push(data[1][i])
        }
        dispatch( { type: REQUEST_SOCIALS_SUCCESS, payload: dataArray })
    })
        .catch(error => dispatch({ type: REQUEST_SOCIALS_FAILED, payload: error }))
}