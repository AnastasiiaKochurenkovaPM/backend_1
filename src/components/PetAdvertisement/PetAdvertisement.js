import './PetAdvertisement.css';
import React from "react";
import { useState } from 'react';
import FormInput1 from "./FormInput1";
import FormInput from "../Registration/FormInput";
import Photo from "./photoAdd";
import {useNavigate} from "react-router-dom";
import axios from "axios";


const PetAdvertisement = () => {
    const [values, setValues] = useState({
        name: "",
        require:true,
    });
    const [values2, setValues2] = useState({
        username: "",
        city:"",
        phonenumber: "",
        require:true,
    });

    const inputs=[
        {
            id:1,
            name:'name',
            type:'text',
            placeholder:"Введіть ім'я тварини",
            errorMessage:"Ім'я не може містити спеціальні символи та цифри!",
            label:"Ім'я",
            pattern:"^[A-Za-zА-Яа-яґҐІіЇїЄє'’ʼ\\s-]{2,20}$",
            require:true,
        }
    ]

    const inputs2=[
        {
            id:1,
            name:'username',
            type:'text',
            placeholder:"Введіть Ваше ім'я",
            errorMessage:"Ім'я контактної особи не може містити спеціальні символи та цифри!",
            label:"Ім'я контактної особи",
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
        }
    ]

    const onChange=(e)=>{
        setValues({...values,[e.target.name]: e.target.value})
    }
    const onChange2=(e)=>{
        setValues2({...values,[e.target.name]: e.target.value})
    }

    const navigate = useNavigate()

    const createAd = async (e) => {
        e.preventDefault()
        const result = await axios.post("http://localhost:3001/Advert", {
            nameAnimal: values.name,
            nameparson: values.username,
            city: values.city,
            phone: values.phonenumber,
            type: values2.type,
            sex: values2.sex,
            age: values2.age,
            ster: values2.confirm1,
            vac: values2.confirm2,
            img1: Photo.image1,
            img2: Photo.image2,
            img3: Photo.image3

        }, {
            withCredentials : true
          })
          //alert(result.data.message)
          navigate('/Cabinet')
    }

    return (
        <div>
            <h2 className="h2Pet">Додавання оголошення</h2>
        <div className="AddForm">

            <div className="inputData">
                <form>
                    <div className="input-add1">
                        {inputs.map((input)=>(
                            <FormInput className="input-form" key={input.id}{...input} value={values[input.name]} onChange={onChange}/>
                        ))}
                    </div>
                    <div className="select--type-animal">
                        <p className="label-select">Вид тварини</p>
                        <select className="Select-Form" name="type" required="required">
                            <option value="">Оберіть вид тварини</option>
                            <option value="cat">Кіт</option>
                            <option value="dog">Собака</option>
                            <option value="rodent">Гризун</option>
                            <option value="bird">Птаха</option>
                            <option value="other">Інше</option>
                        </select>
                    </div>
                    <div className="select-gender">
                        <p className="label-select">Стать</p>
                        <select className="Select-Form" name="sex" required="required">
                            <option value="">Оберіть стать тварини</option>
                            <option value="cat">Самець</option>
                            <option value="dog">Самка</option>
                            <option value="rodent">Інше</option>
                        </select>
                    </div>
                    <div className="select-age">
                        <p className="label-select">Вік</p>
                        <select className="Select-Form" name="age" required="required">
                            <option value="">Оберіть вікову категорію</option>
                            <option value="cat">0-5 місяців</option>
                            <option value="dog">5-12 місяців</option>
                            <option value="rodent">1-3 роки</option>
                            <option value="bird">3-6 років</option>
                            <option value="other">6 років і більше</option>
                        </select>
                    </div>
            </form>
                <div className="check-boxes">
                    <div>
                        <p className="label-select">Стерилізація</p>
                        <div className="choice">
                            <input className="input-choice" type="radio" value="yes" name="confirm1"/>Так
                            <input className="input-choice" type="radio" value="no" name="confirm1"/>Ні
                        </div>
                    </div>

                    <div>
                        <p className="label-select">Вакцинація</p>
                        <div className="choice">
                            <input className="input-choice" type="radio" value="yes" name="confirm2"/>Так
                            <input className="input-choice" type="radio" value="no" name="confirm2"/>Ні
                        </div>
                    </div>
                </div>
            </div>
                <div className="inputData2">
                    <form>
                        <div className="input-add">
                            {inputs2.map((input)=>(
                                <FormInput1 className="input2-form" key={input.id}{...input} value={values2[input.name]} onChange={onChange2}/>
                            ))}
                        </div>
                    </form>

                    <button type="submit" value="Submit" className="button-add" onClick={createAd}>Опублікувати</button>
                    
                </div>
                <div className="AddPhoto">
                <Photo/>
                </div>
          </div>
        </div>
    );
}

export default PetAdvertisement;