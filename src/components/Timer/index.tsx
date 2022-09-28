import { useNavigate } from "react-router-dom";
import { UserContext, UserProps } from "common/contexts/User";
import { useContext, useEffect } from "react";
import { CountDownContainer, CountDownText, CountDownWrapper } from "./styles";

export default function Timer() {
  const { timerCount, setTimerCount }: Pick<UserProps, "timerCount" | "setTimerCount"> = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const Timer = setTimeout(() => {
      if (timerCount > 0) {
        setTimerCount(timerCount - 1);
      } else {
        navigate(-1);
      }
    }, 1000);
  }, [timerCount, setTimerCount]);
  return (
    <CountDownContainer>
      <CountDownText>Application refreshs in</CountDownText>
      <CountDownWrapper>
        <p>{timerCount}</p>
        <p>seconds</p>
      </CountDownWrapper>
    </CountDownContainer>
  );
}

// <div className="footer__countdown">
// <p className="footer__countdown-text">Application refreshs in</p>
// <div className="footer__countdown-time">
//   <p>{time}</p>
//   <p>seconds</p>
// </div>
// </div>
