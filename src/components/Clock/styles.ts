import styled from "styled-components";

export const ItemClock = styled.li`
  text-align: center;
  @media (max-width: 680px) {
      display: none;
    }
  p {
    font-size: 144px;
    font-weight: 700;
    line-height: 120px;
    @media (max-width: 1330px) {
      font-size: 120px;
      line-height: 100px;
    }
  }
  span {
    font-weight: 400;
    font-size: 14px;
  }
`;
