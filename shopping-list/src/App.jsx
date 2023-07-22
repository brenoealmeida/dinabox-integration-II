// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AllLists from './pages/AllLists'
import Login from './pages/Login'
import NewList from './pages/NewList'
import ShoppingList from './pages/ShoppingList'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route exact path="/list" element={ <ShoppingList /> } />
        <Route exact path="/allLists" element={ <AllLists /> } />
        <Route path="/new" element={ <NewList /> } />
        <Route exact path="/" element={ <Login /> } />
      </Routes>
    </>
  )
}

export default App
