import logo from "../../assets/LogoHome.svg";
import logoBall from "../../assets/bolaLogoCompass.png";
import { BText, Button, ButtonWrapper, ContainerMain, ContainerText, Footer, Header, List, MText, SText } from "./styles";
import "./styles.ts";
import { useNavigate } from "react-router-dom";
import Clock from "components/Clock";
import Timer from "components/Timer";
import Locate from "components/Locate";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <nav>
          <List>
            <li>
              <img src={logo} alt="logo compass" />
            </li>
            <Clock />
            <Locate />
          </List>
        </nav>
      </Header>

      <main>
        <ContainerMain>
          <img src={logoBall} alt="Logo compass" />
          <ContainerText>
            <MText>Our mission is</MText>
            <SText>Nossa missão é</SText>
            <BText>to transform the world</BText>
            <SText>transformar o mundo</SText>
            <BText>building digital experiences</BText>
            <SText>construindo experiências digitais</SText>
            <BText>that enable our client's growth</BText>
            <SText>que permitam o crescimento dos nossos clientes</SText>
          </ContainerText>
        </ContainerMain>
      </main>
      <Footer>
        <div className="footer__text">
          <p>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
        </div>
        <Timer />
        <ButtonWrapper>
          <Button primary onClick={() => window.open("https://www.google.com.br/")}>
            Continuar navegando
          </Button>
          <Button onClick={() => navigate('/')}>Logout</Button>
        </ButtonWrapper>
      </Footer>
    </>
  );
}
