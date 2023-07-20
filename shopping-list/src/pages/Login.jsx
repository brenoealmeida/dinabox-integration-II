import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import Context from '../context/Context';
import styles from './Login.module.css';

import { useContext, useState } from 'react';

function Login() {
    const { onLogin, loading } = useContext(Context);

    const [login, setLogin] = useState({
        email: '',
        password: '',
    });
    const disabled = !login.email || !login.password;

    const handleChange = ({target}) => {
        const { name, value } = target
        setLogin((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        await onLogin(login);
    }

    return (
        <section className={styles.container}>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Input placeholder='Digite seu e-mail'
                    type='email'
                    name='email'
                    required
                    onChange={handleChange}
                    />
                <Input placeholder='Digite sua senha'
                    type='password'
                    name='password'
                    required
                    onChange={handleChange}
                    />
                <Button type="submit" disabled={disabled}>Enviar</Button>
            </Form>
            { loading ? <p>Carregando...</p> : null }
        </section>
    )
}

export default Login;