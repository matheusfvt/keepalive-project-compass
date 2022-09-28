import styled from "styled-components";

export const CountDownContainer = styled.div`
   display: flex;
    text-align: center;
    justify-content: center;
`
export const CountDownText = styled.p`
      font-weight: 400;
      font-size: 14px;
      max-width: 100px;
      align-self: center;
      justify-self: center;
      margin-right: 10px;
`

export const CountDownWrapper = styled.div`
      display: flex;
      flex-direction: column;
      p:nth-child(2) {
        font-weight: 400;
        font-size: 14px;
      }
      p:first-child {
        font-weight: 700;
        font-size: 48px;
        line-height: 40px;
      }
`
