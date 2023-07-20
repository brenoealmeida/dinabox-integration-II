import axios from 'axios';

async function loginApi(login) {
    const URL = 'https://www.dinabox.app/api/v1/token'
    const { email, password } = login;
    const params = new URLSearchParams();
    params.append('username', email);
    params.append('password', password);

    const response = await axios.post(URL, params)
        .then((response) => {
            console.log(response.data.token);
            return response;
        })
        .catch((e) => {
            console.log(e.message);
            alert('Tente Novamente');
        })
    
    return response.data.token;
}

export default loginApi;