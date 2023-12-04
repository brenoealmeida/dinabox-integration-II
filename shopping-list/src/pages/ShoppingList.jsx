import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";

function ShoppingList() {
    const {  ids } = useContext(Context)
    const navigate = useNavigate();

    useEffect(() => {
        if(Object.keys(ids).length === 0) {
            navigate('/');
        }
    },[])

    return (
        <main>
            <h2>Lista de Compras por Projeto:</h2>
        </main>
    )
}

export default ShoppingList;