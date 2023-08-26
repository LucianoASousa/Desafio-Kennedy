import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { ToolsContext } from "../context/tools.context";

export const useAuth = () => useContext(AuthContext);
export const useTools = () => useContext(ToolsContext);