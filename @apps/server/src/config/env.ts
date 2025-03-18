import dotenv from "dotenv";
import { getEnvValue } from "../utils/getEnvVariableHelper.js";
dotenv.config({path:"../.env.development"});

//server
export const getServerHost = () =>
  getEnvValue("SERVER_HOSTNAME") || "localhost";
export const getServerPort = () => Number(getEnvValue("SERVER_PORT")) || 3300;

// database
export const getDbUser = () => getEnvValue("DB_USER");
export const getDbHost = () => getEnvValue("DB_HOST");
export const getDbName = () => getEnvValue("DB_NAME");
export const getDbPaswword = () => getEnvValue("DB_PASSWORD");
export const getDbPort = () => Number(getEnvValue("DB_PORT"));

// jwt
export const getJwtSecreatKey = () => getEnvValue("SECRET_KEY");

// export


// const getEnv = {

// }