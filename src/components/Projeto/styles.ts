import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`;

export const LinkBotao = styled.a`
    color: ${props => props.theme.corDeFundo};
    Font-size:14px;
    background-color: ${props => props.theme.corDeFundoBotao};
    padding: 10px 15px;
    test-decoration: none;
    padding: 8px;
    border radius: 4px;
    display: inline-block;
    margin-top: 24px;
`;
