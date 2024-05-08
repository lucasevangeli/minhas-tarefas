import BotaoAdicionar from '../../components/BotaoAdd'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListasDeTarefas'

const Home = () => (
  <>
    <BarraLateral />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
