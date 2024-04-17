import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import dataToShoppingList from "../helpers/projectDataProcessor";
import mergeElements from "../helpers/listProcessor";
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
    setLoading(true)
    if(Object.keys(ids).length === 0) {
      navigate('/');
    }

    const idsArray = Object.values(ids);

    const data = await Promise.all(idsArray.map(async (id) => {
      const result = await projectsApi(token, id);
      return result;
    }));

    let allLists = [];

    const allProjects = data.map((project) => {
      const list = dataToShoppingList(project);
      allLists = [...allLists, ...list.shoppingList];
      return list;
    })

    const mergedList = mergeElements(allLists);

    const groupedList = Object.groupBy(mergedList, ({category}) => category);

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