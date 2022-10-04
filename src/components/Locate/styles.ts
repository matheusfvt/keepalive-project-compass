import styled from "styled-components";

export const ItemTimezone = styled.li`
  @media (max-width: 680px) {
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
      @media (max-width: 525px) {
        width: 25px;
        height: 25px;
      }
      @media (max-width: 320px) {
        width: 20px;
        height: 20px;
      }
    }
    span {
      font-weight: 700;
      font-size: 48px;
      margin-left: 10px;
      @media (max-width: 680px) {
        font-size: 30px;
      }
      @media (max-width: 525px) {
        font-size: 20px;
      }
      @media (max-width: 320px) {
        font-size: 18px;
        margin-left: 5px;
      }
    }
  }

  p {
    font-weight: 400;
    font-size: 14px;
    @media (max-width: 680px) {
      margin: 0 auto;
    }
    @media (max-width: 525px) {
      font-size: 12px;
    }
    @media (max-width: 320px) {
      font-size: 10px;
    }
  }
`;

// <li className="timezone">
// <p>Passo Fundo - Brasil</p>
// <div>
//   <img src={logoTimezone} alt="logo timezone" />
//   <span>22°</span>
// </div>
// </li>
