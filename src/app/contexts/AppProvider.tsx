import { ReactNode, useState } from "react";
import AppContext, { UserValueContextType } from "./AppContext";

interface IProps {
  children: ReactNode;
}

/**
 * Me provee los estados del contexto a los componentes
 * Los tipos e interfaces se encontrarán en el contexto y deberán
 * ser importados
 */
export default function AppProvider({ children }: IProps) {
  const [user, setUser] = useState<UserValueContextType>(null);
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}
