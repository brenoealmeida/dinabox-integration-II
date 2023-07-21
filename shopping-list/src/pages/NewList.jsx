import { useEffect, useState, useContext } from "react";
import Context from "../context/Context";
import Form from '../components/Form';
import Input from '../components/Input';
import Button from "../components/Button";
import projectsApi from "../services/projectsApi";

function NewList() {
    const { token } = useContext(Context);
    const [ids, setIds] = useState({})
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    const handleChange = ({target}) => {
        const { key, value } = target;
        setIds((prev) => {
            return {
                ...prev,
                [key]: value,
            }
        })
    }
    
    const [inputs, setInputs] = useState([(
        <Input placeholder='Digite o ID do projeto'
            type='number'
            name={`id_0`}
            key={0}
            onChange={handleChange}
            />
        )]);

    const handleClick = () => {
        const num = inputs.length;
        const inputTemplate = (<Input placeholder='Digite o ID do projeto'
            type='number'
            name={`id_${num}`}
            key={num}
            onChange={handleChange}
        />)
        setInputs((prev) => {
            return [
                ...prev,
                inputTemplate
            ]
        })
    }

    useEffect(() => {
        projectsApi(token, '0025124307');
    },[])

    const handleRemoveButton = () => {
        setInputs((prev) => {
            return prev.filter((_e, index) => index != prev.length - 1)
        })
    }

    return (
        <main>
            <h2>Criar nova lista de compras:</h2>
            <Form onSubmit={handleSubmit}>
                {
                   inputs.map((e) => {
                        return e;
                   })
                }
                <Button type="button" onClick={handleClick}>Adicionar projeto à lista</Button>
                <p></p>
                <Button type="button" onClick={handleRemoveButton}>Remover último projeto</Button>
                <p></p>
                <Button type="submit">Enviar</Button>
            </Form>
        </main>
    )
}

export default NewList;