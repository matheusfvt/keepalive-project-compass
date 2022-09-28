import styled from "styled-components";
import { white } from "UI/variaveis";
import React from "react";

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  background: #26292c;
  border: 1px solid #ffffff;
  border-radius: 50px;
  font-weight: 400;
  font-size: 16px;
  color: ${white};
  padding: 20px;
  width: 100%;
`;

const Icon = styled.i`
  position: absolute;
  padding: 20px 0;
  font-size: 20px;
  right: -30px;
  transition: all ease 1s;

  .icon-inside {
    right: 20px;
  }
`;

interface IProps{
  type: string,
  value: string,

}

// export const InputLogin = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
//   return (
//     <InputWrapper>
//       <Input {...props} />
//       <Icon />
//     </InputWrapper>
//   );
// };
