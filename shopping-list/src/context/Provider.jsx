import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "./Context";

function Provider({children}){
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const onLogin = useCallback((login) => {
    setUser(login);
    navigate('/new');
  }, [navigate, setUser])

  const context_value = useMemo(() => ({
    user,
    onLogin
  }), [user, onLogin])

  return (
    <Context.Provider value={context_value}>
      {children}
    </Context.Provider>
  )
}

export default Provider;