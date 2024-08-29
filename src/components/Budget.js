import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {

    //setNewBudget(event.target.value);
    //const [newBudget, setNewBudget] = useState(budget);


    const {dispatch, budget, currency, /* expenses */}=useContext(AppContext);

    const setBudget=(newBudget)=>{
        /* const totalExpenses=expenses.reduce((total, item)=>{
            return (total+=item.cost)
        },0);
        console.log(totalExpenses);
        if(newBudget>20000){
            alert("You are not allowed to have more than 20000 units of money in the budget.");
        }else if(newBudget<totalExpenses){
            alert("Hey, your budget can't be lower than your total expenses!");
        }else{
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget
            });
        }; */
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        });
    };


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} 
                <input required='required'
                    type="number"
                    step="10"
                    style={{marginLeft: '5px'}}
                    max={20000}
                    value={budget}
                    onChange={(event)=>setBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};
export default Budget;
