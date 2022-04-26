import style from './Botao.module.scss'

type Texto = {
  texto: string
}

export default function Botao(props: Texto) {
  return (
    <button className={style.botao} >
      {props.texto}
    </button>
  )
}