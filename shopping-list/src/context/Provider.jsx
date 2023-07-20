import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "./Context";
import loginApi from "../services/loginApi";

function Provider({children}){
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState();
  const navigate = useNavigate();


  const onLogin = useCallback(async (login) => {
    setLoading(true);
    setUser(login);
    const result = await loginApi(login);
    setToken(result);
    setLoading(false);
    navigate('/new');
  }, [navigate, setUser, setLoading, setToken])

  const context_value = useMemo(() => ({
    user,
    onLogin,
    token,
    loading,
  }), [user, onLogin, token, loading])

  return (
    <Context.Provider value={context_value}>
      {children}
    </Context.Provider>
  )
}

export default Provider;