import React, { createContext, useState } from "react";

export interface UserProps {
  login: string;
  password: string;
  timerCount: number;
  loginError: boolean;
  setLogin: (newState: string) => void;
  setPassword: (newState: string) => void;
  setTimerCount: (newState: number) => void;
  setLoginError: (newState: boolean) => void;
}

export const UserContext = createContext<UserProps>({} as UserProps);
UserContext.displayName = "UserContext";

export default function UserProvider({ children }: any) {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [timerCount, setTimerCount] = useState<number>(60);
  const [loginError, setLoginError] = useState<boolean>(false);

  return (
  <UserContext.Provider 
  value={{ login, setLogin, password, setPassword, timerCount, setTimerCount, loginError, setLoginError }}
  >
    {children}
    </UserContext.Provider>
    );
}
