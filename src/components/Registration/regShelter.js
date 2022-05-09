import "./registr.css";
import FormInput from "./FormInput";
import React, {useEffect, useState} from "react";
import Axios from "axios";
import s from './registr.css';
import {useNavigate} from "react-router-dom";

const App = () => {

    const [values, setValues] = useState({
        username: "",
        city: "",
        email: "",
        phonenumber: "",
        password: "",
        confirmPassword: "",
        require:true,
    });
    const inputs=[
        {
            id:1,
            name:'username',
            type:'text',
            placeholder:"Введіть назву притулку",
            errorMessage:"Ім'я та прізвище не може містити спеціальні символи та цифри!",
            label:"Назва притулку",
            pattern:"^[A-Za-zА-Яа-яґҐІіЇїЄє'’ʼ\\s-]{5,20}$",
            require:true,
        },
        {
            id:2,
            name:'city',
            type:'text',
            placeholder:"Введіть назву міста",
            errorMessage:"Місто не може містити спеціальні символи та цифри!",
            label:"Місто",
            pattern:"^[A-Za-zА-Яа-яґҐІіЇїЄє'’ʼ\\s-]{5,20}$",
            require:true,
        },
        {
            id:3,
            name:'email',
            type:'email',
            placeholder:"Введіть Email",
            errorMessage:"Email повинен бути дійсним!",
            label:"Email",
            require:true,

        },
        {
            id:4,
            name:'phonenumber',
            type:'tel',
            placeholder:"+380123456789",
            errorMessage:"Некоректно введений номер телефону!",
            label:"Номер телефону",
            pattern:"^\\+?3?8?(0[\\s\\.-]\\d{2}[\\s\\.-]\\d{3}[\\s\\.-]\\d{2}[\\s\\.-]\\d{2}",
            minlength:"13",
            maxlength:"13",
            require:true,
        },
        {
            id:5,
            name:'password',
            type:'password',
            placeholder:"Введіть пароль",
            errorMessage:"Пароль повинен мати 8-16 символів і містити  велику літеру,цифру та  спеціальний символ! ",
            label:"Пароль",
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$",
            require:true,
        },
        {
            id:6,
            name:'confirmPassword',
            type:'password',
            placeholder:"Повторіть пароль",
            errorMessage:"Паролі не співпадають!",
            label:"Підтвердження паролю",
            pattern:values.password ,
            require:true,
        }
    ]

    const onChange=(e)=>{
        setValues({...values,[e.target.name]: e.target.value})
    }
    //const isreg = true

    const navigate = useNavigate()

    const registration = async (e) => {
        e.preventDefault()
        const result = await Axios.post("http://localhost:3001/registration", {
            nameShelter: values.username,
            city: values.city,
            email: values.email,
            phone: values.phonenumber,
            password: values.password
        }, {
            withCredentials : true
          })
          alert(result.data.message)
          if(result.data.message === "Реєстрація успішна!"){
            navigate('/Main')
          }else{
            navigate('/Registration')
          }    
    }

    return (
        <div className="reg-for-volonteer">
            <div className="reg-mar">
                <form method="POST" action="/Registration" >
                <h1>Реєстрація</h1>
                    <div className="input-reg">
                        {inputs.map((input)=>(
                        <FormInput key={input.id}{...input} value={values[input.name]} onChange={onChange}/>
                        ))}
                    </div>

                 <div className={s.name}>
                      <button type="submit" className="button1" onClick={registration}>Зареєструватися</button>
                </div> 
                
                    <p className='bott-ref'>Вже маєте обліковий запис? <a href="login">Ввійти</a></p>
                 </form>
            </div>
        </div>
    );
};

export default App;
