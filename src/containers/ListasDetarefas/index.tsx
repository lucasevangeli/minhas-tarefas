import * as S from './styles'
import Tarefa from '../../components/Tarefa'
import * as enums from '../../util/enums/tarefa'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver alta 3 da eback',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar fatura no Gmail',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.COMCLUIDA
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino b',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
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
