import styled from "styled-components";
import { bgLogin, errorInputColor, white } from "UI/variables";
import loginImg from "../../assets/loginImg.png";
import logo from "../../assets/LogoLogin.svg";

interface IError {
  appear: boolean;
}

export const Container = styled.div`
  display: flex;
  background: ${bgLogin};
  box-shadow: 4px 4px 70px 0px #00000040;
  color: ${white};
  min-height: 100vh;
  position: relative;
`;

export const ContainerBox = styled.div`
  width: 50vw;
  @media (max-width: 768px), (max-height: 600px) {
    width: 100vw;
  }
`;

export const BgLogin = styled(ContainerBox)`
  background-image: url(${loginImg});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  @media (max-width: 768px), (max-height: 600px) {
    display: none;
  }
`;

export const LogoLogin = styled.img`
  max-height: 65px;
  max-width: 300px;
  content: url(${logo});
  margin: 35px auto 0;
  display: flex;
  @media (max-width: 768px) {
    width: 55%;
  }

  @media (max-width: 425px), (max-height: 600px) {
    width: 75%;
  }
`;

export const ContainerLogoLogin = styled.div`
  display: none;

  @media (max-width: 768px), (max-height: 600px) {
    display: flex;
  }
`;

export const ContainerLogin = styled.div`
  margin: 15% 25%;
  display: flex;
  flex-direction: column;
  gap: 8vh;

  @media (max-width: 1199px) {
    margin: 20% 15%;
  }

  @media (max-width: 768px), (max-height: 600px) {
    margin: 0 15%;
    gap: 6vh;
  }
  @media (max-width: 575px), (max-height: 600px) {
    margin: 0 15% 15%;
  }
`;

export const ContainerText = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-bottom: 20px;
  h2 {
    font-weight: 400;
    font-size: 60px;
    @media (max-width: 425px), (max-height: 600px) {
      font-size: 50px;
    }
    @media (max-width: 375px) {
      font-size: 44px;
    }
  }
  h4 {
    font-weight: 400;
    max-width: 300px;
    font-size: 16px;
    @media (max-width: 425px), (max-height: 600px) {
      font-size: 14px;
    }
    @media (max-width: 375px) {
      font-size: 12px;
    }
  }
`;

export const ContainerInput = styled.div<IError>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 375px), (max-height: 600px) {
    gap: 25px
  }
  h3 {
    font-size: 30px;
    font-weight: 400;
    @media (max-width: 425px), (max-height: 600px) {
      font-size: 25px;
    }
    @media (max-width: 375px) {
      font-size: 22px;
    }
  }

  div {
    position: relative;
  }

  input {
    background: #26292c;
    border: 1px solid #ffffff;
    border-radius: 50px;
    font-weight: 400;
    font-size: 16px;
    color: ${white};
    padding: 20px;
    width: 100%;
    border: ${(props) => (props.appear ? `1px solid ${errorInputColor}` : "1px solid #ffffff")};
    @media (max-width: 425px){
      font-size: 14px;
    }
  }

  i {
    position: absolute;
    padding: 20px 0;
    font-size: 20px;
    right: -30px;
    transition: all ease 1s;
 
  }
  .icon-inside {
    right: 20px;
  }
`;

export const ErrorMessage = styled.div<IError>`
  display: ${(props) => (props.appear ? "block" : "none")};
  p {
    color: #e9b425;
    font-weight: 700;
    text-align: center;
    max-width: 55%;
    right: 0;
    left: 0;
    margin: 0 auto;
    @media (max-width: 1440px){
      max-width: 70%;
    }
    @media (max-width: 768px){
      max-width: 53%;
    }
    @media (max-width: 575px){
      max-width: 65%;
    }
    @media (max-width: 425px){
      max-width: 85%;
    }
    @media (max-width: 375px){
      max-width: 100%;
    }
  }
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%), linear-gradient(132.34deg, #ff2d04 22.57%, #c13216 72.04%);
  border: 2px solid;
  border-image-source: linear-gradient(132.34deg, #ff2d04 22.57%, #c13216 72.04%);
  border-radius: 50px;
  height: 65px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 5px 5px 15px 0px #00000080;

  /* @media (max-width: 1399px) {
  }
  @media (max-width: 1199px) {
  }
  @media (max-width: 991px) {
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 574px) {
  }
  @media (max-width: 425px) {
  }
  @media (max-width: 375px) {
  }
  @media (max-width: 320px) {
  }
  @media (max-width: 280px) {
  } */
`;

export const ClickHereMessage = styled.div`
color: ${white};
text-align: center;
font-weight: 400;
font-size: 18px;
display: flex;
flex-direction: column;
span{
  text-decoration: underline;
}
`
