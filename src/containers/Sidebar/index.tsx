import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"


import { Descricao, BotaoTema, SidebarContainer } from "./styles"

type Props = {
  alternarTema: () => void;
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Leo_Nunes</Titulo>
      <Paragrafo tipo="secundario" font-Size={16}>Leonardo_Nunes</Paragrafo>
      <Descricao tipo="principal" fontSize={10}>
        Desenvolvedor Front-End
      </Descricao>
      <BotaoTema onClick={props.alternarTema}>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
