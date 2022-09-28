import styled from "styled-components";

export const ItemTimezone = styled.li`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 40px;
      height: 40px;
    }
    span {
      font-weight: 700;
      font-size: 48px;
      text-align: right;
      margin-left: 25px;
    }
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }
`;

// <li className="timezone">
// <p>Passo Fundo - Brasil</p>
// <div>
//   <img src={logoTimezone} alt="logo timezone" />
//   <span>22°</span>
// </div>
// </li>
