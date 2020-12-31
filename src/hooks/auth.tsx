import React, { createContext, useState, useContext } from "react";

interface IAuthContext {
  logged: boolean;
  signIn(email: string, password: string): void;
  singOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem("@minha-carteira:logged");
    return !!isLogged;
  });

  const signIn = (email: string, password: string) => {
    if (email === "jhonnyoliveira.jhon@gmail.com" && password === "jhon123") {
      localStorage.setItem("@minha-carteira:logged", "true");
      setLogged(true);
    } else {
      alert("Senha ou usuário inválido");
    }
  };

  const singOut = () => {
    localStorage.removeItem("@minha-carteira:logged");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, singOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
