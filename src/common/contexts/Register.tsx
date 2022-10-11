import React, { createContext, useState } from "react";

export interface RegisterProps {
  email: string;
  setEmail: (newState: string) => void;

  isEmailValid: boolean;
  setEmailValid: (newState: boolean) => void;

  password: string;
  setPassword: (newState: string) => void;

  isPasswordValid: boolean;
  setPasswordValid: (newState: boolean) => void;

  repeatPassword: string;
  setRepeatPassword: (newState: string) => void;

  isRepeatPasswordValid: boolean;
  setRepeatPasswordValid: (newState: boolean) => void;

  username: string;
  setUsername: (newState: string) => void;

  isUsernameValid: boolean;
  setUsernameValid: (newState: boolean) => void;
}

export const RegisterContext = createContext<RegisterProps>({} as RegisterProps);
RegisterContext.displayName = "RegisterContext";

export default function RegisterProvider({ children }: any) {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [isEmailValid, setEmailValid] = useState<boolean>(false);
  const [isPasswordValid, setPasswordValid] = useState<boolean>(false);
  const [isUsernameValid, setUsernameValid] = useState<boolean>(false);
  const [isRepeatPasswordValid, setRepeatPasswordValid] = useState<boolean>(false);

  return (
    <RegisterContext.Provider
      value={{
        isRepeatPasswordValid,
        setRepeatPasswordValid,
        isEmailValid,
        setEmailValid,
        isPasswordValid,
        setPasswordValid,
        isUsernameValid,
        setUsernameValid,
        email,
        setEmail,
        password,
        setPassword,
        repeatPassword,
        setRepeatPassword,
        username,
        setUsername,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}
