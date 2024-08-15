import { useState,useReducer } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'

import { GlobalProvider } from './context/GlobalState'

function reducer(state,action){
  console.log(state,action);
  
  switch(action.type){
    case "increment":
      return ({ ...state, count : state.count + 1});

    case "decrement":
      return ({ ...state, count : state.count - 1});
  }
}

const initialState = {count : 0}

function App() {

  const [state,dispatch] = useReducer(reducer,initialState)

  function handleIncrement(){
    dispatch({type : "increment"});
  }

  function handleDecrement(){
    dispatch({type : "decrement"})
  }

  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
      <div>
        <h1>Count : {state.count}</h1>
        <button onClick={handleIncrement}>Incrememt</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </GlobalProvider>
  )
}

export default App
