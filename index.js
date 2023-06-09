require('dotenv').config();
const { app } = require('./app');
const { connectDb } = require('./db/connectDb');

const { PORT, DB_URI } = process.env;

(async () => {
  await connectDb(DB_URI);
  console.log(`Database connection established successfully`);
  app.listen(PORT, () => {
    console.log(
      `Server is up and running on port 3030  http://localhost:${PORT}`
    );
  });
})();
