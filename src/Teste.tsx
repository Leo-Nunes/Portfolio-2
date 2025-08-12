import styled from 'styled-components'


type BotaoProps = {
  principal: boolean
  fontSize: string
}


const Botao = styled.button<BotaoProps>`
  background-color: ${props => (props.principal ? 'green' : 'gray')};
`

function Teste() {
  return (
    <>
    <Botao fontSize="20px" principal>
      Enviar
      </Botao>
    <Botao fontSize='20px' principal = {false}>
      Cancelar
    </Botao>
    </>

  );
}

export default Teste
