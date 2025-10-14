import styled from 'styled-components'

import {Props} from '.'

export const Titulo = styled.h3<Props>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '14px')};
  color: #282a35;
  margin-bottom: 16px;
  font-weight: bold;
  margin-top: 16px;
`;




