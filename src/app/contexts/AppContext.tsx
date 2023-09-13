import { createContext, Dispatch, SetStateAction } from "react";

// Interfaces
export interface User {
  username: string;
  email: string;
}
export type UserValueContextType = User | null;
interface AppContextType {
  user: UserValueContextType;
  setUser: Dispatch<SetStateAction<UserValueContextType>>;
}

/**
 * Valores por defecto de el contexto, en caso de no configurar
 * un provider
 */
const defaultValue: Record<keyof AppContextType, any> = {
  user: null,
  setUser: () => console.warn("YOU HAVEN'T SET A PROVIDER FOR setUser"),
};

// Contexto principal de la aplicación
const AppContext = createContext<AppContextType>(defaultValue);

export default AppContext;
