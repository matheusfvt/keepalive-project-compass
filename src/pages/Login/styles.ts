import styled from "styled-components";
import { bgLogin, white } from "UI/variaveis";
import loginImg from "../../assets/loginImg.png";

export const Container = styled.div`
  display: flex;
  background: ${bgLogin};
  box-shadow: 4px 4px 70px 0px #00000040;
  color: ${white};
  height: 100vh;
`;

export const ContainerBox = styled.div`
  width: 50vw;
`;

export const ImgLogin = styled(ContainerBox)`
  background-image: url(${loginImg});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
  display: flex;
  justify-content: center;

  img {
    max-height: 70px;
    max-width: 300px;
    margin-top: 35px;
  }
`;

export const ContainerLogin = styled.div`
  margin: 160px 25%;
  display: flex;
  flex-direction: column;
  gap: 110px;
`;

export const ContainerText = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-bottom: 20px;
  h2 {
    font-weight: 700;
    font-size: 60px;
  }
  h4 {
    font-weight: 400;
    max-width: 300px;
    font-size: 16px;
  }
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  h3 {
    font-size: 30px;
    font-weight: 400;
  }

  p {
    color: #e9b425;
    font-weight: 700;
    text-align: center;
    position: absolute;
    max-width: 55%;
    right: 0;
    left: 0;
    margin: 0 auto;
    display: none;
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
`;
