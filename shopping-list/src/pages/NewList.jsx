import { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import Form from '../components/Form';
import Input from '../components/Input';
import Button from "../components/Button";

function NewList() {
    const { token } = useContext(Context);
    const [inputs, setInputs] = useState([0]);

    useEffect(() => {
        console.log(token);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = () => {
        
    }

    const handleClick = () => {
        setInputs((prev) => {
            const num = prev.length;
            return {
                ...prev,
                num
            }
        })
    }

    return (
        <section>
            <h2>Criar nova lista de compras:</h2>
            <Form onSubmit={handleSubmit}>
                {
                    inputs.map((index) => (
                        <Input placeholder='Digite o ID do projeto'
                            type='number'
                            name={`id_${index}`}
                            key={index}
                            onChange={handleChange}
                            />
                    ))
                }
                <Button type="button" onClick={handleClick}>Adicionar projeto à lista</Button>
                <Button type="submit">Enviar</Button>
            </Form>
        </section>
    )
}

export default NewList;