import styled from "styled-components";

export const CheckListContainer = styled.div`
  padding-left: 1vw;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  @media (max-width: 575px){
      gap: 3vw;
    }
`;
export const CheckListItem = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  span {
    margin-left: 7px;
    line-height: 16px;
  }
`;
