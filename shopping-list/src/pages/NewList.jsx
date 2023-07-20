import { useContext, useEffect } from "react";
import Context from "../context/Context";

function NewList() {
    const { token } = useContext(Context)

    useEffect(() => {
        console.log(token);
    }, [])

    return (
        <div>
            Página para nova lista
        </div>
    )
}

export default NewList;