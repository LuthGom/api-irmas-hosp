import usersRoutes from "./usersRoutes.js";

import answersRoutes from "./answersRoutes.js";

export const routes = (app) => {
  app.use(usersRoutes, answersRoutes);
};
