import "dotenv/config.js";

import app from "./app.js";

const port = process.env.SERVER_PORT || 3003;

app.listen(port, () =>
  console.log("The server it's running on the port:" + port)
);
