import styled from "styled-components";
import { P } from "../../components/Paragrafo/styles";

export const Descricao = styled(P)`
  margin-bottom: 24px;
  margin-top: 20px;
`;

export const BotaoTema = styled.button`
  font-size: 10px;
  font-weight: bold;
  padding: 8px;
  border-radius: 12px;
  color: ${props => props.theme.corDeFundo};
  background-color: ${props => props.theme.corPrincipal};
  cursor: pointer;
  `;

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0px;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 38px;
  }
  `;
