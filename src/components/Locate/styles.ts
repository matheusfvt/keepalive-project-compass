import styled from "styled-components";

export const ItemTimezone = styled.li`
  @media (max-width: 575px), (max-height: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 40px;
      height: 40px;
      @media (max-width: 620px) {
        width: 32px;
        height: 32px;
      }
      @media (max-width: 575px), (max-height: 600px) {
        width: 25px;
        height: 25px;
      }
      @media (max-width: 320px) {
        width: 23px;
        height: 23px;
      }
    }
    span {
      font-weight: 700;
      font-size: 48px;
      margin-left: 10px;
      @media (max-width: 620px) {
        font-size: 30px;
      }
      @media (max-width: 575px), (max-height: 600px) {
        font-size: 20px;
      }
      @media (max-width: 320px) {
        font-size: 18px;
        margin-left: 10px;
      }
    }
  }

  p {
    font-weight: 400;
    font-size: 14px;
    @media (max-width: 620px){
      font-size: 12px;
    }
    @media (max-width: 575px), (max-height: 600px) {
      font-size: 14px;
      margin: 0 auto;
    }
    @media (max-width: 425px){
      font-size: 12px;
    }
    @media (max-width: 320px) {
      font-size: 10px;
    }
  }
`;
