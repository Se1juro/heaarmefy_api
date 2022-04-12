import "dotenv/config";
import morgan from "morgan";
import { createExpressServer } from "routing-controllers";
import path from "path";

const app = createExpressServer({
  routePrefix: process.env.ROUTE_PREFIX,
  controllers: [path.join(__dirname + "/controllers/*.ts")],
  cors: true,
  classTransformer: true,
});

app.use(morgan("dev"));

export default app;
