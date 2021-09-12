import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios'
//Initial State
const initialState = {
    transactions: [
        //Dummy data
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 }
    ],
    error: null,
    loading: true
}

//create context
export const GlobalContext = createContext(initialState)


//Create provider component for other components to use
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions 

    const getTransactions = async () => {
        try {
            const { data } = await axios.get('/transactions');
            
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: data.data
            });
            
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }
    const deleteTransaction = id => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    const addTransaction = transaction => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        errors: state.errors,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
    }}>
        { children }
    </GlobalContext.Provider>)
}