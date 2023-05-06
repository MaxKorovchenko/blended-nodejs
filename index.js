const { app } = require("./app");

const PORT = 3030;

app.listen(PORT, () => {
  console.log(`Server is up and running on port 3030  http://localhost:${PORT}`);
});
