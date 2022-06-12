import express from "express";
import cors from "cors";

import passwordsRoutes from "./routes/passwords";

const PORT = 3000;

const app = express();

app.use(cors({ origin: "http://localhost:4200" }));

app.use(express.json());

app.use("/api/password-cards", passwordsRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
