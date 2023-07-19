import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import styles from './Login.module.css';

import { useState } from 'react';

function Login() {

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

    const handleSubmit = (e) => {
        e.preventDefault();
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
            </Form>
            <Button type='submit' disabled={disabled}>Enviar</Button>
        </section>
    )
}

export default Login;