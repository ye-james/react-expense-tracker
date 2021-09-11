import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext)
 
    const onSubmit = e => {
        e.preventDefault();
        
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Expense Name</label>
                <input type="text" placeholder="Enter text..." required value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    [Expense: '-10', Income: 20]</label
                >
                    <input type="number" placeholder="Enter amount..." required value={amount} onChange={(e) => setAmount(e.target.value) }/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
