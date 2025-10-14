import styled from "styled-components"
import Paragrafo from "../Paragrafo"
import Titulo from "../Titulo"

const Card = styled.div`
  border: 1px solid #c1c1c1;
  padding: 16px;`

const Projeto = () => {
  return (
    <Card>
    <Titulo>Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">
      Lista de tarefas feita com VueJS
    </Paragrafo>
  </Card>
  )
}

export default Projeto
