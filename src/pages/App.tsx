import Lista from '../components/lista'
import Formulario from '../components/formulario'
import style from './App.module.scss'

export default function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

