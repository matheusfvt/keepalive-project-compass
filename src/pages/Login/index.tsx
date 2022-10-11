import { useContext, useRef } from "react";
import { BgLogin, Button, ClickHereMessage, Container, ContainerBox, ContainerInput, ContainerLogin, ContainerLogoLogin, ContainerText, ErrorMessage, LogoLogin } from "./styles";
import { useNavigate } from "react-router-dom";
import "./styles.ts";
import { UserContext } from "common/contexts/User";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "services/fireBaseConfig";


export default function Login() {
  const navigate = useNavigate();
  const userIconRef = useRef<HTMLElement>(null);
  const passIconRef = useRef<HTMLElement>(null);

  const { login, password, setLogin, setPassword, setTimerCount, loginError, setLoginError } = useContext(UserContext);

  const submitLogin = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, login, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert('logado')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode} ${errorMessage}`);
        
      });

    if (password.length > 5) {
      setLoginError(false);
      setTimerCount(60);
      navigate("/home");
      setLogin("");
      setPassword("");
    } else {
      setLoginError(true);
    }
  };

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
          <ContainerLogoLogin>
            <LogoLogin />
          </ContainerLogoLogin>
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
          <ClickHereMessage>
            <p>Ainda não tem uma conta?</p>
            <span
              onClick={() => {
                navigate("/register");
              }}
            >
              Clique aqui para criar
            </span>
          </ClickHereMessage>
        </ContainerLogin>
      </ContainerBox>
      <BgLogin>
        <LogoLogin />
      </BgLogin>
    </Container>
  );
}
