import Lista from '../components/lista'
import Formulario from '../components/formulario'
import style from './App.module.scss'
import Cronometro from '../components/cronometro';
import { useState } from 'react';
import { Itarefa } from '../types/tarefa';

export default function App() {
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([])
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

