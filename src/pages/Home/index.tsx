import logo from "../../assets/LogoHome.svg";
import logoBall from "../../assets/bolaLogoCompass.png";
import { BText, Button, ButtonWrapper, Container, ContainerLogo, ContainerMain, ContainerText, Footer, FooterText, Header, List, MText, SText, WelcomeText } from "./styles";
import "./styles.ts";
import { useNavigate } from "react-router-dom";
import Clock from "components/Clock";
import Timer from "components/Timer";
import Locate from "components/Locate";
import { getAuth, signOut, browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "services/fireBaseConfig";
import { RegisterContext } from "common/contexts/Register";
import { useContext } from "react";
import { ref, getDatabase, get, child } from "firebase/database";

export default function Home() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const user = auth.currentUser;
  const { email, password } = useContext(RegisterContext);

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("usuario deslogado");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const dbRef = ref(getDatabase());
  // get(child(dbRef, `users/${userId}`))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log(snapshot.val());
  //     } else {
  //       console.log("No data available");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  return (
    <Container>
      <Header>
        <nav>
          <List>
            <ContainerLogo>
              <img src={logo} alt="logo compass" />
            </ContainerLogo>
            <Clock />
            <Locate />
          </List>
        </nav>
      </Header>
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
      <Footer>
        <WelcomeText>
          <p>
            Seja bem-vindo, <span>{user?.displayName?.split(" ")[0]}</span>
          </p>
        </WelcomeText>
        <FooterText className="footer__text">
          <p>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
        </FooterText>
        <Timer />
        <ButtonWrapper>
          <Button primary onClick={() => window.open("https://www.google.com.br/")}>
            Continuar navegando
          </Button>
          <Button onClick={() => logout()}>Logout</Button>
        </ButtonWrapper>
      </Footer>
    </Container>
  );
}
