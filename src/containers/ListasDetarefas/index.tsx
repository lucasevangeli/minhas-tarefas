import * as S from './styles'
import Tarefa from '../../components/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver alta 3 da eback',
    prioridade: 'Importante',
    status: 'Pendentes'
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar fatura no Gmail',
    prioridade: 'Urgente',
    status: 'Concluida'
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino b',
    prioridade: 'Importante',
    status: 'Pendentes'
  }
]

const ListaDeTarefas = () => (
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

export default ListaDeTarefas
