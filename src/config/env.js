import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: Number(process.env.PORT) || 3333,
  sessionSecret:
    process.env.SESSION_SECRET || "troque-este-segredo-no-env-por-um-aleatorio",
  // Segredo dos tokens JWT da API (cai no SESSION_SECRET se não definido).
  jwtSecret:
    process.env.JWT_SECRET ||
    process.env.SESSION_SECRET ||
    "troque-este-segredo-no-env-por-um-aleatorio",
};
