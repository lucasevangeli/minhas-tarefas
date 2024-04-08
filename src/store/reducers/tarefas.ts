import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Tarefa from '../../models/tarefa'
import * as enums from '../../util/enums/tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: {
    itens: [
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
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const idexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (idexDaTarefa >= 0) {
        state.itens[idexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions
export default tarefasSlice.reducer
