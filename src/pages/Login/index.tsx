import { useContext, useRef } from "react";
import { Button, Container, ContainerBox, ContainerInput, ContainerLogin, ContainerText, ErrorMessage, ImgLogin } from "./styles";
import { useNavigate } from "react-router-dom";
import "./styles.ts";
import logo from "../../assets/LogoLogin.svg";
import { UserContext } from "common/contexts/User";

export default function Login() {
  const navigate = useNavigate();
  const userIconRef = useRef<HTMLElement>(null);
  const passIconRef = useRef<HTMLElement>(null);
  const regexLogin = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const { login, password, setLogin, setPassword, setTimerCount, loginError, setLoginError } = useContext(UserContext);

  const submitLogin = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (regexLogin.test(login) && password.length > 5) {
      setLoginError(false);
      setTimerCount(60);
      navigate("/home");
      setLogin('');
      setPassword('');
    } else {
      setLoginError(true);
    }
  };

  console.log({ login });
  console.log({ password });

  const iconInside = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      if (!ref.current.classList.contains("icon-inside")) {
        ref.current.classList.add("icon-inside");
      } else {
        ref.current.classList.remove("icon-inside");
      }
    }
  };

  return (
    <Container>
      <ContainerBox>
        <ContainerLogin>
          <ContainerText>
            <h2>Olá,</h2>
            <h4>Para continuar navegando de forma segura, efetue o login na rede.</h4>
          </ContainerText>
          <ContainerInput appear={loginError}>
            <h3>Login</h3>
            <div>
              <input
                type="email"
                value={login}
                onChange={(event) => {
                  setLogin(event.target.value);
                }}
                placeholder="Usuário"
                onFocus={() => iconInside(userIconRef)}
                onBlur={() => iconInside(userIconRef)}
              />
              <i ref={userIconRef} className="fa fa-user-o" aria-hidden="true"></i>
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                placeholder="Senha"
                onFocus={() => iconInside(passIconRef)}
                onBlur={() => iconInside(passIconRef)}
              />
              <i ref={passIconRef} className="fa fa-lock" aria-hidden="true"></i>
            </div>
            <ErrorMessage appear={loginError}>
              <p>Ops, usuário ou senha inválidos. Tente novamente!</p>
            </ErrorMessage>
          </ContainerInput>
          <Button onClick={(e) => submitLogin(e)}>Continuar</Button>
        </ContainerLogin>
      </ContainerBox>
      <ImgLogin>
        <img src={logo} alt="logo" />
      </ImgLogin>
    </Container>
  );
}
