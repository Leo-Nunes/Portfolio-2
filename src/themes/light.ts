import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    corPrincipal: string;
    corSecundaria: string;
    corDeFundo: string;
    corDeFundoBotao: string;
    corDaBorda: string;
  }
}

const temaLight = {
  corPrincipal: '#282A35',
  corSecundaria: '#949494',
  corDeFundo: '#FFF',
  corDeFundoBotao: '#4476bf',
  corDaBorda: '#c1c1c1',
}

export default temaLight;
