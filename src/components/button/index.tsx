import style from './Botao.module.scss'

interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  texto: string,
  onClick?: () => void
}

export default function Botao({ onClick, texto, type }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao} >
      {texto}
    </button>
  )
}