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

const temaDark = {
  corPrincipal: '#fff',
  corSecundaria: '#eee',
  corDeFundo: '#282A35',
  corDeFundoBotao: '#fff',
  corDaBorda: '#c1c1c1',
}

export default temaDark;
