import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Tarefa from '../../models/tarefa'
import * as enums from '../../util/enums/tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar javasclipt',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'Estudar javasclipt',
      enums.Prioridade.URGENTE,
      enums.Status.COMCLUIDA,
      'Rever aula 2 do modulo',
      2
    ),
    new Tarefa(
      'Estudar react',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Praticar o userefect',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer