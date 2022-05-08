import React from "react";
import LogCat from "./LogCat";
import s from "./LogIn.module.css";
import LogInForm from "./LogInForm";

const LogIn = () => {
  return (
    <div className={s.LogIn}>
      <div className={s.form}><LogInForm /></div>
      <div className={s.cat}><LogCat /></div>
    </div>
  );
};

export default LogIn;
