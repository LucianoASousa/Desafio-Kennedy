import React, { createContext, useCallback, useEffect, useState, useTransition } from "react";
import { iLogin } from "../interface/auth";
import api from '../utils/axios';
import { AxiosError } from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CustomToast from "../components/CustomToast";

/**
 * Contexto para gerenciamento do estado de autenticação.
 * @typedef {Object} AuthContext
 * @property {string} token - O token de autenticação.
 * @property {React.Dispatch<React.SetStateAction<string>>} setToken - Função para definir o token de autenticação.
 * @property {boolean} isAuthenticated - Sinalizador indicando se o usuário está autenticado.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setIsAuthenticated - Função para definir o sinalizador de autenticação.
 * @property {(data: iLogin) => void} login - Função para realizar o login do usuário.
 * @property {() => void} logout - Função para realizar o logout do usuário.
 * @property {boolean} [isPending] - Sinalizador indicando que o redirecionamento está pendente.
 * @property {string[]} error - Array de mensagens de erro.
 */

export const AuthContext = createContext<{
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  login: (data: iLogin) => void;
  logout: () => void;
  isPending?: boolean;
  error: string[];
}
>({
  token: "",
  setToken: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  login: () => {},
  logout: () => {},
  isPending: false,
  error: [''],
});

export function AuthProvider({ children }: { children: JSX.Element }) {
  
  const [token, setToken] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(['']);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken: string | null = localStorage.getItem('@token');
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
      api.defaults.headers.Authorization = `Bearer ${token}`;

      navigate('/dashboard');
    }
  }, [navigate, token]);

  const login = useCallback(async (data: iLogin) => {
    try {
      const response = await api.post('/auth/login', data);
      const { access_token } = response.data as { access_token: string,};

      setToken(access_token);
      setIsAuthenticated(true);

      api.defaults.headers.Authorization = `Bearer ${access_token}`;

      localStorage.setItem('@token', access_token);
      sessionStorage.setItem('@token', access_token);

      setError(['']);
      toast(
        <CustomToast
        message="Login realizado com sucesso"
        type="success"
        button="Ir para o dashboard"
        />
        );
        startTransition(() => {
        navigate('/dashboard');
      });
    } catch (error) {
      const { response } = error as AxiosError;
      if (response?.status === 401) {
        setError(['email ou password inválidos']);
        toast(
          <CustomToast
          message="Credenciais inválidas"
          type="error"
          button="Tentar novamente"
          />
        );
      }
    }
  }, [navigate]);

  const logout = useCallback(() => {
    setToken('');
    setIsAuthenticated(false);
    api.defaults.headers.Authorization = '';
    localStorage.removeItem('@token');
    sessionStorage.removeItem('@token');
    toast(
      <CustomToast
      message="Este foi um sucesso total!"
      type="success"
      button="Ir para o login"
      />);

      startTransition(() => {
        navigate('/');
      });
  }, [navigate]);

  return (
    <AuthContext.Provider
      value={{ token, setToken, isAuthenticated, setIsAuthenticated, login, logout, isPending, error }}
    >
      {children}
    </AuthContext.Provider>
  );
}

