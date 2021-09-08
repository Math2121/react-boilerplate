import * as SC from './styles'
function Main() {
  return (
    <SC.Wrapper>
      <SC.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React avançado escrito ao lado"
      />
      <SC.Title>React Avançado </SC.Title>
      <SC.Description>
        Typescript, React.JS, Next.JS e Styled Components
      </SC.Description>
      <SC.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedo em frente para uma tela com código"
      />
    </SC.Wrapper>
  )
}
export default Main
