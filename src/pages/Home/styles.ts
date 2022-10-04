import styled from "styled-components";
import { bgFooter, black, red, white, white500 } from "UI/variaveis";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 6vw;
  @media (max-width: 1330px) {
    gap: 10vw;
  }
  @media (max-width: 1200px) {
    gap: 12vw;
  }
  @media (max-width: 1120px) {
    gap: 14vw;
  }
  @media (max-width: 1000px) {
    gap: 16vw;
  }
  @media (max-width: 900px) {
    gap: 20vw;
  }
`;

export const Header = styled.header`
  padding: 25px 40px 0;
  color: ${black};
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

export const ContainerMain = styled.main`
  display: flex;
  margin-right: 8vw;
  max-height: 100%;
  img {
    position: absolute;
    left: 0;
    bottom: 20px;
    max-width: 80%;
    max-height: 80%;
    overflow: hidden;
    @media (max-width: 1440px) {
      max-width: 75%;
      max-height: 75%;
    }
    @media (max-width: 1330px) {
      max-width: 70%;
      max-height: 70%;
      bottom: 40px;
    }
    @media (max-width: 1200px) {
      max-width: 65%;
      max-height: 65%;
      bottom: 50px;
    }
    @media (max-width: 1120px) {
      left: -20px;
      bottom: 60px;
    }
    @media (max-width: 1000px) {
      bottom: 70px;
      left: -100px;
      max-width: 60%;
      max-height: 60%;
    }
  }
`;

export const ContainerText = styled.div`
  text-align: right;
  margin-left: auto;
`;

export const MText = styled.h3`
  font-weight: 700;
  font-size: 34px;
  color: ${red};
  margin-bottom: 8px;
  @media (max-width: 1440px) {
    font-size: 30px;
  }
  @media (max-width: 1330px) {
    font-size: 26px;
  }
  @media (max-width: 1200px) {
    font-size: 24px;
  }
  @media (max-width: 1000px) {
    font-size: 22px;
  }
  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

export const BText = styled.h2`
  font-size: 56px;
  font-weight: 700;
  color: ${red};
  margin-top: 10px;
  @media (max-width: 1440px) {
    font-size: 50px;
  }
  @media (max-width: 1330px) {
    font-size: 44px;
  }
  @media (max-width: 1200px) {
    font-size: 40px;
  }
  @media (max-width: 1120px) {
    font-size: 38px;
  }
  @media (max-width: 1000px) {
    font-size: 36px;
  }
  @media (max-width: 900px) {
    font-size: 32px;
  }
`;
export const SText = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 50%;
  color: ${black};
  @media (max-width: 1440px) {
    font-size: 20px;
  }
  @media (max-width: 1330px) {
    font-size: 18px;
  }
  @media (max-width: 1120px) {
    font-size: 16px;
  }
  @media (max-width: 1000px) {
    font-size: 14px;
  }
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;
export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${bgFooter};
  color: ${white};
  position: absolute;
  bottom: 0;
  width: 100%;
  .footer__text {
    max-width: 35%;
    margin-left: 20vw;
    padding-right: 2%;
    border-right: 1px solid ${white};
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-weight: 400;
      font-size: 12px;
    }
    @media (max-width: 1200px) {
      margin-left: 15vw;
    }
    @media (max-width: 1000px) {
      margin-left: 12vw;
    }
    @media (max-width: 900px) {
      margin-left: 10vw;
    }
  }
`;

export const ButtonWrapper = styled.div`
  height: 99px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IButton {
  primary?: boolean;
}

export const Button = styled.button<IButton>`
  width: 131px;
  height: 100%;
  border: 0;
  cursor: pointer;

  color: ${(props) => (props.primary ? red : white)};
  background-color: ${(props) => (props.primary ? white500 : "transparent")};

  @media (max-width: 900px) {
    width: 120px;
  }

  @media (max-width: 1399px) {
  }
  @media (max-width: 1199px) {
  }
  @media (max-width: 991px) {
  }
  @media (max-width: 768px) {
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
  }
`;
