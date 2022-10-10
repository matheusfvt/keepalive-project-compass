import styled from "styled-components";

export const ItemClock = styled.li`
  text-align: center;
  @media (max-width: 575px), (max-height: 600px) {
      display: none;
    }
  p {
    font-size: 144px;
    font-weight: 700;
    line-height: 120px;
    @media (max-width: 768px) {
      font-size: 100px;
      line-height: 80px;
    }
    @media (max-width: 620px) {
      font-size: 80px;
      line-height: 65px;
      }
  }
  span {
    font-weight: 400;
    font-size: 14px;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
