import React from 'react'
import "./text.css"
// import { Styled } from "../global/global"

const Text = ({ text, styles }) => {
  return (
    <div className={styles} >
      {text}
    </div>
  )
}
export default Text
