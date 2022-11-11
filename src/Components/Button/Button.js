import React from 'react'
import Text from '../Text/TextComponent'
// import { Styled } from "../global/global"
import './button.css'

const Button = ({buttonText, buttonStyle, textStyle}) => {
  return (
    <div>
      <button className={buttonStyle} >
        <Text text={buttonText} styles={textStyle} />
      </button>
    </div>
  )
}
export default Button