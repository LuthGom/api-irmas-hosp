import "dotenv/config.js";

import app from "./src/app.js";

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log("The server it's running on the port:" + port)
);
