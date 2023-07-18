// import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import NewList from './pages/NewList'
import AllLists from './pages/AllLists'
import ShoppingList from './pages/ShoppingList'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route exact path="/lists/:id" element={ ShoppingList } />
        <Route exact path="/lists" element={ AllLists } />
        <Route path="/new" element={ NewList } />
        <Route exact path="/" element={ <Login /> } />
      </Routes>
    </>
  )
}

export default App
