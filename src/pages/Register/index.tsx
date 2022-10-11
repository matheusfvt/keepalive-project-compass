import { useContext, useEffect, useState } from "react";
import { BgLogin, Button, ClickHereMessage, Container, ContainerBox, ContainerLogin, ContainerLogoLogin, ContainerText, LogoLogin } from "../Login/styles";
import { useNavigate } from "react-router-dom";
import "./styles.ts";
import RegisterCheckList from "components/RegisterCheckList";
import { RegisterContext } from "common/contexts/Register";
import { ContainerInputRegister } from "./styles";
import { regexLowercase, regexUppercase, regexNumber, regexSpecialCharacter, regexFullName, regexEmail } from "helper/regex";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { app, database } from "services/fireBaseConfig";
import { errorInputColor, white500 } from "UI/variables";
import { ref, set } from "firebase/database";

export default function Register() {
  const navigate = useNavigate();

  const [errorUsername, setErrorUsername] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorPassword, setErrorPassword] = useState<boolean>(false);
  const [errorRepeatPassword, setErrorRepeatPassword] = useState<boolean>(false);

  const {
    isEmailValid,
    setEmailValid,
    isPasswordValid,
    setPasswordValid,
    isUsernameValid,
    setUsernameValid,
    isRepeatPasswordValid,
    setRepeatPasswordValid,
    email,
    setEmail,
    password,
    setPassword,
    repeatPassword,
    setRepeatPassword,
    username,
    setUsername,
  } = useContext(RegisterContext);

  useEffect(() => {
    if (regexFullName.test(username)) {
      setUsernameValid(true);
      console.log("nome VALIDO");
    } else {
      setUsernameValid(false);
      console.log("nome invalido");
    }
    if (regexEmail.test(email)) {
      setEmailValid(true);
      console.log("email VALIDO");
    } else {
      setEmailValid(false);
      console.log("email invalido");
    }
    if (password.length > 5 && regexUppercase.test(password) && regexNumber.test(password) && regexSpecialCharacter.test(password) && regexLowercase.test(password)) {
      setPasswordValid(true);
      console.log("senha VALIDO");
    } else {
      setPasswordValid(false);
      console.log("senha invalida");
    }

    if (password === repeatPassword) {
      setRepeatPasswordValid(true);
      console.log("senha COINCIDE");
    } else {
      setRepeatPasswordValid(false);
      console.log('senha nao coincide');
      
    }
  }, [username, setUsernameValid, email, setEmailValid, password, repeatPassword, setPasswordValid, setRepeatPasswordValid]);

  const submitRegister = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const auth = getAuth(app);

    if (isUsernameValid && isEmailValid && isPasswordValid && isRepeatPasswordValid) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          set(ref(database, 'users/' + user.uid), {
            username: username,
            email: email,
          });
          updateProfile(userCredential.user, { displayName: username });
          console.log(user.displayName);
          console.log('usuario criado');
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(`${errorCode} ${errorMessage}`);

          // ..
        });
      
    } else {
      isUsernameValid ? setErrorUsername(false) : setErrorUsername(true);
      isEmailValid ? setErrorEmail(false) : setErrorEmail(true);
      isPasswordValid ? setErrorPassword(false) : setErrorPassword(true);
      isRepeatPasswordValid ? setErrorRepeatPassword(false) : setErrorRepeatPassword(true);
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
            <h4>Para continuar navegando de forma segura, efetue o cadastro na rede.</h4>
          </ContainerText>
          <ContainerInputRegister>
            <h3>Cadastro</h3>
            <input
              type="text"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
                setErrorUsername(false);
              }}
              style={{ borderColor: `${errorUsername ? errorInputColor : white500}` }}
              placeholder="Nome Completo"
            />
            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setErrorEmail(false);
              }}
              style={{ borderColor: `${errorEmail ? errorInputColor : white500}` }}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setErrorPassword(false);
              }}
              style={{ borderColor: `${errorPassword ? errorInputColor : white500}` }}
              placeholder="Senha"
            />
            <RegisterCheckList />
            <input
              type="password"
              value={repeatPassword}
              onChange={(event) => {
                setRepeatPassword(event.target.value);
                setErrorRepeatPassword(false);
              }}
              style={{ borderColor: `${errorRepeatPassword ? errorInputColor : white500}` }}
              placeholder="Confirmar Senha"
            />
          </ContainerInputRegister>
          <Button onClick={(e) => submitRegister(e)}>Cadastrar</Button>
          <ClickHereMessage>
            <p>Já tem uma conta?</p>
            <span
              onClick={() => {
                navigate("/");
              }}
            >
              Clique aqui para entrar
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
