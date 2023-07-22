import { useContext, useEffect } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";

function ShoppingList() {
    const { getProjectsById, token, ids, loading } = useContext(Context)
    const navigate = useNavigate();

    useEffect(() => {
        if(Object.keys(ids).length === 0) {
            navigate('/');
        }
        getProjectsById(token, ids);
    },[])

    return (
        <main>
            <h2>Lista de Compras por Projeto:</h2>
            {
                loading ? <p>Aguarde: Carregando...</p> : null
            }
        </main>
    )
}

export default ShoppingList;