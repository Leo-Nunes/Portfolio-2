import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Projetos from './containers/Projetos';
import Sidebar from './containers/Sidebar';
import Sobre from './containers/Sobre';
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light';
import temaDark from './themes/dark';

function App() {
  const [usandoTemaDark, setTemaDark] = useState(false);

  function alternarTema() {
    setTemaDark(!usandoTemaDark);
  }

  return (
    <ThemeProvider theme={usandoTemaDark ? temaDark : temaLight}>
    <EstiloGlobal/>
    <Container>
    <Sidebar alternarTema={alternarTema}/>
    <main>
      <Sobre/>
      <Projetos/>
    </main>
    </Container>
    </ThemeProvider>
  )
}

export default App;

