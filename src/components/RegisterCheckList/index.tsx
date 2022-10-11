import { RegisterContext } from "common/contexts/Register";
import { regexLowercase, regexUppercase, regexNumber, regexSpecialCharacter } from "helper/regex";
import { useContext } from "react";
import { BsCheckCircle, BsFillCheckCircleFill } from "react-icons/bs";
import { CheckListContainer, CheckListItem } from "./styles";

export default function RegisterCheckList() {
  const { password } = useContext(RegisterContext);
  
  return (
    <CheckListContainer>
      <CheckListItem>
        {password.length > 5 ? <BsFillCheckCircleFill color={"green"} /> : <BsCheckCircle color={"red"} />}
        <span>Mínimo 6 dígitos</span>
      </CheckListItem>
      <CheckListItem>
        {password.match(regexLowercase) ? <BsFillCheckCircleFill color={"green"} /> : <BsCheckCircle color={"red"} />}
        <span>Letra minúscula</span>
      </CheckListItem>
      <CheckListItem>
        {password.match(regexUppercase) ? <BsFillCheckCircleFill color={"green"} /> : <BsCheckCircle color={"red"} />}
        <span>Uma letra maiúscula</span>
      </CheckListItem>
      <CheckListItem>
        {password.match(regexNumber) ? <BsFillCheckCircleFill color={"green"} /> : <BsCheckCircle color={"red"} />}
        <span>Um número</span>
      </CheckListItem>
      <CheckListItem>
        {password.match(regexSpecialCharacter) ? <BsFillCheckCircleFill color={"green"} /> : <BsCheckCircle color={"red"} />}
        <span>Caractere Especial</span>
      </CheckListItem>
    </CheckListContainer>
  );
}
