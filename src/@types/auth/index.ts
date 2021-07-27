import { ReactNode, Dispatch, SetStateAction } from "react";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContextData {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;

  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
}

export type { IAuthContextData, IAuthProviderProps }