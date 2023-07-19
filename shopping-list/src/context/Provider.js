import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "./Context";

function Provider({children}){
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const onLogin = (login) => {
    setUser(login);
    navigate('/new');
  }

  const context_value = {
    user,
    onLogin,
  }

  return (
    <Context.Provider value={context_value}>
      {children}
    </Context.Provider>
  )
}

export default Provider;