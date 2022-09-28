import { useRef, useState } from "react";
import { Button, Container, ContainerBox, ContainerInput, ContainerLogin, ContainerText, ImgLogin } from "./styles";
import { useNavigate } from "react-router-dom";
import "./styles.ts";
import logo from "../../assets/LogoLogin.svg";

export default function Login() {
  const navigate = useNavigate();
  const userIconRef = useRef<HTMLElement>(null);
  const passIconRef = useRef<HTMLElement>(null);

  const navigateHome = () => {
    navigate("/home");
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

  // const [minute, setMinute] = useState(0);
  // const [hour, setHour] = useState(0);
  // const [day, setDay] = useState("");
  // const [dayMonth, setDayMonth] = useState(0);
  // const [month, setMonth] = useState("");
  // const [year, setYear] = useState(0);

  return (
    <Container>
      <ContainerBox>
        <ContainerLogin>
          <ContainerText>
            <h2>Olá,</h2>
            <h4>Para continuar navegando de forma segura, efetue o login na rede.</h4>
          </ContainerText>
          <ContainerInput>
            <h3>Login</h3>
            <div>
              <input
                type="text"
                // value={login}
                // onChange={(event) => {
                //   setLogin(event.target.value);
                // }}
                placeholder="Usuário"
                onFocus={() => iconInside(userIconRef)}
                onBlur={() => iconInside(userIconRef)}
              />
              <i ref={userIconRef} className="fa fa-user-o" aria-hidden="true"></i>
            </div>
            <div>
              <input
                type="password"
                // value={password}
                // onChange={(event) => {
                //   setPassword(event.target.value);
                // }}
                placeholder="Senha"
                onFocus={() => iconInside(passIconRef)}
                onBlur={() => iconInside(passIconRef)}
              />
              <i ref={passIconRef} className="fa fa-lock" aria-hidden="true"></i>
            </div>
            <div>
              <p>Ops, usuário ou senha inválidos. Tente novamente!</p>
            </div>
          </ContainerInput>
          <Button onClick={navigateHome}>Continuar</Button>
        </ContainerLogin>
      </ContainerBox>
      <ImgLogin>
        <img src={logo} alt="logo" />
      </ImgLogin>
    </Container>
  );
}
