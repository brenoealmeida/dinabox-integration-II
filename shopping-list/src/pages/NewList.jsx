import { useEffect, useState, useContext } from "react";
import Context from "../context/Context";
import Form from '../components/Form';
import Input from '../components/Input';
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
// import projectsApi from "../services/projectsApi";

function NewList() {
    const { token } = useContext(Context);
    // const [ids, setIds] = useState({})
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!token) { 
            navigate('/')
        }
    }, [])

    const handleChange = ({target}) => {
        const { key, value } = target;
        /* setIds((prev) => {
            return {
                ...prev,
                [key]: value,
            }
        }) */
    }
    
    const [inputs, setInputs] = useState([(
        <Input placeholder='Digite o ID do projeto'
            type='number'
            name={`id_0`}
            key={0}
            onChange={handleChange}
            />
        )]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleAddButton = () => {
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
                <Button type="button" onClick={handleAddButton}>Adicionar projeto à lista</Button>
                <p></p>
                <Button type="button" onClick={handleRemoveButton}>Remover último projeto</Button>
                <p></p>
                <Button type="submit">Enviar</Button>
            </Form>
        </main>
    )
}

export default NewList;