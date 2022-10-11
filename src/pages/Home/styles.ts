import styled from "styled-components";
import { bgFooter, black, red, white, white500 } from "UI/variables";
import logo from "../../assets/LogoHome.svg";
import logoWhite from "../../assets/LogoLogin.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;

export const Header = styled.header`
  padding: 25px 40px 0;
  color: ${black};

  @media (max-width: 620px) {
    padding: 25px 20px 0;
  }
  @media (max-width: 575px), (max-height: 600px) {
    background: ${bgFooter};
    color: ${white};
    padding-bottom: 15px;
  }

  @media (max-width: 320px) {
    padding: 25px 10px 15px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  @media (max-width: 768px), (max-height: 600px) {
    align-items: center;
  }
  @media (max-width: 575px), (max-height: 600px) {
    justify-content: flex-start;
  }
`;

export const ContainerLogo = styled.li`
  img {
    content: url(${logo});
  }
  @media (max-width: 620px) {
    max-width: 125px;
    max-height: 38px;
  }
  @media (max-width: 575px), (max-height: 600px) {
    max-width: 150px;
    max-height: 42px;
    content: url(${logoWhite});
  }
  @media (max-width: 425px) {
    max-width: 100px;
    max-height: 28px;
  }
  @media (max-width: 320px) {
    max-width: 80px;
    max-height: 22px;
  }
`;

export const ContainerMain = styled.main`
  display: flex;
  padding: 5vw 8vw 5vw 0;
  max-height: 100%;

  @media (max-width: 425px), (max-height: 600px) {
    padding: 5vw 8vw;
  }
  @media (max-width: 375px) {
    padding-bottom: 10vw;
  }
  img {
    position: absolute;
    left: 0;
    bottom: 20px;
    max-width: 80%;
    max-height: 80%;
    z-index: 0;
    @media (max-width: 1440px) {
      max-width: 75%;
      max-height: 75%;
    }
    @media (max-width: 1300px) {
      max-width: 65%;
      max-height: 65%;
      left: -20px;
      bottom: 40px;
    }
    @media (max-width: 1199px) {
      max-width: 58%;
      max-height: 58%;
      left: -40px;
      bottom: 60px;
    }
    @media (max-width: 1023px) {
      max-width: 50%;
      max-height: 50%;
      left: -60px;
      bottom: 60px;
    }
    @media (max-width: 915px) {
      max-width: 40%;
      max-height: 40%;
      left: -60px;
      bottom: 60px;
    }

    @media (max-width: 768px), (max-height: 600px) {
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
  margin-bottom: 6px;
  @media (max-width: 1440px) {
    font-size: 30px;
  }
  @media (max-width: 1300px) {
    font-size: 28px;
  }
  @media (max-width: 1023px) {
    font-size: 26px;
  }
  @media (max-width: 575px), (max-height: 600px) {
    font-size: 22px;
  }
  @media (max-width: 320px) {
    font-size: 18px;
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
  @media (max-width: 1300px) {
    font-size: 42px;
    margin-top: 15px;
  }
  @media (max-width: 1023px) {
    font-size: 40px;
    margin-top: 20px;
  }
  @media (max-width: 815px) {
    font-size: 36px;
    margin-top: 20px;
  }
  @media (max-width: 768px), (max-height: 600px) {
    margin-top: 20px;
  }
  @media (max-width: 575px) {
    font-size: 30px;
    margin-top: 35px;
  }
  @media (max-width: 425px) {
    font-size: 26px;
    margin-top: 40px;
  }
  @media (max-width: 320px) {
    font-size: 22px;
    margin-top: 30px;
  }
`;

export const SText = styled.p`
  font-weight: 400;
  font-size: 22px;
  color: ${black};
  @media (max-width: 1440px) {
    font-size: 20px;
  }
  @media (max-width: 1300px) {
    font-size: 18px;
  }
  @media (max-width: 768px), (max-height: 600px) {
    margin-top: 10px;
  }
  @media (max-width: 575px) {
    margin-top: 10px;
    font-size: 16px;
  }
  @media (max-width: 320px) {
    font-size: 14px;
  }
`;
export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${bgFooter};
  color: ${white};
  z-index: 1;
  bottom: 0;
  width: 100%;
  padding-left: 5vw;
  @media (max-width: 768px), (max-height: 600px) {
    flex-direction: column;
    gap: 3vw;
    padding-top: 3vw;
    padding-left: 0;
  }
  @media (max-width: 575px) {
    gap: 6vw;
    padding-top: 5vw;
  }
  @media (max-width: 375px) {
    gap: 8vw;
    padding-top: 7vw;
  }
`;

export const WelcomeText = styled.div`
  p {
    font-weight: 400;
    font-size: 16px;

    @media (max-width: 768px), (max-height: 600px) {
      font-size: 20px;
    }
    @media (max-width: 375px){
      font-size: 16px;
    }
  }

  span {
    font-weight: 700;
  }
`;

export const FooterText = styled.div`
  max-width: 35%;
  padding-right: 2%;
  border-right: 1px solid ${white};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px), (max-height: 600px) {
    margin: 0 8vw;
    max-width: 100%;
    border: none;
    padding: 0;
    height: auto;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    margin: 2vw 0;
    @media (max-width: 768px), (max-height: 600px) {
      margin: 0;
      line-height: 2;
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
  @media (max-width: 768px), (max-height: 600px) {
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
