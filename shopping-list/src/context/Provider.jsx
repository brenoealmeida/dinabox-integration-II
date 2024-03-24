import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import dataToShoppingList from "../helpers/projectDataProcessor";
import loginApi from "../services/loginApi";
import projectsApi from "../services/projectsApi";
import Context from "./Context";

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
    const projects = Object.values(ids).map(async (id) => {
      const data = await projectsApi(token, id);
      console.log(data);
      return data;
    })
    return dataToShoppingList(projects);
  }

  const submitNewList = useCallback( async () => {
    console.log('inside submitNewList function');
    setLoading(true)
    if(Object.keys(ids).length === 0) {
      navigate('/');
    }
    const result = await getProjectsById(token, ids);

    console.log(result)

    setLoading(false);
    navigate('/list');
    console.log('finalizou api');
  }, [navigate, setLoading, ids, token])

  const context_value = useMemo(() => ({
    user,
    onLogin,
    token,
    loading,
    setLoading,
   // getProjectsById,
    setIds,
    ids,
    submitNewList,
  }), [user, onLogin, token, loading, ids, submitNewList])

  return (
    <Context.Provider value={context_value}>
      {children}
    </Context.Provider>
  )
}

export default Provider;