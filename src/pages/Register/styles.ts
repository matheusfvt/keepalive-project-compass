import styled from "styled-components";
import { white500, white } from "UI/variables";

export const ContainerInputRegister = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 375px), (max-height: 600px) {
    gap: 25px;
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
  input {
    background: #26292c;
    border: 1px solid #ffffff;
    border-radius: 50px;
    font-weight: 400;
    font-size: 16px;
    color: ${white};
    padding: 20px;
    width: 100%;
    border: 1px solid ${white500};
    @media (max-width: 425px) {
      font-size: 14px;
    }
  }
`;
