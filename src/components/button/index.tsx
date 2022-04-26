import style from './Botao.module.scss'
import React from 'react'

export default class Botao extends React.Component<{
  type?: "button" | "submit" | "reset" | undefined,
  texto: string
}> {
  render() {
    const { type = 'button' } = this.props
    return (
      <button type={type} className={style.botao} >
        {this.props.texto}
      </button>
    )
  }
}