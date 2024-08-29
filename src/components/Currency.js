import React, {useContext} from 'react';
import { AppContext } from "../context/AppContext";

const Currency=()=>{
    const {dispatch}=useContext(AppContext);

    const chgCurrency=(newCurrency)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };


    return(
        <div className='alert alert-secondary'>
            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                <select style={{ backgroundColor:'#94e59b', color:'white' }} className="custom-select" id="inputGroupSelect03" onChange={(event) => chgCurrency(event.target.value)}>
                    <option value="£" name="Pound">£ Pound</option>
                    <option value="$" name="Dollar">$ Dollar</option>
                    <option value="€" name="Euro">€ Euro</option>
                    <option value="₹" name="Ruppee">₹ Ruppee</option>
                </select>
            </div>
        </div>
        
    );

};

export default Currency;