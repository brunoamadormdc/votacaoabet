import Routes from './routes/routes'
import Logobox from './components/logobox/logobox'
import Container from 'react-bootstrap/Container'
import { BrowserRouter } from 'react-router-dom'

const logo = "https://abet.com.br/abet/wp-content/uploads/2020/10/Logo-e-Selo-Site.png";

function App() {
  return (
    <BrowserRouter>
        <Container fluid>
          <Logobox imagem = {logo} title="Votação ABET 2021" /> 
          <Routes />
        </Container>
    </BrowserRouter>
  );
}

export default App;
