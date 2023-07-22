import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginApi from "../services/loginApi";
import projectsApi from "../services/projectsApi";
import Context from "./Context";
import dataToShoppingList from "../helpers/projectDataProcessor";

function Provider({children}){
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState();
  const [ids, setIds] = useState({})
  const navigate = useNavigate();

  const onLogin = useCallback(async (login) => {
    setLoading(true);
    setUser(login);
    const result = await loginApi(login);
    setToken(result);
    setLoading(false);
    navigate('/new');
  }, [navigate, setUser, setLoading, setToken])

  const getProjectsById = async (token, ids) => {
    setLoading(true);
    console.log(ids);
    const result = await Object.values(ids).map(async (id) => {
      const data = await projectsApi(token, id);
      return dataToShoppingList(data);
    })
    setLoading(false);
    return result;
  }

  const context_value = useMemo(() => ({
    user,
    onLogin,
    token,
    loading,
    getProjectsById,
    setIds,
    ids,
  }), [user, onLogin, token, loading, ids])

  return (
    <Context.Provider value={context_value}>
      {children}
    </Context.Provider>
  )
}

export default Provider;