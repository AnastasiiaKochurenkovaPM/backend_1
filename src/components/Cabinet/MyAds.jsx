import React, {useEffect, useState} from 'react'
import s from './Cabinet.module.css'
import axios from 'axios'

const MyAds = () => {

  const [data, setData] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:3001/AllShel', {
     withCredentials : true
   })
    .then(res => {
     setData(res.data)
    }).catch(err => console.log(err))
   },[])

  return (
    <div className={s.ads}>
      <h2 className={s.h2}>Мої оголошення</h2>
    

      {/* <div className={s.animals}>
      <div className={s.img}>
      
      <div className={s.whiteBlock}>
        <div>{data.nameAnimal}</div>
        <div>{data.age}</div>
      </div>
      </div>
      </div> */}
    </div>


  );
}

export default MyAds