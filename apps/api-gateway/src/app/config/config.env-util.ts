export const getEnvFile = () => {
  const env = process.env.NODE_ENV || 'development';

  return `.${env}.env`;
};
