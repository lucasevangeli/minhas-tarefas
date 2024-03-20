import * as S from './styles'
import Tarefa from '../../components/Tarefa'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <S.Container>
      <p>
        Duas tarefas marcadas como: &quot;categoria&ldquo; e &quot;termos&ldquo;
      </p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default ListaDeTarefas
