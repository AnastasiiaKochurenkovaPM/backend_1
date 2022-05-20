import React, {useState} from 'react';
import './FormInput1.css'

function FormInput(props) {
    const [focused,setFocused]=useState(false)
    const {label,errorMessage,onChange,id, ...inputProps}=props;
    const handleFocus = (e) => {
        setFocused(true);
    };
    return (
        <div className="formInput1">
            <label>{label}</label>
            <input className="input1" {...inputProps} onChange={onChange} required onBlur={handleFocus} onFocus={()=>inputProps.name==="confirmPassword"&&setFocused(true)} focused={focused.toString()}/>
            <span className="error">{errorMessage}</span>
        </div>
    );
}

export default FormInput;