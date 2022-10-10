import styled from "styled-components";

export const CountDownContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 0 10px;
`;
export const CountDownText = styled.p`
  font-weight: 400;
  font-size: 14px;
  max-width: 100px;
  align-self: center;
  justify-self: center;
  margin-right: 10px;
  @media (max-width: 900px) {
    margin-right: 6px;
  }
  @media (max-width: 680px), (max-height: 600px) {
    max-width: 100%;
    margin-right: 4vw;
  }
`;

export const CountDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  p:nth-child(2) {
    font-weight: 400;
    font-size: 14px;
    @media (max-width: 375px) {
    font-size: 12px;
  }
  }
  p:first-child {
    font-weight: 700;
    font-size: 48px;
    line-height: 40px;
    @media (max-width: 900px) {
      font-size: 40px;
      line-height: 36px;
    }
    @media (max-width: 375px), (max-height: 600px) {
    font-size: 30px;
    line-height: 26px;
  }
  }
`;
