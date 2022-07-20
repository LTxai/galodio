import { app } from "./controller/app";
import { bolodioRouter } from "./controller/router/BolodioRouter";
import { palpiteRouter } from "./controller/router/PalpiteRouter";
import { userRouter } from "./controller/router/UserRouter";

app.use("/galodio", userRouter);
app.use("/bolodio", bolodioRouter);
app.use("/palpite", palpiteRouter);