import React from 'react';

import style from './Submitbuttom.module.css'

const Submitbuttom = ({ text }) => {
  return (
    <div>
      <buttom className={style.btn}>{text}</buttom>
    </div>
  )
}

export default Submitbuttom
