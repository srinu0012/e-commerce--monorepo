export const getEnvValue = (varName: string) => {
  const value = process.env[varName];
  if (!value) {
    throw new Error(
      `${varName} is required but not defined in the environment variables`
    );
  }
  return value;
};
