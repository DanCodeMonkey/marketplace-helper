import jwt from "jsonwebtoken";
import { config } from "./env.js";

// Validade dos tokens da API (longa, pensada para app mobile).
const EXPIRES_IN = "30d";

export function signToken(userId) {
  return jwt.sign({ userId }, config.jwtSecret, { expiresIn: EXPIRES_IN });
}

// Retorna o payload decodificado ou null se o token for inválido/expirado.
export function verifyToken(token) {
  try {
    return jwt.verify(token, config.jwtSecret);
  } catch {
    return null;
  }
}
