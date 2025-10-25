import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo='principal' fontSize={14}>
      Sou Leonardo Nunes, desenvolvedor front-end com sólida experiência em HTML, CSS, JavaScript, React, TypeScript, Sass, Less, Bootstrap, Git, Figma, n8n e SQL. Tenho paixão por criar interfaces modernas, responsivas e acessíveis, sempre com foco na experiência do usuário e na performance das aplicações.
  💡 Estou em constante evolução profissional, buscando aprimorar minhas habilidades técnicas e me manter atualizado com as melhores práticas e tendências do desenvolvimento web. Tenho facilidade para trabalhar em equipe, resolver problemas de forma criativa e contribuir para projetos desafiadores e inovadores.
  🚀 Estou aberto a oportunidades que me permitam aplicar meu conhecimento, aprender com profissionais experientes e colaborar para o crescimento de produtos digitais de alto impacto.
    </Paragrafo>
    <GithubSecao>
      <img src= "https://github-readme-stats.vercel.app/api?username=Leo-Nunes&show_icons=true"></img>
      <img src= "https://github-readme-stats.vercel.app/api/top-langs/?username=Leo-Nunes&layout=pie&https://github.com/anuraghazra/github-readme-stats"></img>
    </GithubSecao>
  </section>
)


export default Sobre
