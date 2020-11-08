export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  mongoUri: process.env.DATABASE_MONGO_URI,
});
