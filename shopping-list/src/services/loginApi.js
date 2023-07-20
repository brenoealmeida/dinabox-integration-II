import axios from 'axios';

function loginApi(login) {
    const URL = 'https://www.dinabox.app/api/v1/token'
    const { email, password } = login;
    const params = new URLSearchParams();
    params.append('username', email);
    params.append('password', password)

    axios.post(URL, params)
        .then((response) => {
            console.log(response);
        })
}

export default loginApi;