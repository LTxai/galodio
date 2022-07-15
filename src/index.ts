import { app } from "./controller/app";
import { userRouter } from "./controller/router/UserRouter";

app.use("/galodio", userRouter)
