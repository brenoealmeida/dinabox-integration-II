import axios from 'axios';

async function projectsApi(token) {
    const URL = 'https://www.dinabox.app/api/v1/project'
    
    const response = await axios.get(URL, {

    })
        .then((response) => {
            return response;
        })
        .catch((e) => {
            console.log(e.message);
            alert('Tente Novamente');
        })
    
    return response.data.token;
}

export default projectsApi;