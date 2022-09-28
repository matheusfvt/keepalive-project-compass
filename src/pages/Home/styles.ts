import styled from "styled-components";
import { bgFooter, black, red, white, white500 } from "UI/variaveis";

export const Container = styled.div``;

export const Header = styled.header`
  padding: 25px 40px 0;
  color: ${black};
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

export const ContainerMain = styled.div`
  display: flex;
  margin: 130px 135px 0;
  img {
    position: absolute;
    left: 0;
    bottom: 0;
    max-width: 725px;
    max-height: 725px;
  }
`;

export const ContainerText = styled.div`
  text-align: right;
  justify-self: flex-end;
  margin-left: auto;
`;

export const MText = styled.p`
  font-weight: 700;
  font-size: 30px;
  color: ${red};
`;

export const BText = styled(MText)`
  font-size: 56px;
`;

export const SText = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: ${black};
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
    max-width: 540px;
    margin-left: 20%;
    padding-right: 35px;
    border-right: 1px solid ${white};
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-weight: 400;
      font-size: 12px;
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
  background-color: ${(props) => (props.primary ? white500 : 'transparent')};
`;
