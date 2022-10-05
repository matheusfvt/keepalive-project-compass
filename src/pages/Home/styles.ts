import styled from "styled-components";
import { bgFooter, black, red, white, white500 } from "UI/variaveis";
import logo from "../../assets/LogoHome.svg";
import logoWhite from "../../assets/LogoLogin.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 6vw;
  @media (max-width: 1330px), (max-height: 600px) {
    gap: 10vw;
  }
  @media (max-width: 1200px), (max-height: 600px) {
    gap: 12vw;
  }
  @media (max-width: 1120px), (max-height: 600px) {
    gap: 14vw;
  }
  @media (max-width: 1000px), (max-height: 600px) {
    gap: 16vw;
  }
  @media (max-width: 900px), (max-height: 600px) {
    gap: 20vw;
  }
  @media (max-width: 280px), (max-height: 600px) {
    gap: 10vw;
  }
`;

export const Header = styled.header`
  padding: 25px 40px 0;
  color: ${black};
  @media (max-width: 680px), (max-height: 600px) {
    background: ${bgFooter};
    color: ${white};
  }
  @media (max-width: 680px), (max-height: 600px) {
    padding-bottom: 15px;
  }
  @media (max-width: 525px), (max-height: 600px) {
    padding: 25px 20px 15px;
  }
  @media (max-width: 320px), (max-height: 600px) {
    padding: 25px 10px 15px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  align-items: center;
  @media (max-width: 680px), (max-height: 600px) {
    justify-content: flex-start;
  }
`;

export const ContainerLogo = styled.li`
  img {
    content: url(${logo});
  }

  @media (max-width: 680px), (max-height: 600px) {
    content: url(${logoWhite});
    max-width: 150px;
    max-height: 42px;
  }
  @media (max-width: 525px), (max-height: 600px) {
    max-width: 100px;
    max-height: 28px;
  }
  @media (max-width: 320px), (max-height: 600px) {
    max-width: 75px;
    max-height: 21px;
  }
  
`;

export const ContainerMain = styled.main`
  display: flex;
  padding-right: 8vw;
  max-height: 100%;
  padding-bottom: 8vw;
  @media (max-width: 525px), (max-height: 600px) {
    padding-right: 4vw;
  }
  @media (max-width: 280px), (max-height: 600px) {
    padding-bottom: 10vw;
  }
  img {
    position: absolute;
    left: 0;
    bottom: 20px;
    max-width: 80%;
    max-height: 80%;
    z-index: 0;
    @media (max-width: 1440px), (max-height: 600px) {
      max-width: 75%;
      max-height: 75%;
    }
    @media (max-width: 1330px), (max-height: 600px) {
      max-width: 70%;
      max-height: 70%;
      bottom: 40px;
    }
    @media (max-width: 1200px), (max-height: 600px) {
      max-width: 65%;
      max-height: 65%;
      bottom: 50px;
    }
    @media (max-width: 1120px), (max-height: 600px) {
      left: -20px;
      bottom: 60px;
    }
    @media (max-width: 1000px), (max-height: 600px) {
      bottom: 70px;
      left: -100px;
      max-width: 60%;
      max-height: 60%;
    }
    @media (max-width: 800px), (max-height: 600px) {
      left: -160px;
      bottom: 75px;
    }
    @media (max-width: 767px), (max-height: 600px) {
      display: none;
    }
  }
`;

export const ContainerText = styled.div`
  text-align: right;
  margin-left: auto;
  z-index: 1;
`;

export const MText = styled.h3`
  font-weight: 700;
  font-size: 34px;
  color: ${red};
  margin-bottom: 8px;
  @media (max-width: 1440px), (max-height: 600px) {
    font-size: 30px;
  }
  @media (max-width: 1330px), (max-height: 600px) {
    font-size: 26px;
  }
  @media (max-width: 1200px), (max-height: 600px) {
    font-size: 24px;
  }
  @media (max-width: 1000px), (max-height: 600px) {
    font-size: 22px;
  }
  @media (max-width: 900px), (max-height: 600px) {
    font-size: 20px;
  }
  @media (max-width: 525px), (max-height: 600px) {
    font-size: 18px;
  }
  @media (max-width: 320px), (max-height: 600px) {
    font-size: 14px;
  }
`;

export const BText = styled.h2`
  font-size: 56px;
  font-weight: 700;
  color: ${red};
  margin-top: 10px;
  @media (max-width: 1440px), (max-height: 600px) {
    font-size: 50px;
  }
  @media (max-width: 1330px), (max-height: 600px) {
    font-size: 44px;
  }
  @media (max-width: 1200px), (max-height: 600px) {
    font-size: 40px;
  }
  @media (max-width: 1120px), (max-height: 600px) {
    font-size: 38px;
  }
  @media (max-width: 1000px), (max-height: 600px) {
    font-size: 36px;
  }
  @media (max-width: 900px), (max-height: 600px) {
    font-size: 32px;
  }
  @media (max-width: 767px), (max-height: 600px) {
    margin-top: 20px;
  }
  @media (max-width: 525px), (max-height: 600px) {
    font-size: 24px;
    margin-top: 35px;
  }
  @media (max-width: 375px), (max-height: 600px) {
    font-size: 22px;
    margin-top: 45px;
  }
  @media (max-width: 320px), (max-height: 600px) {
    font-size: 18px;
    margin-top: 50px;
  }
  @media (max-width: 280px), (max-height: 600px) {
    font-size: 16px;
    margin-top: 25px;
  }
`;
export const SText = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 50%;
  color: ${black};
  @media (max-width: 1440px), (max-height: 600px) {
    font-size: 20px;
  }
  @media (max-width: 1330px), (max-height: 600px) {
    font-size: 18px;
  }
  @media (max-width: 1120px), (max-height: 600px) {
    font-size: 16px;
  }
  @media (max-width: 1000px), (max-height: 600px) {
    font-size: 14px;
  }
  @media (max-width: 767px), (max-height: 600px) {
    margin-top: 10px;
  }
  @media (max-width: 375px), (max-height: 600px) {
    font-size: 12px;
    margin-top: 15px;
  }
  @media (max-width: 320px), (max-height: 600px) {
    font-size: 10px;
  }
`;
export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${bgFooter};
  color: ${white};
  position: fixed;
  bottom: 0;
  width: 100%;
  @media (max-width: 680px), (max-height: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 3vw;
    padding-top: 3vw;
  }
  @media (max-width: 525px), (max-height: 600px) {
    gap: 6vw;
    padding-top: 6vw;
  }
  @media (max-width: 375px), (max-height: 600px) {
    gap: 8vw;
    padding-top: 10vw;
  }
  @media (max-height: 280px), (max-height: 600px) {
    position: relative;
  }
  @media (max-height: 320px), (max-height: 600px) {
    position: relative;
  }
  .footer__text {
    max-width: 35%;
    padding-right: 2%;
    border-right: 1px solid ${white};
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20vw;
    @media (max-width: 1200px), (max-height: 600px) {
      margin-left: 15vw;
    }
    @media (max-width: 1000px), (max-height: 600px) {
      margin-left: 12vw;
    }
    @media (max-width: 900px), (max-height: 600px) {
      margin-left: 10vw;
    }
    @media (max-width: 680px), (max-height: 600px) {
      margin: 0 8vw;
      max-width: 100%;
      border: none;
      padding: 0;
    }
    p {
      font-weight: 400;
      font-size: 12px;
      margin: 2vw 0;
      @media (max-width: 680px), (max-height: 600px) {
        margin: 0;
        line-height: 2;
      }
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

  @media (max-width: 900px), (max-height: 600px) {
    width: 120px;
  }
  @media (max-width: 680px), (max-height: 600px) {
    width: 50vw;
    box-shadow: ${(props) => (props.primary ? "none" : `inset 0 0 2px ${white}`)};
  }

  /* @media (max-width: 1399px), (max-height: 600px) {
  }
  @media (max-width: 1199px), (max-height: 600px) {
  }
  @media (max-width: 991px), (max-height: 600px) {
  }
  @media (max-width: 768px), (max-height: 600px) {
  }
  @media (max-width: 574px), (max-height: 600px) {
  }
  @media (max-width: 425px), (max-height: 600px) {
  }
  @media (max-width: 375px), (max-height: 600px) {
  }
  @media (max-width: 320px), (max-height: 600px) {
  }
  @media (max-width: 280px), (max-height: 600px) {
  } */
`;
