import * as S from '../../styles'
import { BotaoSalvar, Campo } from '../../styles'
import { Form, Opcoes } from './styles'

const Formulatio = () => (
  <S.MainContainer>
    <S.Titulo>Nova tarefa</S.Titulo>
    <Form>
      <Campo type="text" placeholder="titulo" />
      <Campo as="textarea" placeholder="Descrição da tarefa" />
      <Opcoes>
        <p>Prioridade</p>
        <input name="prioridade" type="radio" id="urgente" />{' '}
        <label htmlFor="urgente">urgente</label>
        <input name="prioridade" type="radio" id="importante" />{' '}
        <label htmlFor="importante">importante</label>
        <input name="prioridade" type="radio" id="normal" />{' '}
        <label htmlFor="normal">normal</label>
      </Opcoes>
      <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
    </Form>
  </S.MainContainer>
)

export default Formulatio
