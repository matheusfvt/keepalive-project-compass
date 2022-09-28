import React, { createContext, useState } from "react";

export interface UserProps {
  login: string;
  password: string;
  timerCount: number;
  setLogin: (newState: string) => void;
  setPassword: (newState: string) => void;
  setTimerCount: (newState: number) => void;
}

export const UserContext = createContext<UserProps>({} as UserProps);
UserContext.displayName = "UserContext";

export default function UserProvider({ children }: any) {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [timerCount, setTimerCount] = useState<number>(100000);

  return (
  <UserContext.Provider 
  value={{ login, setLogin, password, setPassword, timerCount, setTimerCount }}
  >
    {children}
    </UserContext.Provider>
    );
}
