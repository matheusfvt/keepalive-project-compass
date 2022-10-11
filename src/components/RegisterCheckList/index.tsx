import { RegisterContext } from "common/contexts/Register";
import { regexLowercase, regexUppercase, regexNumber, regexSpecialCharacter } from "helper/regex";
import { useContext } from "react";
import { BsCheckCircle, BsFillCheckCircleFill } from "react-icons/bs";

export default function RegisterCheckList() {
  const { password } = useContext(RegisterContext);
  return (
    <div>
      <p>
        {password.length > 5 ? <BsFillCheckCircleFill color={"green"} /> : <BsCheckCircle color={"red"} />}
        Mínimo 6 dígitos
      </p>
      <p>
        {password.match(regexLowercase) ? <BsFillCheckCircleFill color={"green"} /> : <BsCheckCircle color={"red"} />}
        Letra minúscula
      </p>
      <p>
        {password.match(regexUppercase) ? <BsFillCheckCircleFill color={"green"} /> : <BsCheckCircle color={"red"} />}
        Letra maiúscula
      </p>
      <p>
        {password.match(regexNumber) ? <BsFillCheckCircleFill color={"green"} /> : <BsCheckCircle color={"red"} />}
        Um número
      </p>
      <p>
        {password.match(regexSpecialCharacter) ? <BsFillCheckCircleFill color={"green"} /> : <BsCheckCircle color={"red"} />}
        Caractere Especial
      </p>
    </div>
  );
}
