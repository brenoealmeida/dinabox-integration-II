import axios from 'axios';

async function projectsApi(token, id) {
    const URL = 'https://www.dinabox.app/api/v1/project'
    
    const response = await axios.get(URL, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            project_id: id,
        }
    })
        .then((response) => {
            return response;
        })
        .catch((e) => {
            console.log(e.message);
            alert('Tente Novamente');
        })
    
    return response.data;
}

export default projectsApi;