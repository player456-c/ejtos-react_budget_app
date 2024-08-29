import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

/* <td><FaPlusCircle size='2em' onClick={event=>increaseAllocation(props.name)}></FaPlusCircle></td>
            <td><FaMinusCircle size='2em' onClick={event=>decreaseAllocation(props.name)}></FaMinusCircle></td> */

/* <td><TiPlus size='2em' onClick={increaseAllocation(props.name)}></TiPlus></td>
            <td><TiMinus size='2em' onClick={decreaseAllocation(props.name)}></TiMinus></td> */

/* <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td>
            <td><button onClick={event=> decreaseAllocation(props.name)}>-</button></td> */

/* <img src="D:\work\work_pictures\jpeg\my_avatar.jpg" alt="Workplace" usemap="#workmap" width="400" height="379"></img>

            <map name="workmap">
                <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm"></area>
                <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm"></area>
                <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm"></area>
            </map> */

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><FaPlusCircle size='2em' style={{color: '#12a339'}} onClick={event=>increaseAllocation(props.name)}></FaPlusCircle></td>
            <td><FaMinusCircle size='2em' style={{color: '#ba1e1e'}} onClick={event=>decreaseAllocation(props.name)}></FaMinusCircle></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
