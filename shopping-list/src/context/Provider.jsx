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

  const submitNewList = useCallback(async () => {
    console.log('inside submitNewList function');
    setLoading(true)
    if(Object.keys(ids).length === 0) {
      navigate('/');
    }

    const idsArray = Object.values(ids);

    const data = await Promise.all(idsArray.map(async (id) => {
      const result = await projectsApi(token, id);
      return result;
    }));

    console.log(data);
    console.log('finalizou api');

    data.map((project) => {
      return dataToShoppingList(project);
    })

    setLoading(false);
    navigate('/list');
  }, [navigate, setLoading, ids, token])

  const context_value = useMemo(() => ({
    user,
    onLogin,
    token,
    loading,
    setLoading,
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