import { createContext } from "react";
import axios from "axios";

export const AuthContext = createContext({});

const client = axios;
