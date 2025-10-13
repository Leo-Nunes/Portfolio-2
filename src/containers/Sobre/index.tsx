import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo='secundario'>
      Olá, meu nome é leonardo Nunes e sou um desenvolvedor front-end. Tenho experiência com html, css, javascript e react. Estou sempre buscando aprender novas habilidades e melhorar meu conhecimento na área de desenvolvimento web.
      Estou animado para trabalhar em projetos desafiadores e contribuir para o sucesso da equipe.
    </Paragrafo>
    <GithubSecao>
      <img src= "https://github-readme-stats.vercel.app/api?username=Leo-Nunes&show_icons=true"></img>
      <img src= "https://github-readme-stats.vercel.app/api/top-langs/?username=Leo-Nunes&layout=pie&https://github.com/anuraghazra/github-readme-stats"></img>
    </GithubSecao>
  </section>
)


export default Sobre
