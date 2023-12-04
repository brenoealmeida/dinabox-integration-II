import { useContext, useState } from "react";
import Button from "../components/Button";
import Form from '../components/Form';
import Input from '../components/Input';
import Context from "../context/Context";
// import projectsApi from "../services/projectsApi";

function NewList() {
    const { setIds, submitNewList } = useContext(Context);

    const handleChange = ({target}) => {
        const { name, value } = target;
        setIds((prev) => {
            return {
                ...prev,
                [name]: value,
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitNewList();
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