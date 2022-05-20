import React, { useState } from "react";
import FormInput from "./FormInput";
import s from "./LogIn.module.css";
import { NavLink, useNavigate} from "react-router-dom";
import Axios from "axios";
import { AuthContext } from "../../authContext/index";

const LogInForm = () => {

  const [values, setValues] = useState({
    email: "",
    password: "",
    require: true,
  });
  const inputs = [
    {
      id: 1,
      name:'email',
      type:'email',
      placeholder:"Введіть Email",
      errorMessage:"Email повинен бути дійсним!",
      label:"Email",
      require:true,
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Введіть пароль",
      errorMessage:
        "Неправильний пароль",
      label: "Пароль",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$",
      require: true,
    },
  ];


  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  let navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault()
    const result = await Axios.post("http://localhost:3001/login", {
        email: values.email,
        password: values.password
    }, {
      withCredentials : true
    })
    alert(result.data.message)
    if(result.data.message === "Успішний вхід!"){
      AuthContext.isLoaded = true 
     navigate('/Main')
    }else{
      AuthContext.isLoaded = false 
      navigate('/LogIn')
    }
     
  }

  return (
    <div className={s.reg_for_volonteer}>
      <div className={s.reg_mar}>
        <form action="/login" method="POST">
          <h1>Вхід</h1>
          <div className={s.input}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
          </div>

          <div className={s.name}>
            <button type="submit" className="button1" onClick={login}>Увійти</button>
          </div>

          <p className={s.bott_ref}>
            Ще не маєш опублікового запису? <NavLink to="/Registration">Зареєструватися</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogInForm;
